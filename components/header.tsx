"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 py-6"
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-center">
        <motion.nav
          className={`bg-black rounded-full px-8 py-3 flex items-center space-x-8 shadow-2xl transition-all duration-300 ${
            isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Flame Icon */}
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-4 h-4 bg-gradient-to-t from-orange-600 to-orange-400 rounded-full relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full" />
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-sm opacity-50 animate-pulse" />
            </div>
          </motion.div>

          {/* Nav Items */}
          {[
            { name: "Work", href: "/" },
            { name: "Projects", href: "/#projects" },
            { name: "Resume", href: "/Ridhi_Jolly_Resume.pdf", external: true },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-white text-sm font-medium hover:text-orange-400 transition-colors relative group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-100 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10">Let’s Connect</span>
            </Link>
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  )
}
