// pages/landing.tsx

"use client"

import Link from 'next/link';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-bold mb-4">README Generator</h1>
//       <p className="mb-8 text-center">Generate a professional README for your projects quickly and easily.</p>
//       <Link href="/form">
//         <span className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</span>
//       </Link>
//     </div>
//   );
// };

// export default LandingPage;

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        {/* Header Section */}
        <header className="relative pt-6 pb-16 sm:pb-24">
          <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Generate Engaging READMEs</span>
              <span className="block text-emerald-500">Effortlessly</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Take the bore out of README writing with an AI-powered generator tailored for developers.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <div className="flex flex-col items-center">
              <Link href="/form" className="px-4 py-2 font-medium text-xl bg-emerald-500 text-white rounded-lg w-[250px] h-[54px] flex items-center justify-center">
                Try It Now
              </Link>
            </div>
          </div>
        </header>
        
        {/* Product Showcase Section */}
        <section className="py-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-base text-gray-500">
                Either input your repository URL or fill in the project details, hit submit, and voila! Your comprehensive README is ready.
              </p>
            </div>
            {/* Visuals */}
            <div className="mt-10">
              {/* Replace with your animation or images */}
              {/* <img src="/path-to-your-animation-or-image" alt="How it works visual" className="mx-auto"/> */}
            </div>
          </div>
        </section>

        {/* Unique Selling Proposition (USP) Section */}
        <section className="py-16 bg-gray-100">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Write My README?
              </h2>
              <div className="mt-10">
                <div className="flex flex-col md:flex-row justify-center">
                  <div className="md:mr-5">
                    <h3 className="font-semibold">AI-Powered</h3>
                    <p>Our tool intelligently crafts READMEs to save you time.</p>
                  </div>
                  <div className="mt-5 md:mt-0 md:ml-5">
                    <h3 className="font-semibold">Customizable</h3>
                    <p>You control the level of detail in your README.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Ditch the README Hassle?
            </h2>
            <div className="mt-10">
              <Link href="/form" className="bg-emerald-500 text-white py-2 px-4 rounded-lg text-xl">
                  Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
            {/* Links and Contact Info */}
            <div className="flex justify-center space-x-5">
              {/* <Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-500">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-emerald-500">Terms of Service</Link>
              <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-emerald-500">Contact Us</Link> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;

