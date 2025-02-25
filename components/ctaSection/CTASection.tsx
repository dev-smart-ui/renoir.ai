"use client"
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import {Result} from "@/components/ctaSection/result/result";

type FormValues = {
  name: string;
  email: string;
  company: string;
};

export function CTASection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();  
  const [formState , setFormState] = useState("form")
  const onSubmit = async(data: FormValues) => { 
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({...data , formName:"Ready to Automate & Scale?"}),
        }) 
        console.log("Form submitted:", data, response) 
        if(response?.status===200){
          setFormState("success")
        }else{
          setFormState("error")
        }
        console.log(response)
      } catch (e) {
        setFormState("error")
        console.log(e) 
      }
 
  };

  return (
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate & Scale?</h2>
          {formState === "form" ? <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <Input
                  {...register("name", {required: "Name is required"})}
                  type="text"
                  placeholder="Name"
                  className="bg-primary-foreground text-primary"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <Input
                  type="email"
                  placeholder="Email"
                  className="bg-primary-foreground text-primary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format"
                    }
                  })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <Input
                  type="text"
                  placeholder="Company"
                  className="bg-primary-foreground text-primary"
                  {...register("company", {required: "Company is required"})}
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}

              <Button type="submit" size="lg" className="w-full bg-background text-primary hover:bg-background/90">
                Get Started
              </Button>
            </div>
          </form> : <Result onReset={()=>setFormState("form")} formState={formState}/>}

        </div>
      </section>
  );
}
