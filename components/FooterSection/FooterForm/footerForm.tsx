import { useState } from "react";

export const FooterForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email  , formName:"Newsletter"}),
            });

            if (response.ok) {
                setStatus("success");
                setEmail(""); // Очищаем поле после успешной подписки
            } else {
                throw new Error("Failed to subscribe");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (

        <div className="flex flex-col justify-start items-start space-y-2  ">
            {status === "success" ? (
                <p className="text-green-600 bg-green-100 p-2 rounded-md">
                    ✅ Successfully subscribed!
                </p>
            ) : status === "error" ? (
                <p className="text-red-600 bg-red-100 p-2 rounded-md">
                    ❌ Subscription failed. Try again.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="flex w-full max-w-md">
                    <input
                        required
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow p-2 text-[12px] rounded-l-md border border-gray-300"
                        disabled={status === "loading"}
                    />
                    <button
                        type="submit"
                        className="bg-primary text-[14px]  text-primary-foreground p-1 rounded-r-md flex items-center justify-center min-w-[100px]"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? (
                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        ) : (
                            "Subscribe"
                        )}
                    </button>
                </form>
            )}
        </div>
    );
};
