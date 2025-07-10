"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function BrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  const brands = [
    { name: "Java", style: "font-bold" },
    { name: "Spring Boot", style: "font-bold" },
    { name: "React.js", style: "font-bold" },
    { name: "Next.js", style: "font-bold" },
    { name: "MongoDB", style: "font-bold" },
    { name: "PostgreSQL", style: "font-bold" },
    { name: "Node.js", style: "font-bold" },
    { name: "Express.js", style: "font-bold" },
    { name: "Django", style: "font-bold" },
    { name: "Flask", style: "font-bold" },
    { name: "TailwindCSS", style: "font-bold" },
    { name: "MySQL", style: "font-bold" },
    { name: "Git", style: "font-bold" },
    { name: "Selenium", style: "font-bold" },
  ]

  const rewards = [
    {
      name: "GitHub",
      icon: "GH",
      color: "bg-gray-800",
      stat: "10+ contributions",
      badge: "Top Open Source Contributor",
      url: "https://github.com/jollyridhi",
    },
    {
      name: "LeetCode",
      icon: "LC",
      color: "bg-yellow-500",
      stat: "400+ problems",
      badge: "Max Rating: 1634",
      url: "https://leetcode.com/ridhi9",
    },
    {
      name: "CodeChef",
      icon: "CC",
      color: "bg-red-500",
      stat: "100+ problems",
      badge: "Username: ridhi9090",
      url: "https://www.codechef.com/users/ridhi9090",
    },
    {
      name: "HackerRank",
      icon: "HR",
      color: "bg-green-600",
      stat: "5-Star Coder",
      badge: "Java • Problem Solving",
      url: "https://www.hackerrank.com/ridhijolly9",
    },
  ]

  const recentRewards = [
  {
    platform: "HackKachino Winner",
    amount: 1,
    date: "15 Mar 2025 • Hackathon",
  },
  {
    platform: "400+ LeetCode Solved",
    amount: 400,
    date: "10 May 2025 • DSA Milestone",
  },
  {
    platform: "Research Paper Published",
    amount: 1,
    date: "05 May 2025 • BERT + GNN + LightGBM",
  },
  {
    platform: "Top 10 – Smart India Hackathon (Internal)",
    amount: 10,
    date: "22 Jan 2025 • Innovation Challenge",
  },
  {
    platform: "AIR 282 – Coding Ninjas League",
    amount: 282,
    date: "15 Aug 2023 • National Rank",
  },
  {
    platform: "2nd Place – HackEye",
    amount: 2,
    date: "10 Oct 2024 • Hackathon",
  },
]

  return (
    <motion.section
      ref={ref}
      className="bg-black py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Floating bubbles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            animate={{
              backgroundImage: [
                "linear-gradient(45deg, #ffffff, #ffffff)",
                "linear-gradient(45deg, #f97316, #fbbf24, #ffffff, #f97316)",
                "linear-gradient(45deg, #ffffff, #ffffff)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
          >
            Explore My Skills
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From building secure backends to designing modern UIs,
          <motion.span
            className="text-orange-500 font-bold"
            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            {" "}here's what I work with.
          </motion.span>
        </motion.p>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={`${brand.name}-${index}`}
              className={`text-white text-3xl ${brand.style} cursor-pointer relative group`}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 0.8, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{
                scale: 1.2,
                opacity: 1,
                textShadow: "0 0 20px #f97316",
                rotateY: 5,
              }}
              onHoverStart={() => setHoveredBrand(brand.name)}
              onHoverEnd={() => setHoveredBrand(null)}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Rewards Cards (Clickable) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-5xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {rewards.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-4 text-black hover:scale-105 transition-all duration-300"
              whileHover={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 ${r.color} text-white rounded-md flex items-center justify-center font-bold`}>
                  {r.icon}
                </div>
                <div className="font-semibold text-lg">{r.name}</div>
              </div>
              <div className="text-sm mb-1">{r.stat}</div>
              <div className="text-xs text-gray-500">{r.badge}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Explore more platforms CTA */}
        <motion.button
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all mb-16"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.open("https://github.com/jollyridhi", "_blank")}
        >
          Explore More Platforms →
        </motion.button>

        {/* Achievements */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h4 className="text-xl font-bold text-white mb-4">Recent Achievements</h4>
          <div className="space-y-2">
            {recentRewards.map((reward, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-black">{reward.platform}</div>
                    <div className="text-xs text-gray-500">{reward.date}</div>
                  </div>
                  <div className="text-green-600 font-semibold">+ {reward.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
