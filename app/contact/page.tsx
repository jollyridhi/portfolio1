"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-32">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-white">Let’s Connect</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, feedback, or a collaboration idea — I’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[#111] rounded-2xl p-8 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6 text-white">Send me a message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" className="bg-gray-900 border-gray-700 text-white" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" className="bg-gray-900 border-gray-700 text-white" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Let’s talk about..."
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={6}
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Other ways to reach me</h2>
              <p className="text-gray-400">Feel free to connect via any of the methods below.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">ridhijolly9@gmail.com</p>
                  <p className="text-sm text-gray-500">Mon - Fri, 9AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-gray-300">https://www.linkedin.com/in/ridhi-jolly-68a926248/</p>
                  <p className="text-sm text-gray-500">DMs open — let’s chat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+91-9013177111</p>
                  <p className="text-sm text-gray-500">Mon - Fri, 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
