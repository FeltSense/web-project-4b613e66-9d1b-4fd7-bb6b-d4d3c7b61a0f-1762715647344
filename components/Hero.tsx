export default function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-8 animate-fade-in">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-sm">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
          </div>
          <span className="text-sm font-medium text-teal-300">Trusted by 2,500+ businesses worldwide</span>
        </div>

        {/* Main headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Everything Your Business Needs,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              All in One Place
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Streamline operations, boost productivity, and scale faster with our comprehensive business platform. From CRM to analytics, we've got you covered.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mt-1 group-hover:bg-teal-500/30 transition-colors">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">No credit card required</p>
              <p className="text-sm text-gray-400">Start free, upgrade anytime</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mt-1 group-hover:bg-teal-500/30 transition-colors">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Setup in minutes</p>
              <p className="text-sm text-gray-400">Intuitive onboarding process</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mt-1 group-hover:bg-teal-500/30 transition-colors">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">24/7 support</p>
              <p className="text-sm text-gray-400">Expert help when you need it</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mt-1 group-hover:bg-teal-500/30 transition-colors">
              <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Enterprise-grade security</p>
              <p className="text-sm text-gray-400">Your data is always protected</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Start Free Trial
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <button className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-white">99.9%</div>
            <div className="text-sm text-gray-400">Uptime SLA</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-white">2.5k+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="relative">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-2xl blur-3xl transform scale-105"></div>
          
          {/* Main image container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/5">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=900&fit=crop&q=80"
              alt="Modern business team collaborating in a contemporary office space with digital tools"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating stats cards */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 backdrop-blur-sm border border-gray-100 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">+127%</div>
                <div className="text-sm text-gray-600">Growth Rate</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 backdrop-blur-sm border border-gray-100 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3.2hrs</div>
                <div className="text-sm text-gray-600">Time Saved Daily</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Bottom wave separator */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg className="w-full h-24 text-gray-50" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
    </svg>
  </div>
</div>
  );
}