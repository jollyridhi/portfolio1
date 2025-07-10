import { Header } from "@/components/header"
import { Apple, Play } from "lucide-react"

export default function TryNow() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">
              Start earning from
              <br />
              your <span className="text-orange-500">data</span> today!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of users who are already earning rewards by sharing their data intelligently and securely.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors text-lg font-medium">
              <Apple className="w-6 h-6" />
              <span>Download for iOS</span>
            </button>

            <button className="bg-white text-black px-8 py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors text-lg font-medium">
              <Play className="w-6 h-6" />
              <span>Download for Android</span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-white">Why choose Banza?</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-white mb-2">🔒 Privacy First</h3>
                <p className="text-gray-300 text-sm">Your data is encrypted and you control what gets shared</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">💰 Real Rewards</h3>
                <p className="text-gray-300 text-sm">Earn from 3000+ brands instantly</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">⚡ Instant Payouts</h3>
                <p className="text-gray-300 text-sm">Get rewarded immediately for your participation</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">🛡️ Secure Platform</h3>
                <p className="text-gray-300 text-sm">Bank-level security protects your information</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
