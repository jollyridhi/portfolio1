import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo / Name */}
          <div>
            <div className="text-2xl font-bold text-orange-500">Ridhi Jolly</div>
            <p className="text-gray-400 mt-2 text-sm">
              Software Developer • Java | Node.js | React | PostgreSQL | Scalable Web Apps
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "X (Twitter)", href: "https://x.com/RidhiJolly" },
                { label: "LinkedIn", href: "https://linkedin.com/in/ridhi-jolly-68a926248" },
                { label: "LeetCode", href: "https://leetcode.com/u/ridhi9" },
                { label: "GitHub", href: "https://github.com/jollyridhi" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-orange-400 space-x-2 transition"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extras */}
          <div>
            <h3 className="font-semibold text-white mb-4">More</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://drive.google.com/file/d/1ANv6LGsSfcdOHM3oyhhJGHP_daJN8XPB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-400 space-x-2 transition"
                >
                  <span>Resume</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              {/* <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ridhi Jolly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
