"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function DataAssetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15])

  return (
    <motion.section
      ref={ref}
      className="bg-gray-100 py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #f97316 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          animate={{ backgroundPosition: ["0 0", "12px 12px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            animate={
              isInView
                ? {
                    backgroundImage: [
                      "linear-gradient(45deg, #1f2937, #1f2937)",
                      "linear-gradient(45deg, #f97316, #fbbf24, #1f2937)",
                      "linear-gradient(45deg, #1f2937, #1f2937)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
          >
            My Knowledge, My Asset.
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {["I'm driven by continuous learning, open-source collaboration, and solving problems that matter.",
              "My recent research explores advanced sentiment analysis using a hybrid of BERT, GNN, and LightGBM, achieving a groundbreaking 94.6% accuracy.",
              "Whether through development or research, I focus on creating tech solutions that bring measurable impact.",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-orange-500 pl-6 relative group"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.3 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <motion.div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.p className="text-lg text-gray-700 leading-relaxed relative z-10" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + index * 0.3 }}>
                  {text}
                </motion.p>
                <motion.div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-orange-500 to-yellow-500 h-0 group-hover:h-full transition-all duration-500" />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6"
            >
              <p className="text-md text-gray-600 mb-3">
                This research paper was accepted in an international conference and showcases a novel integration of deep learning and tree-based models for sentiment classification.
              </p>
              <a
                href="https://drive.google.com/file/d/1spLbeBqtQCqYj-E1N8cD3oE60azWhjTq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-full shadow-md transition"
              >
                View Research Paper
              </a>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            style={{ y, rotateX }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="relative w-80 h-[500px] bg-gradient-to-br from-orange-100 to-white rounded-3xl flex items-center justify-center shadow-xl border border-orange-200"
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-full h-full overflow-hidden rounded-2xl shadow-xl border-4 border-orange-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/images/my.jpg"
                  alt="Ridhi Jolly"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </motion.div>

              <motion.div className="absolute inset-0 rounded-3xl border border-orange-300 shadow-xl pointer-events-none" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}