import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Aurora from "./Aurora"
import './footer-7.css'

const LINKS = [
  {
    title: "Product",
    items: [
      {
        title: "Overview",
        href: "#",
      },
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Solutions",
        href: "#",
      },
      {
        title: "Tutorials",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
      {
        title: "News",
        href: "#",
      },
    ],
  },
  {
    title: "Resource",
    items: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
      {
        title: "Events",
        href: "#",
      },
      {
        title: "Help center",
        href: "#",
      },
    ],
  },
]

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      // style={{ borderTop: "1px solid rgba(255, 255, 255, 0.356)" }} 
      className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8 main-diva">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <h6 className="mb-4 text-lg font-semibold">Folium</h6>
          <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p className="mb-2 font-semibold opacity-50">{title}</p>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="hover:text-primary block py-1 transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div style={{ padding: "0", margin: "0" }} className="border-border mt-10 flex w-full flex-col items-center justify-center a-special-classname gap-4 border-t py-4 md:flex-row md:justify-between">
          <p className="text-center text-sm">
            &copy; {YEAR}{" "}All Rights Reserved.
          </p>
          <div className="flex gap-1 sm:justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Dribbble className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Aurora />

    </footer>
  )
}
