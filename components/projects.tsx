"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: "🔁",
    title: "Switch Stream",
    description:
      "A one-click video-based solution to automatically switch streaming sources to sustainable energy usage. Built with React and Node.js, it reduces carbon footprint in data-heavy platforms.",
    color: "from-blue-500 to-purple-600",
    url: "https://github.com/jollyridhi/Switch_Stream"
  },
  {
    icon: "🚗",
    title: "Volksmart",
    description:
      "A smart car infotainment system to gamify driving behavior and reward eco-friendly choices. Built with Flutter and Firebase, it promotes sustainable urban commuting.",
    color: "from-orange-500 to-red-500",
    url: "https://github.com/jollyridhi/VolksMarkt"
  },
  {
    icon: "🏢",
    title: "Enterprise Visitor Access Suite",
    description:
      "A secure visitor pass and check-in platform for institutions and businesses. Built using MERN stack, it features face ID, role-based dashboards, and access logging.",
    color: "from-green-500 to-teal-500",
    url: "https://github.com/jollyridhi/Enterprise-Visitor-Access-Suite"
  }
]

export function Projects() {
  return (
    <motion.section
      id="projects" // IMPORTANT for scroll-to-section
      className="bg-black py-20 px-6 min-h-screen scroll-mt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="border-l-4 border-orange-500 pl-6 relative group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                >
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>

              <div className="mt-4">
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                >
                  View Project ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
