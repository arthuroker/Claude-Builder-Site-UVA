import { useState, useEffect } from 'react'
import { ChevronDown, Users, Zap, BookOpen, ArrowRight, Github, Mail, ExternalLink } from 'lucide-react'
import { Analytics } from "@vercel/analytics/next"

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
      <section className="relative bg-hero-bg flex flex-col items-center justify-between min-h-screen px-4 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Main Hero Content Container */}
            <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
              
              {/* Claude Logo and Title Container */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                {/* Claude Logo */}
                <div className="flex-shrink-0 animate-fade-in">
                  <img 
                    src="/assets/images/claude-logo.svg" 
                    alt="Claude Logo" 
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 animate-float"
                  />
                </div>
                
                {/* Main Title */}
                <div className="text-center lg:text-left animate-slide-up">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-work-sans text-hero-text leading-tight">
                    CLAUDE<br />
                    BUILDERS @<br />
                    UVA
                  </h1>
                </div>
              </div>
              
              {/* Horizontal Bar */}
              <div className="w-48 md:w-64 lg:w-80 xl:w-96 h-0.5 md:h-1 bg-hero-bar animate-slide-up-delayed"></div>
              
              {/* Claude Animation */}
              <div className="animate-slide-up-delayed-2">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-32 h-40 md:w-40 md:h-48 lg:w-44 lg:h-52 xl:w-48 xl:h-56 object-cover"
                >
                  <source src="/assets/animations/Anthropic_Animation_Portrait_1.5X.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text - Always visible at bottom */}
        <div className="text-center animate-slide-up-delayed-3 pb-4">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-work-sans text-hero-text leading-relaxed px-4">
            EVERYONE IS A BUILDER WITH CLAUDE
          </p>
        </div>
      </section>

      {/* Join a Community Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-8 animate-fade-scale relative overflow-hidden" style={{ backgroundColor: '#e5e4df' }}>
        
        <div className="w-full flex justify-center items-center h-full relative z-10" style={{ maxWidth: '75vw', height: '80vh' }}>
          
          <div 
            className="rounded-3xl px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center w-full h-full flex flex-col justify-center animate-slide-up-delayed relative overflow-hidden"
            style={{ backgroundColor: '#cc785c' }}
          >
            {/* Claude Logo in center background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <img 
                src="/assets/images/claude-logo.svg" 
                alt="Claude Logo Background" 
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-pulse-gentle"
              />
            </div>
            
            {/* Main Heading */}
            <h2 className="font-bold font-work-sans mb-4 md:mb-6 lg:mb-8 leading-tight relative z-10" style={{ 
              color: '#191919',
              fontSize: 'clamp(1.25rem, 3.5vw, 3rem)'
            }}>
              JOIN A COMMUNITY OF THINKERS,<br />
              BUILDERS, AND DOERS WHERE<br />
              YOU'LL HAVE ACCESS TO:
            </h2>
            
            {/* Benefits Carousel */}
            <div className="mb-4 md:mb-6 lg:mb-8 relative z-10 font-work-sans" style={{ 
              color: '#191919',
              fontSize: 'clamp(0.875rem, 2.25vw, 2rem)'
            }}>
              <div className="relative w-full text-center h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-hidden">
                <p 
                  key={currentBenefit}
                  className="animate-fade-in px-4 leading-tight"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    animation: 'fadeInUp 1s ease-out'
                  }}
                >
                  {benefits[currentBenefit]}
                </p>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {benefits.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentBenefit ? 'bg-opacity-80 scale-125' : 'bg-opacity-30 scale-100'
                    }`}
                    style={{ backgroundColor: '#191919' }}
                  />
                ))}
              </div>
            </div>
            
            {/* Join Us Button */}
            <div className="flex justify-center">
              <button 
                onClick={scrollToBottom}
                className="px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-6 rounded-xl font-medium font-work-sans hover:scale-105 transition-all duration-300 relative z-10 animate-slide-up-delayed-3 touch-target cursor-pointer"
                style={{ 
                  backgroundColor: '#d4a27f',
                  color: '#191919',
                  fontSize: 'clamp(0.875rem, 2vw, 1.75rem)'
                }}
              >
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-32 px-4" style={{ backgroundColor: '#fafaf7' }}>
        <div className="mx-auto flex justify-center items-center h-full" style={{ width: '80vw', maxWidth: '1400px' }}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full">
            {/* Left side - Text content */}
            <div className="flex-1 text-center flex flex-col justify-center">
              <h2 
                className="font-bold font-work-sans mb-6 md:mb-8 lg:mb-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl" 
                style={{ color: '#191919' }}
              >
                ABOUT US:
              </h2>
              <p 
                className="leading-relaxed font-work-sans text-base md:text-lg lg:text-xl xl:text-2xl"
                style={{ color: '#191919' }}
              >
                Claude Builders @ UVA is a Student-Run CIO that empowers students to pursue their goals. Whether it's building a web app, studying smarter, or researching, we're here to show how Claude can help
              </p>
            </div>
            
            {/* Right side - Image */}
            <div className="flex-1 flex justify-center items-center">
              <img 
                src="/assets/images/horizontal.png" 
                alt="About Us" 
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxHeight: '400px' }}
              />
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