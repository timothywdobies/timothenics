import React from 'react'
import Layout from '@/components/Layout'
import Section from '@/components/Section'

export default function Programs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/programs-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Timothenics Training Programs
          </h1>
        </div>
      </section>

      {/* Programs Grid */}
      <Section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Timothenics 30 */}
            <div className="bg-gray-800 border-2 border-yellow-600 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="mb-6">
                  <div className="inline-block bg-yellow-600 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Most Popular
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Timothenics 30
                  </h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-yellow-600">$29</span>
                    <span className="text-gray-400">one-time payment</span>
                  </div>
                  <p className="text-lg text-gray-300">
                    8-week level-based program. Four 30-minute sessions per week. Progress through Beginner, Intermediate, and Advanced levels.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">4 training tracks: Push, Pull, Legs, Skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">30-minute sessions, 4x per week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Clear unlock standards for progression</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Unlock skills: pull-ups, handstands, pistol squats</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="/timothenics-30"
                    className="block w-full text-center px-8 py-4 rounded-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Timothenics 30
                  </a>
                </div>
              </div>
            </div>

            {/* 7-Day Free Plan */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-600 transition-all duration-300 flex flex-col">
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="mb-6">
                  <div className="inline-block bg-yellow-600 bg-opacity-20 text-yellow-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Free
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    7-Day Start
                  </h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-yellow-600">$0</span>
                  </div>
                  <p className="text-lg text-gray-300">
                    Test the Timothenics system with a week of guided training. Experience all four tracks before committing.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">7 complete workouts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">30 minutes or less per session</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Experience all 4 training tracks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Zero equipment required</span>
                  </li>
                </ul>

                <div className="mt-auto pt-4">
                  <a
                    href="/7-day-plan"
                    className="block w-full text-center px-8 py-4 rounded-full bg-transparent border-2 border-yellow-600 hover:bg-yellow-600 text-yellow-600 hover:text-black font-bold text-sm uppercase tracking-wide transition-all duration-300"
                  >
                    Start Free 7-Day Plan
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gray-800">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white text-3xl font-bold">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Test the system with the free 7-Day Start, or jump straight into Timothenics 30.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/7-day-plan"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-semibold text-sm uppercase tracking-wide transition-all duration-300"
            >
              Start Free 7-Day Plan
            </a>
            <a
              href="/timothenics-30"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-yellow-600 text-black font-semibold text-sm uppercase tracking-wide hover:bg-yellow-500 transition-all duration-300 shadow-lg"
            >
              Get Timothenics 30
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
