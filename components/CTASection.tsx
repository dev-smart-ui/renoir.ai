import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Automate & Scale?</h2>
        <form className="max-w-md mx-auto">
          <div className="flex flex-col space-y-4">
            <Input type="text" placeholder="Name" className="bg-primary-foreground text-primary" />
            <Input type="email" placeholder="Email" className="bg-primary-foreground text-primary" />
            <Input type="text" placeholder="Company" className="bg-primary-foreground text-primary" />
            <Button size="lg" className="w-full bg-background text-primary hover:bg-background/90">
              Get Started
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

