import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend('re_cZkzNZ2X_76o5Bm3Vx9DB3seq4mUzCJvp');
export async function POST(req: any) {
    console.log("Привет из API!");
    const data = await req.json();


    const tableRows = Object.entries(data)
        .map(([key, value]) => `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd; text-transform: capitalize;"><strong>${key.replace(/_/g, ' ')}:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${typeof value === "string" && value.includes("@") ? `<a href="mailto:${value}" style="color: #007bff;">${value}</a>` : value}</td>
            </tr>
        `)
        .join("");

    try {
        const response = await resend.emails.send({
            from: 'no-reply@renoir.one',
            to: 'doug@renoir.one',
            subject: 'Renoir.AI Contact Form',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        ${tableRows}
                    </table>
                    <p style="margin-top: 20px; font-size: 14px; color: #666;">This message was sent from your website contact form.</p>
                </div>
            `
        });

        console.log(response);
        return Response.json({ message: "Email sent successfully", response });
    } catch (error) {
        console.error("Ошибка отправки email:", error);
        return Response.json({ error: "Failed to send email", details: error.message }, { status: 500 });
    }
}
