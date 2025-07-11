import { Header } from "@/components/header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-32">
        <div className="text-center space-y-10">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <div className="prose prose-invert prose-lg text-gray-300 mx-auto space-y-6">
            <p>
              Hi! I'm <strong>Ridhi Jolly</strong>, a Computer Science undergraduate at Bennett University (Class of 2026) with a strong foundation in full-stack development, backend engineering, QA automation, and data structures & algorithms (DSA).
            </p>
            <p>
              With over <strong>400 problems solved on LeetCode</strong> and 5-star ratings on HackerRank, I constantly challenge myself through coding contests and real-world problem solving. I’ve been part of multiple national-level hackathons including <strong>HackKachino</strong>, <strong>HackEye</strong>, and the <strong>Smart India Hackathon</strong>.
            </p>
            <p>
              My project work includes <em>SwitchStream</em>, a scalable live streaming platform, and <em>FixItNow</em>, an end-to-end mobile repair service app featuring OTP login, Razorpay payments, and an admin dashboard. I also led QA automation for the <em>Enterprise Visitor Access Suite</em> using Selenium, Postman, TestNG, and Cucumber.
            </p>
            <p>
              Recently, I co-authored a research paper on <strong>multi-model sentiment analysis</strong> using BERT, GNN, and LightGBM—achieving over <strong>94% accuracy</strong>. I’m passionate about writing efficient code, building real-world systems, and collaborating in high-energy environments.
            </p>
            <p>
              Whether it's optimizing an algorithm or scaling a product, I thrive on building solutions that create real impact.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
