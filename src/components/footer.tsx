import { Heart, Dot } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t glass-card">
      <div className="container-custom">
        <div className="text-center flex gap-2 items-center justify-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Atul
          </p>
          <Dot />
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}