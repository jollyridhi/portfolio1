// "use client"

// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"
// import { Github, Linkedin, Twitter, Code2 } from "lucide-react"

// export function FeaturesSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   const features = [
//     {
//       icon: "🔁",
//       title: "Switch Stream",
//       description:
//         "A one-click video-based solution to automatically switch streaming sources to sustainable energy usage. Built with React and Node.js, it reduces carbon footprint in data-heavy platforms.",
//       color: "from-blue-500 to-purple-600",
//       url: "https://github.com/jollyridhi/Switch_Stream"
//     },
//     {
//       icon: "🚗",
//       title: "Volksmart",
//       description:
//         "A smart car infotainment system to gamify driving behavior and reward eco-friendly choices. Built with Flutter and Firebase, it promotes sustainable urban commuting.",
//       color: "from-orange-500 to-red-500",
//       url: "https://github.com/jollyridhi/VolksMarkt"
//     },
//     {
//       icon: "🏢",
//       title: "Enterprise Visitor Access Suite",
//       description:
//         "A secure visitor pass and check-in platform for institutions and businesses. Built using MERN stack, it features face ID, role-based dashboards, and access logging.",
//       color: "from-green-500 to-teal-500",
//       url: "https://github.com/jollyridhi/Enterprise-Visitor-Access-Suite"
//     }
//   ]

//   const socials = [
//     { icon: Github, label: "GitHub", link: "https://github.com/jollyridhi" },
//     { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/ridhi-jolly-68a926248/" },
//     { icon: Twitter, label: "Twitter", link: "https://x.com/RidhiJolly" },
//     { icon: Code2, label: "LeetCode", link: "https://leetcode.com/u/ridhi9/" }
//   ]

//   return (
//     <motion.section
//       id="projects"
//       ref={ref}
//       className="bg-black py-20 px-4 relative overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <motion.h2
//             className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
//             animate={{
//               backgroundImage: [
//                 "linear-gradient(45deg, #ffffff, #ffffff)",
//                 "linear-gradient(45deg, #f97316, #fbbf24, #ffffff)",
//                 "linear-gradient(45deg, #ffffff, #ffffff)"
//               ]
//             }}
//             transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//             style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
//           >
//             Explore My Project Portfolio
//           </motion.h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-16">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               className="border-l-4 border-orange-500 pl-6 relative group"
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
//               whileHover={{ scale: 1.05, x: 10 }}
//             >
//               <motion.div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <motion.div className="flex items-center mb-4 relative z-10" whileHover={{ scale: 1.1 }}>
//                 <motion.div
//                   className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
//                 >
//                   <motion.span className="text-white text-xl">
//                     {feature.icon}
//                   </motion.span>
//                 </motion.div>
//                 <motion.h3 className="text-xl font-bold text-white">
//                   {feature.title}
//                 </motion.h3>
//               </motion.div>
//               <motion.p className="text-gray-300 leading-relaxed relative z-10">
//                 {feature.description}
//               </motion.p>

//               <div className="mt-4 relative z-10">
//                 <a
//                   href={feature.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block text-sm px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
//                 >
//                   View Project ↗
//                 </a>
//               </div>

//               <motion.div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-orange-500 to-yellow-500 h-0 group-hover:h-full transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>

//         <motion.div className="text-center">
//           <motion.h3
//             className="text-2xl font-bold text-white mb-8"
//             animate={{
//               textShadow: [
//                 "0 0 10px rgba(249, 115, 22, 0.5)",
//                 "0 0 20px rgba(249, 115, 22, 0.8)",
//                 "0 0 10px rgba(249, 115, 22, 0.5)"
//               ]
//             }}
//             transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//           >
//             Let's connect and build something impactful together!
//           </motion.h3>

//           <div className="flex flex-wrap justify-center gap-4">
//             {socials.map((social, i) => (
//               <motion.a
//                 key={social.label}
//                 href={social.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-white hover:text-black transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <social.icon className="w-4 h-4" />
//                 <span>{social.label}</span>
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }
"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Code2 } from "lucide-react"

export function FeaturesSection() {
  const socials = [
    { icon: Github, label: "GitHub", link: "https://github.com/jollyridhi" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/ridhi-jolly-68a926248/" },
    { icon: Twitter, label: "Twitter", link: "https://x.com/RidhiJolly" },
    { icon: Code2, label: "LeetCode", link: "https://leetcode.com/u/ridhi9/" }
  ]

  return (
    <motion.section
      className="bg-black py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight"
          animate={{
            backgroundImage: [
              "linear-gradient(45deg, #ffffff, #ffffff)",
              "linear-gradient(45deg, #f97316, #fbbf24, #ffffff)",
              "linear-gradient(45deg, #ffffff, #ffffff)"
            ]
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
        >
          Let’s connect and build something impactful together!
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-white hover:text-black transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-4 h-4" />
              <span>{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
