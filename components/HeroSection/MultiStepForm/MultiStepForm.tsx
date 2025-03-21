"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Thank } from "@/components/HeroSection/MultiStepForm/thank/thank";
import { Error } from "@/components/HeroSection/MultiStepForm/Error/Error";

const formSteps = [
  { id: "email", label: "Work Email" },
  { id: "name", label: "Name" },
  { id: "company", label: "Company" },
  { id: "crm", label: "CRM" },
  { id: "source", label: "How did you hear about us?" },
]

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    crm: "",
    source: "",
  })
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleNext = () => {
    if (currentStep === 0 && !formData.email.trim()) {
      setError("Email is required.");
      return;
    }

    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit =  async () => {
    setCurrentStep(-1)
    try {
      const data =await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...formData , formName:"Built for Sales Leaders"}),
      })

      console.log("Form submitted:", formData, data)
      setCurrentStep(5)
    } catch (e) {
      console.log(e)
      setCurrentStep(6)
    }
  }

  return (
      <div className="w-full max-w-md  mx-auto lg:ml-0">
        <div className="flex justify-between mb-4">
          {formSteps.map((step, index) => (
              <div key={step.id} className={`w-1/5 h-1 rounded ${index <= currentStep ? "bg-primary" : "bg-gray-200"}`} />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
                <div>
                  <Input
                      type="email"
                      name="email"
                      placeholder="Enter your work email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mb-4"
                      required
                  />
                </div>
            )}
            {currentStep === 1 && (
                <div className="flex gap-4 mb-4">
                  <Input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                  />
                  <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                  />
                </div>
            )}
            {currentStep === 2 && (
                <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mb-4"
                    required
                />
            )}
            {currentStep === 3 && (
                <Select onValueChange={(value) => handleSelectChange(value, "crm")}>
                  <SelectTrigger className="mb-4">
                    <SelectValue placeholder="Select your CRM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salesforce">Salesforce</SelectItem>
                    <SelectItem value="hubspot">HubSpot</SelectItem>
                    <SelectItem value="pipedrive">Pipedrive</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
            )}
            {currentStep === 4 && (
                <Select onValueChange={(value) => handleSelectChange(value, "source")}>
                  <SelectTrigger className="mb-4">
                    <SelectValue placeholder="How did you hear about us?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
            )}
            {currentStep === 5 && <Thank setCurrentStep={setCurrentStep} />}
            {currentStep === 6 && <Error setCurrentStep={setCurrentStep} />}
          </motion.div>
        </AnimatePresence>
        {currentStep < formSteps.length && (
            <Button onClick={handleNext} disabled={currentStep===-1} className="w-full relative bg-gradient-to-r from-primary to-accent text-white">
              {currentStep < formSteps.length - 1 ? "Next" : "Submit"}
              {(currentStep===-1)&& <span className="animate-spin h-5 w-5 border-2 absolute right-2 border-primary border-t-transparent rounded-full"></span>}
            </Button>
        )}
        {error && <p className="absolute text-red-500 text-sm">{error}</p>}
      </div>
  )
}
