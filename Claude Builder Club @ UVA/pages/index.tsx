import { useState, useEffect } from 'react'
import { ChevronDown, Users, Zap, BookOpen, ArrowRight, Github, Mail, ExternalLink } from 'lucide-react'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentBenefit, setCurrentBenefit] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [nextSectionOpacity, setNextSectionOpacity] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollHint, setShowScrollHint] = useState(true)
  const [heroOpacity, setHeroOpacity] = useState(1)
  const [displayedText, setDisplayedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [aboutUsVisible, setAboutUsVisible] = useState(false)
  const [howToJoinVisible, setHowToJoinVisible] = useState(false)
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(false)

  const benefits = [
    "FREE CLAUDE PRO",
    "$50 IN API CREDITS", 
    "AN EXCLUSIVE HACKATHON WITH THOUSANDS OF $$$ IN PRIZES",
    "ANTHROPIC STAFF GUEST LECTURES",
    "FREE ANTHROPIC MERCH",
    "AND MORE..."
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typewriter effect for benefits
  useEffect(() => {
    const currentText = benefits[currentTextIndex]
    
    if (displayedText.length < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1))
      }, 80) // Soft typing speed
      return () => clearTimeout(timer)
    } else {
      // Wait before starting next text
      const timer = setTimeout(() => {
        setDisplayedText('')
        setCurrentTextIndex((prev) => (prev + 1) % benefits.length)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [displayedText, currentTextIndex, benefits])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight - windowHeight
      
      setScrollY(scrolled)
      
      // Calculate overall scroll progress
      const progress = Math.min(scrolled / docHeight, 1)
      setScrollProgress(progress)
      
      // Hide scroll hint after user starts scrolling
      if (scrolled > 50 && showScrollHint) {
        setShowScrollHint(false)
      }
      
      // Calculate hero fade-out - fade out a bit slower
      const heroFadeStart = windowHeight * 0.3
      const heroFadeEnd = windowHeight * 0.75
      
      if (scrolled >= heroFadeStart && scrolled <= heroFadeEnd) {
        const heroProgress = (scrolled - heroFadeStart) / (heroFadeEnd - heroFadeStart)
        setHeroOpacity(1 - heroProgress)
      } else if (scrolled < heroFadeStart) {
        setHeroOpacity(1)
      } else {
        setHeroOpacity(0)
      }
      
      // Calculate opacity for next section fade-in - start sooner
      const fadeStart = windowHeight * 0.15
      const fadeEnd = windowHeight * 0.8
      
      if (scrolled >= fadeStart && scrolled <= fadeEnd) {
        const sectionProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart)
        setNextSectionOpacity(Math.min(sectionProgress, 1))
      } else if (scrolled < fadeStart) {
        setNextSectionOpacity(0)
      } else {
        setNextSectionOpacity(1)
      }
      
      // Check if About Us section is more centered on screen (much later trigger)
      if (scrolled > windowHeight * 1.5 && !aboutUsVisible) {
        setAboutUsVisible(true)
      }
      
      // Check if How To Join section is in view
      if (scrolled > windowHeight * 2.8 && !howToJoinVisible) {
        setHowToJoinVisible(true)
        
        // Sequential animations with delays
        setTimeout(() => setShowStep1(true), 800)
        setTimeout(() => setShowStep2(true), 1600)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showScrollHint, aboutUsVisible, howToJoinVisible])

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ 
          transform: `scaleX(${scrollProgress})`,
          opacity: scrollY > 100 ? 1 : 0
        }}
      />
      
      {/* Scroll Hint - appears after page load */}
      {showScrollHint && (
        <div className="scroll-hint" style={{ bottom: '1rem' }}>
          <ChevronDown className="w-6 h-6 animate-gentle-bounce opacity-60 text-hero-text" />
        </div>
      )}
      
      {/* Side Scroll Dots */}
      <div 
        className="scroll-dots"
        style={{ 
          opacity: scrollY > (typeof window !== 'undefined' ? window.innerHeight * 0.3 : 240) ? 1 : 0,
          zIndex: 30
        }}
      >
        <div className="flex flex-col space-y-3">
          <div 
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#cc785c',
              opacity: scrollY < (typeof window !== 'undefined' ? window.innerHeight * 0.3 : 240) ? 1 : 0.3,
              transform: scrollY < (typeof window !== 'undefined' ? window.innerHeight * 0.3 : 240) ? 'scale(1.25)' : 'scale(1)'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#cc785c',
              opacity: (scrollY >= (typeof window !== 'undefined' ? window.innerHeight * 0.3 : 240) && 
                      scrollY < (typeof window !== 'undefined' ? window.innerHeight * 2 : 1600)) ? 1 : 0.3,
              transform: (scrollY >= (typeof window !== 'undefined' ? window.innerHeight * 0.3 : 240) && 
                         scrollY < (typeof window !== 'undefined' ? window.innerHeight * 2 : 1600)) ? 'scale(1.25)' : 'scale(1)'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#cc785c',
              opacity: scrollY >= (typeof window !== 'undefined' ? window.innerHeight * 2 : 1600) ? 1 : 0.3,
              transform: scrollY >= (typeof window !== 'undefined' ? window.innerHeight * 2 : 1600) ? 'scale(1.25)' : 'scale(1)'
            }}
          />
        </div>
      </div>

      {/* Hero Section - Fixed during scroll */}
      <section 
        className="parallax-hero scroll-optimized bg-hero-bg flex flex-col items-center justify-between px-4 py-8"
        style={{
          transform: `translateY(${scrollY > (typeof window !== 'undefined' ? window.innerHeight : 0) ? -scrollY + (typeof window !== 'undefined' ? window.innerHeight : 0) : 0}px)`,
          opacity: heroOpacity
        }}
      >
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
        <div className="text-center animate-slide-up-delayed-3 pb-8">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-work-sans text-hero-text leading-relaxed px-4">
            EVERYONE IS A BUILDER WITH CLAUDE
          </p>
        </div>
      </section>

      {/* Spacer to allow scroll */}
      <div className="h-screen"></div>

      {/* Join a Community Section - Fades in over hero */}
      <section 
        className="fade-in-section min-h-screen flex items-center justify-center px-4 py-8"
        style={{ 
          backgroundColor: '#e5e4df',
          opacity: nextSectionOpacity,
          transform: `translateY(${Math.max(0, (1 - nextSectionOpacity) * 50)}px)`
        }}
      >
        
        <div className="w-full flex justify-center items-center h-full relative z-10" style={{ maxWidth: '75vw', height: '80vh' }}>
          
          <div 
            className="rounded-3xl px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center w-full h-full flex flex-col justify-center animate-slide-up-delayed relative overflow-hidden"
            style={{ backgroundColor: '#E5E4DF' }}
          >
            <div className="flex flex-col h-full justify-between py-8">
              {/* Main Heading - moved closer to top with wider container */}
              <div className="responsive-container px-fluid">
                <h2 className="font-bold font-work-sans mb-8 md:mb-12 lg:mb-16 leading-tight relative z-10" style={{ 
                  color: '#191919',
                  fontSize: 'clamp(1rem, 2.5vw, 2.25rem)'
                }}>
                  JOIN A COMMUNITY OF<br />
                  THINKERS, BUILDERS, AND DOERS<br />
                  WHERE YOU'LL HAVE ACCESS TO:
                </h2>
              </div>
              
              {/* Typewriter Benefits - smack dab in the middle */}
              <div className="absolute inset-0 flex items-center justify-center z-10 font-work-sans" style={{ 
                color: '#191919',
                fontSize: 'clamp(2rem, 5vw, 4rem)'
              }}>
                <div className="w-full max-w-5xl mx-auto text-center">
                  <p className="px-4 leading-tight">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
              
              {/* Join Us Button - moved lower */}
              <div className="flex justify-center mb-4">
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
        </div>
      </section>

      {/* Background Color Fade Transition */}
      <div 
        className="h-24"
        style={{
          background: 'linear-gradient(to bottom, #e5e4df 0%, #fafaf7 10%)'
        }}
      />

      {/* About Us Section */}
      <section className="min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-32 px-4" style={{ backgroundColor: '#fafaf7' }}>
        <div className="mx-auto flex justify-center items-center h-full" style={{ width: '80vw', maxWidth: '1400px' }}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full">
            {/* Left side - Text content */}
            <div 
              className={`flex-1 text-center flex flex-col justify-center transition-opacity duration-[2000ms] ${
                aboutUsVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
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
                Claude Builders @ UVA is a Student-Run CIO that empowers students to pursue their goals. Whether it's building a web app, studying smarter, or researching faster, we're here to show how Claude can help
              </p>
            </div>
            
            {/* Right side - Image */}
            <div 
              className={`flex-1 flex justify-center items-center transition-all duration-[2000ms] delay-500 ${
                aboutUsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <img 
                src="/assets/images/horizontal.png" 
                alt="About Us" 
                className="w-full h-auto object-cover rounded-lg"
                style={{ 
                  maxHeight: '400px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background Color Fade Transition to How To Join */}
      <div 
        className="h-24"
        style={{
          background: 'linear-gradient(to bottom, #fafaf7 0%, #e5e4df 10%)'
        }}
      />

      {/* How To Join Section */}
      <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#e5e4df', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="w-full flex flex-col items-center justify-center" style={{ width: '85vw', maxWidth: '1400px' }}>
          
          {/* Main Heading */}
          <div className="text-center mb-4 sm:mb-8">
            <h2 
              className="font-bold font-work-sans mb-2" 
              style={{ 
                color: '#191919',
                fontSize: 'clamp(2rem, 4vw, 4rem)'
              }}
            >
              HOW TO JOIN
            </h2>
            
            {/* Sliding Bar */}
            <div className="flex justify-center">
              <div 
                className={`h-1 bg-current transition-all duration-1000 ${
                  howToJoinVisible ? 'w-48' : 'w-0'
                }`}
                style={{ backgroundColor: '#191919' }}
              />
            </div>
          </div>
          
          {/* Two Boxes Container */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-stretch w-full" style={{ height: 'auto', minHeight: 'auto' }}>
            
            {/* Left Box - Step 1 */}
            <div 
              className={`rounded-3xl text-center flex flex-col justify-between flex-1 relative p-4 sm:p-6 md:p-8 h-96 sm:h-auto transition-all duration-1000 ${
                showStep1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
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
              className={`rounded-3xl text-center flex flex-col justify-between flex-1 relative p-4 sm:p-6 md:p-8 h-96 sm:h-auto transition-all duration-1000 ${
                showStep2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
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