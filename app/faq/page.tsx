import { Header } from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-32">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-white text-center">Frequently Asked Questions</h1>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-800 rounded-lg px-6 border-gray-700">
              <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-500">
                How does Banza protect my privacy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Banza uses advanced encryption and privacy-preserving technologies to ensure your data remains secure.
                You maintain complete control over what data you share and with whom.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-800 rounded-lg px-6 border-gray-700">
              <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-500">
                What kind of rewards can I earn?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                You can earn gift cards from over 3000+ brands including Amazon, Apple, Nike, Uber, and many more.
                Rewards are delivered instantly to your account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-800 rounded-lg px-6 border-gray-700">
              <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-500">
                Is Banza free to use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, Banza is completely free to download and use. There are no hidden fees - you only earn rewards for
                participating.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-800 rounded-lg px-6 border-gray-700">
              <AccordionTrigger className="text-left font-semibold text-white hover:text-orange-500">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Simply download the Banza app from the App Store or Google Play, create your account, and start
                exploring reward opportunities that match your interests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  )
}
