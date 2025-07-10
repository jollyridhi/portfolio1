"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: progress === 100 ? 0.5 : 0 }}
    >
      <div className="text-center space-y-8">
        {/* Animated Banza logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-6xl font-bold text-white mb-4">
            <span className="text-orange-500">Ridhi Jolly</span>
          </div>

          {/* Flame animation */}
          <motion.div
            className="absolute -top-4 left-8 w-6 h-8"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-4 bg-gradient-to-t from-orange-600 to-orange-400 rounded-full relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            className="text-gray-400 text-sm mt-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Just a sec — I’m lining up something cool for you...
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
