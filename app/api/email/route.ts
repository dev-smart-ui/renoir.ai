import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY); // Хранение ключа в .env - безопаснее!
const resend = new Resend('re_cZkzNZ2X_76o5Bm3Vx9DB3seq4mUzCJvp');
export async function POST(req) {
    console.log("Привет из API!");
    const data = await req.json();

    try {
        const response = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'viktormoskalev07@gmail.com',
            subject: 'Renoir.AI contact form',
            html: JSON.stringify(data, null, 2)
        });
        console.log(response)
        return Response.json({ message: "Email sent successfully", response });
    } catch (error) {
        console.error("Ошибка отправки email:", error);
        return Response.json({ error: "Failed to send email", details: error.message }, { status: 500 });
    }
}
