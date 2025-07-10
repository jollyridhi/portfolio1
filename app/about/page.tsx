import { Header } from "@/components/header"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-white">About Banza</h1>
          <div className="prose prose-lg mx-auto text-gray-300">
            <p>
              Banza is revolutionizing how people interact with their personal data. We believe that your data is your
              asset, and you should be the one benefiting from it.
            </p>
            <p>
              Our platform allows you to safely share your data with trusted partners while maintaining complete control
              over your privacy. In return, you earn real rewards from brands you love.
            </p>
            <p>
              With access to over 3000+ brands and a secure, privacy-first approach, Banza is transforming the data
              economy to work for you.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
