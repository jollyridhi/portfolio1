"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentReward, setCurrentReward] = useState(99.0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReward((prev) => {
        const change = (Math.random() - 0.5) * 5
        return Math.max(90, Math.min(120, prev + change))
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const techStack = [
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "Next.js", icon: "⏭️", color: "bg-black" },
    { name: "Node.js", icon: "🟢", color: "bg-green-600" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-700" },
  ]

  return (
    <section id="projects">
      <motion.section
        className="min-h-screen bg-gray-800 flex items-center justify-center px-4 pt-20 relative overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Glowing dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Hi, I'm Ridhi Jolly.
              <br />
              <motion.span
                className="text-orange-500 relative"
                animate={{
                  textShadow: ["0 0 10px #f97316", "0 0 20px #f97316", "0 0 10px #f97316"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                I build smart web experiences.
                <motion.div
                  className="absolute -inset-2 bg-orange-500/20 rounded-lg blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          <div className="relative flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              {/* Glows */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-yellow-500/40 rounded-[3rem] blur-3xl scale-110"
                animate={{ scale: [1.1, 1.2, 1.1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-red-500/30 rounded-[3rem] blur-2xl scale-105"
                animate={{ scale: [1.05, 1.15, 1.05], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />

              {/* Phone mockup */}
              <motion.div
                className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl"
                whileHover={{ rotateX: 5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full bg-orange-50 rounded-[2.5rem] overflow-hidden">
                  <div className="h-full p-4">
                    {/* Header */}
                    <motion.div
                      className="flex items-center justify-between mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="text-orange-600 font-bold text-xl">Portfolio</div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    </motion.div>

                    {/* Current Project */}
                    <motion.div
                      className="bg-white rounded-2xl p-4 mb-6 shadow-sm"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="text-left">
                        <div className="text-sm text-gray-600">Now Working On</div>
                        <div className="text-lg font-bold text-green-700">
                          Smart Inventory Platform 🚀
                        </div>
                      </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {techStack.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            className="bg-white rounded-xl p-3 shadow-sm cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className={`w-8 h-8 ${tech.color} rounded-lg mb-2 flex items-center justify-center`}>
                              <span className="text-white text-sm">{tech.icon}</span>
                            </div>
                            <div className="text-sm font-semibold">{tech.name}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Recent Update */}
                    <motion.div
                      className="bg-white rounded-xl p-3 shadow-sm mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 }}
                    >
                      <div className="text-sm font-medium">Latest Update</div>
                      <div className="text-xs text-gray-500">Deployed app to Vercel with CI/CD</div>
                      <div className="text-green-600 font-semibold mt-1">#ProductionReady</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}
