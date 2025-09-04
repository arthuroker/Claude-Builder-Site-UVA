import { useState, useEffect } from 'react'
import { ChevronDown, Users, Zap, BookOpen, ArrowRight, Github, Mail, ExternalLink } from 'lucide-react'
import { Analytics } from "@vercel/analytics/next"
import dynamic from 'next/dynamic'

const Claude3DLogo = dynamic(() => import('../components/Claude3DLogo'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin w-16 h-16 border-4 border-coral border-t-transparent rounded-full"></div>
    </div>
  )
})

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentBenefit, setCurrentBenefit] = useState(0)

  const benefits = [
    "FREE CLAUDE PRO",
    "$50 IN API CREDITS", 
    "ACCESS TO AN EXCLUSIVE HACKATHON WITH THOUSANDS OF $$$ UP FOR GRABS",
    "ANTHROPIC STAFF GUEST LECTURES",
    "AND MORE..."
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section - Full Height */}
      <section className="relative bg-hero-bg min-h-screen px-4 py-8">
        <div className="h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] transition-all duration-1000 hero-grid ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Left Side - Content */}
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                {/* Main Title */}
                <div className="animate-slide-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-work-sans text-hero-text leading-tight">
                    CLAUDE<br />
                    BUILDERS @<br />
                    UVA
                  </h1>
                </div>
                
                {/* Horizontal Bar */}
                <div className="w-48 md:w-64 lg:w-80 h-0.5 md:h-1 bg-hero-bar animate-slide-up-delayed mx-auto lg:mx-0"></div>
                
                {/* Subtitle */}
                <div className="animate-slide-up-delayed-2">
                  <p className="text-xl md:text-2xl lg:text-3xl font-work-sans text-hero-text leading-relaxed">
                    EVERYONE IS A BUILDER WITH CLAUDE
                  </p>
                </div>
                
                {/* Benefits Preview */}
                <div className="animate-slide-up-delayed-3 space-y-4">
                  <p className="text-lg md:text-xl font-work-sans text-hero-text opacity-80">
                    Join a community of thinkers, builders, and doers
                  </p>
                  <div className="space-y-2 text-base md:text-lg font-work-sans text-hero-text opacity-70">
                    <p>• FREE CLAUDE PRO</p>
                    <p>• $50 IN API CREDITS</p>
                    <p>• EXCLUSIVE HACKATHONS</p>
                    <p>• ANTHROPIC STAFF LECTURES</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="animate-slide-up-delayed-3 pt-4">
                  <button 
                    onClick={scrollToBottom}
                    className="px-8 py-4 rounded-xl font-medium font-work-sans hover:scale-105 transition-all duration-300 text-lg md:text-xl"
                    style={{ 
                      backgroundColor: '#cc785c',
                      color: '#191919',
                    }}
                  >
                    JOIN US NOW
                  </button>
                </div>
              </div>
              
              {/* Right Side - Interactive 3D Claude Logo */}
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                  <Claude3DLogo 
                    width={320}
                    height={320}
                    className="w-full h-full"
                  />
                  {/* Fallback 2D logo - hidden by default, shown if 3D fails */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none" id="fallback-logo">
                    <img 
                      src="/assets/images/claude-logo.svg" 
                      alt="Claude Logo" 
                      className="w-full h-full animate-spin-slow"
                      onError={() => {
                        const fallback = document.getElementById('fallback-logo')
                        if (fallback) {
                          fallback.style.opacity = '1'
                          fallback.style.pointerEvents = 'auto'
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Join a Community Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-8 animate-fade-scale relative overflow-hidden" style={{ backgroundColor: '#e5e4df' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <h2 className="font-bold font-work-sans text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{ color: '#191919' }}>
                JOIN A COMMUNITY OF THINKERS, BUILDERS, AND DOERS
              </h2>
              
              <div className="w-32 md:w-48 h-0.5 md:h-1 bg-hero-bar mx-auto lg:mx-0"></div>
              
              <p className="text-xl md:text-2xl font-work-sans" style={{ color: '#191919' }}>
                WHERE YOU'LL HAVE ACCESS TO:
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4 text-lg md:text-xl font-work-sans" style={{ color: '#191919' }}>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-3">🎯</span> FREE CLAUDE PRO
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-3">💰</span> $50 IN API CREDITS
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-3">🏆</span> EXCLUSIVE HACKATHONS WITH $$$ PRIZES
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-3">👨‍🏫</span> ANTHROPIC STAFF GUEST LECTURES
                </p>
                <p className="flex items-center justify-center lg:justify-start">
                  <span className="mr-3">✨</span> AND SO MUCH MORE...
                </p>
              </div>
              
              {/* Join Us Button */}
              <div className="pt-4">
                <button 
                  onClick={scrollToBottom}
                  className="px-8 py-4 rounded-xl font-medium font-work-sans hover:scale-105 transition-all duration-300 text-lg md:text-xl"
                  style={{ 
                    backgroundColor: '#cc785c',
                    color: '#191919',
                  }}
                >
                  JOIN US NOW
                </button>
              </div>
            </div>
            
            {/* Right Side - Animated Background with Logo */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] benefits-card">
                <div 
                  className="absolute inset-0 rounded-3xl flex items-center justify-center"
                  style={{ backgroundColor: '#cc785c' }}
                >
                  {/* Background Logo */}
                  <img 
                    src="/assets/images/claude-logo.svg" 
                    alt="Claude Logo Background" 
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-20 animate-pulse-gentle"
                  />
                </div>
                
                {/* Floating Benefits */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium text-coral animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                    Free Claude Pro!
                  </div>
                  <div className="absolute top-16 right-4 md:right-8 bg-white/90 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium text-coral animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                    $50 Credits
                  </div>
                  <div className="absolute bottom-16 left-4 md:left-8 bg-white/90 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium text-coral animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                    Exclusive Events
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium text-coral animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                    Expert Lectures
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-32 px-4" style={{ backgroundColor: '#fafaf7' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h2 
                className="font-bold font-work-sans text-3xl md:text-4xl lg:text-5xl xl:text-6xl" 
                style={{ color: '#191919' }}
              >
                ABOUT US:
              </h2>
              <div className="w-32 md:w-48 h-0.5 md:h-1 bg-hero-bar mx-auto lg:mx-0"></div>
              <p 
                className="leading-relaxed font-work-sans text-lg md:text-xl lg:text-2xl"
                style={{ color: '#191919' }}
              >
                Claude Builders @ UVA is a Student-Run CIO that empowers students to pursue their goals. Whether it's building a web app, studying smarter, or researching, we're here to show how Claude can help.
              </p>
              <div className="space-y-4 text-base md:text-lg font-work-sans" style={{ color: '#191919' }}>
                <p className="opacity-80">🚀 Build innovative projects with AI assistance</p>
                <p className="opacity-80">📚 Learn cutting-edge AI development techniques</p>
                <p className="opacity-80">🤝 Connect with like-minded builders</p>
                <p className="opacity-80">🎯 Turn ideas into reality faster than ever</p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/assets/images/horizontal.png" 
                  alt="About Us" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  style={{ maxHeight: '500px' }}
                />
                {/* Optional: Add a subtle overlay or frame effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-coral/20 to-sage/20 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Join Section */}
      <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#e5e4df', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="w-full flex flex-col items-center justify-center" style={{ width: '85vw', maxWidth: '1400px' }}>
          
          {/* Main Heading */}
          <h2 
            className="font-bold font-work-sans text-center mb-4 sm:mb-8" 
            style={{ 
              color: '#191919',
              fontSize: 'clamp(2rem, 4vw, 4rem)'
            }}
          >
            HOW TO JOIN
          </h2>
          
          {/* Two Boxes Container */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-stretch w-full" style={{ height: 'auto', minHeight: 'auto' }}>
            
            {/* Left Box - Step 1 */}
            <div 
              className="rounded-3xl text-center flex flex-col justify-between flex-1 relative p-4 sm:p-6 md:p-8 h-96 sm:h-auto"
              style={{ backgroundColor: '#cc785c', minHeight: '350px' }}
            >
              {/* Top - Number and Text */}
              <div className="flex flex-col items-center space-y-4">
                <h3 
                  className="font-bold font-work-sans" 
                  style={{ 
                    color: '#191919',
                    fontSize: 'clamp(3rem, 6vw, 8rem)'
                  }}
                >
                  1
                </h3>
                <p 
                  className="font-work-sans" 
                  style={{ 
                    color: '#191919',
                    fontSize: 'clamp(1rem, 2.5vw, 2.5rem)'
                  }}
                >
                  JOIN OUR LISTSERV
                </p>
              </div>
              
              {/* Middle - Button */}
              <div className="flex justify-center">
                <a 
                  href="https://lists.virginia.edu/sympa/subscribe/claudebuildersatuva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl font-medium font-work-sans hover:scale-105 transition-all duration-300 touch-target flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#d4a27f',
                    color: '#191919',
                    fontSize: 'clamp(0.875rem, 1.75vw, 1.5rem)',
                    padding: 'clamp(0.75rem, 1.5vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)',
                    minHeight: 'clamp(3rem, 4.5vw, 4rem)'
                  }}
                >
                  SUBSCRIBE
                </a>
              </div>
              
              {/* Bottom - GIF */}
              <div className="flex justify-center">
                <img 
                  src="/assets/animations/claude point.gif" 
                  alt="Claude Point" 
                  className="object-contain rounded-2xl"
                  style={{
                    width: 'clamp(6rem, 10vw, 10rem)',
                    height: 'clamp(6rem, 10vw, 10rem)'
                  }}
                />
              </div>
            </div>
            
            {/* Right Box - Step 2 */}
            <div 
              className="rounded-3xl text-center flex flex-col justify-between flex-1 relative p-4 sm:p-6 md:p-8 h-96 sm:h-auto"
              style={{ backgroundColor: '#cc785c', minHeight: '350px' }}
            >
              {/* Top - Number and Text */}
              <div className="flex flex-col items-center space-y-4">
                <h3 
                  className="font-bold font-work-sans" 
                  style={{ 
                    color: '#191919',
                    fontSize: 'clamp(3rem, 6vw, 8rem)'
                  }}
                >
                  2
                </h3>
                <p 
                  className="font-work-sans" 
                  style={{ 
                    color: '#191919',
                    fontSize: 'clamp(1rem, 2.5vw, 2.5rem)'
                  }}
                >
                  SIGN UP BELOW
                </p>
              </div>
              
              {/* Middle - Button */}
              <div className="flex justify-center">
                <a 
                  href="https://forms.gle/3q6seqwNxMuKLaUg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl font-medium font-work-sans hover:scale-105 transition-all duration-300 touch-target flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#d4a27f',
                    color: '#191919',
                    fontSize: 'clamp(0.875rem, 1.75vw, 1.5rem)',
                    padding: 'clamp(0.75rem, 1.5vw, 1.25rem) clamp(1.5rem, 3vw, 2.5rem)',
                    minHeight: 'clamp(3rem, 4.5vw, 4rem)'
                  }}
                >
                  SIGN UP
                </a>
              </div>
              
              {/* Bottom - GIF */}
              <div className="flex justify-center">
                <img 
                  src="/assets/animations/claude point.gif" 
                  alt="Claude Point" 
                  className="object-contain rounded-2xl"
                  style={{
                    width: 'clamp(6rem, 10vw, 10rem)',
                    height: 'clamp(6rem, 10vw, 10rem)'
                  }}
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Analytics />
    </div>
  )
}