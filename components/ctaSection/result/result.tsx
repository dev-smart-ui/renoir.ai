import React from 'react';

import { Button } from "../../ui/button";
export const Result = ({formState , onReset }) => {

    return <div
        className="max-w-md mx-auto p-6 bg-background text-primary rounded-md border border-primary flex flex-col items-center justify-center min-h-[300px]">
        {formState === "success" ? (
            <p className="text-green-600 font-medium text-center">✅ Your request has been sent successfully!</p>
        ) : (
            <p className="text-red-600 font-medium text-center">❌ Something went wrong. Please try again.</p>
        )}

        <Button onClick={onReset} className="mt-4 bg-primary text-background hover:bg-primary/90">
            Back to Form
        </Button>
    </div>
};