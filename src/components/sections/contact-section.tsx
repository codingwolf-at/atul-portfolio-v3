import { Mail, MapPin, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "alex.rodriguez@email.com",
    link: "mailto:alex.rodriguez@email.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: null
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you have a question about my work 
                or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="flex flex-col items-center text-center space-y-3 p-6 glass-card hover:bg-primary/5 transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <h4 className="font-semibold mb-4">Available for:</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">Frontend Development</span>
                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">React/Next.js</span>
                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">Code Reviews</span>
                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">Freelance Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}