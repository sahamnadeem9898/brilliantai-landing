export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1A1A2E]/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Brilliant<span className="text-[#E94560]">AI</span>
          </div>
          <nav className="hidden md:flex gap-8 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <button className="bg-[#E94560] hover:bg-[#d63850] text-white px-6 py-2 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94560] to-[#FF6B88]">
                Brilliant AI
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Harness the power of cutting-edge artificial intelligence to automate workflows,
              gain insights, and scale your business faster than ever before.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-[#E94560] hover:bg-[#d63850] text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg shadow-[#E94560]/30">
                Start Free Trial
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg transition border border-white/20">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mt-32">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E94560] to-[#FF6B88] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/60 leading-relaxed">
                Process data and generate insights in milliseconds with our optimized AI infrastructure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E94560] to-[#FF6B88] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-white/60 leading-relaxed">
                Bank-level encryption and compliance with industry standards to keep your data safe.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E94560] to-[#FF6B88] rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-white/60 leading-relaxed">
                Gain actionable insights with advanced analytics and predictive modeling capabilities.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 bg-gradient-to-r from-[#E94560] to-[#FF6B88] rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using BrilliantAI to transform their operations.
            </p>
            <button className="bg-white text-[#E94560] hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition shadow-xl">
              Start Your Free Trial Today
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] border-t border-white/10 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Brilliant<span className="text-[#E94560]">AI</span>
          </div>
          <p className="text-white/50">© 2026 BrilliantAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
