import React from 'react';
import { Kalam, Satisfy } from 'next/font/google';
import { Button } from './ui/button';
import Link from 'next/link';

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const satisfy = Satisfy({
    weight: ['400'],
    subsets: ['latin']
})

const HeroSection = () => {
  return (
    <div className={`max-w-6xl mx-auto w-full sm:py-14 md:py-16 py-8 px-2 text-white text-center ${satisfy.className}`}>
      <h1 className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md ${kalam.className}`}>
        Turn Ideas into Impact — Instantly Create Smart AI Courses with Coursora ⚡️
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
        Coursora transforms your inputs into complete, personalized learning programs using AI.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href='/create-course'>
          <Button className="bg-white text-purple-700 font-semibold p-6 rounded-full shadow-md hover:bg-purple-100 transition md:text-lg text-base">
            Start Creating
          </Button>
        </Link>
        <Button className="border border-white text-white p-6  rounded-full hover:bg-white hover:text-purple-700 transition md:text-lg text-base">
          Learn More
        </Button>
      </div>
      {/* Example placement */}
      <section className="w-full bg-black text-white sm:mt-12 mt-10 md:py-14 lg:py-20 py-6 px-3 lg:px-16 rounded-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-4 lg:gap-16 gap-6">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore the Babylonian Civilization</h1>
            <p className="text-gray-400 text-lg mb-6">
              Dive deep into the history, culture, and advancements of the ancient Babylonian civilization.
              Discover its rich contributions to law, astronomy, architecture, and society.
              Understand how Babylon's legacy has shaped the modern world and continues to influence our understanding of history.
            </p>

            {/* Icon Row */}
            <div className="flex justify-center gap-4 text-white text-xl mt-8">
              <div className="bg-gray-800 p-2 rounded-lg">🏛️</div>
              <div className="bg-gray-800 p-2 rounded-lg">📜</div>
              <div className="bg-gray-800 p-2 rounded-lg">🔭</div>
              <div className="bg-gray-800 p-2 rounded-lg">⚖️</div>
              <div className="bg-gray-800 p-2 rounded-lg ">📚</div>
              <div className="bg-gray-800 p-2 rounded-lg">🌍</div>
            </div>
          </div>

          {/* RIGHT SIDE — Fake Course Card */}
          <div className="bg-[#1c1c1c] text-white rounded-xl sm:px-6 sm:py-6 px-2 py-4 space-y-4 shadow-lg border border-gray-700">
            <div className="text-lg font-semibold">Course: The Rise and Legacy of the Babylonian Civilization</div>

            <div className="flex gap-4 text-sm text-gray-400">
              <span className="bg-gray-800 px-2 py-1 rounded">📅 Start Date</span>
              <span className="bg-gray-800 px-2 py-1 rounded">🎓 Prerequisite</span>
              <span className="bg-gray-800 px-2 py-1 rounded">🔑 Key Topics</span>
              <span className="bg-gray-800 px-2 py-1 rounded">⚙️ Tools</span>
            </div>

            <div>
              <h4 className="font-bold mb-1">Course Overview:</h4>
              <p><strong>Objective:</strong> Explore the history of the Babylonian civilization, including its culture, religion, innovations in law, mathematics, and astronomy. Gain an understanding of how Babylon influenced later empires and shaped modern society.</p>
              <p><strong>Key Takeaways:</strong> An in-depth understanding of Babylonian contributions, the Hanging Gardens, the Code of Hammurabi, and the influence of Babylonian astronomy and mathematics.</p>
            </div>

            <div>
              <h4 className="font-bold mb-1">Module Outline:</h4>
              <p>• Module 1: <code className="bg-gray-700 px-1 rounded">The Early Beginnings of Babylon</code></p>
              <p>• Module 2: <code className="bg-gray-700 px-1 rounded">The Code of Hammurabi: Foundations of Law</code></p>
              <p>• Module 3: <code className="bg-gray-700 px-1 rounded">Advancements in Astronomy and Mathematics</code></p>
              <p>• Module 4: <code className="bg-gray-700 px-1 rounded">The Rise and Fall of Babylonian Power</code></p>
            </div>

            <div>
              <h4 className="font-bold mb-1">Key Assignments:</h4>
              <ul className="list-disc list-inside">
                <li>Assignment 1: Analyze the impact of the Code of Hammurabi on modern legal systems.</li>
                <li>Assignment 2: Research and present the Babylonian contributions to astronomy.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-1">Tools and Resources:</h4>
              <p>• Tools: <code className="bg-gray-700 px-1 rounded">Historical Texts</code>, <code className="bg-gray-700 px-1 rounded">Research Databases</code></p>
              <p>• Resources: <code className="bg-gray-700 px-1 rounded">Babylonian Civilization Research Materials</code></p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HeroSection;
