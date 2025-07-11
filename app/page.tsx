"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BrandsSection } from "@/components/brands-section"
import { DataAssetSection } from "@/components/data-asset-section"
import { ParticleBackground } from "@/components/particle-background"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { Footer } from "@/components/footer"
import {Projects} from "@/components/projects"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Header />
      <HeroSection />
      <Projects />
      <FeaturesSection />
      <BrandsSection />
      <DataAssetSection />
      <Footer />
    </div>
  )
}
