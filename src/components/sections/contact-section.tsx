import { Button } from "../ui/button";
import { contactInfo } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or potential collaborations. Whether you have a question about my work 
            or just want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="flex justify-center gap-6 flex-wrap">
            {contactInfo.map(({ icon, title, link }, idx) => (
              <Button
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-spring shadow-glow"
                onClick={() => window.open(link)}
                key={idx+title}
              >
                {icon}
                {title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}