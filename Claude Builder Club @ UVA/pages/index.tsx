import { useState, useEffect } from 'react'
import { ChevronDown, Users, Zap, BookOpen, ArrowRight, Github, Mail, ExternalLink } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-hero-bg flex flex-col items-center justify-center px-4 py-16">
        <div className={`w-full max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-12 mb-8">
            {/* Claude Logo */}
            <div className="flex-shrink-0 animate-fade-in">
              <img 
                src="/assets/images/claude-logo.svg" 
                alt="Claude Logo" 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 animate-float"
              />
            </div>
            
            {/* Main Title */}
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-work-sans text-hero-text leading-tight">
                CLAUDE<br />
                BUILDERS @<br />
                UVA
              </h1>
            </div>
          </div>
          
          {/* Horizontal Bar */}
          <div className="w-96 md:w-[450px] lg:w-[500px] h-1 bg-hero-bar mx-auto mb-10 animate-slide-up-delayed"></div>
          
          {/* Claude Animation */}
          <div className="mb-10 animate-slide-up-delayed-2 text-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-44 h-52 md:w-52 md:h-64 lg:w-60 lg:h-72 xl:w-64 xl:h-80 mx-auto object-cover"
            >
              <source src="/assets/animations/Anthropic_Animation_Portrait_1.5X.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Bottom Text */}
          <div className="text-center animate-slide-up-delayed-3 mt-12">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-work-sans text-hero-text max-w-5xl mx-auto leading-relaxed px-4">
              EVERYONE IS A BUILDER WITH CLAUDE
            </p>
          </div>
        </div>
      </section>

      {/* Join a Community Section */}
      <section className="py-40 px-4 animate-fade-scale relative overflow-hidden" style={{ backgroundColor: '#e5e4df', minHeight: '850px' }}>
        
        <div className="max-w-8xl mx-auto flex justify-center items-center h-full relative z-10">
          
          <div 
            className="rounded-3xl p-20 text-center w-full flex flex-col justify-center animate-slide-up-delayed relative overflow-hidden"
            style={{ backgroundColor: '#cc785c', minHeight: '720px', maxWidth: '1200px' }}
          >
            {/* Claude Logo in center background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <img 
                src="/assets/images/claude-logo.svg" 
                alt="Claude Logo Background" 
                className="w-96 h-96 animate-pulse-gentle"
              />
            </div>
            
            {/* Main Heading */}
            <h2 className="font-bold font-work-sans mb-20 leading-tight relative z-10" style={{ fontSize: '35px', color: '#191919' }}>
              JOIN A COMMUNITY OF THINKERS,<br />
              BUILDERS, AND DOERS WHERE<br />
              YOU'LL HAVE ACCESS TO:
            </h2>
            
            {/* Benefits List */}
            <div className="space-y-10 mb-20 relative z-10 font-work-sans" style={{ fontSize: '30px', color: '#191919' }}>
              <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>FREE CLAUDE PRO</p>
              <p className="animate-slide-up" style={{ animationDelay: '0.4s' }}>$50 IN API CREDITS</p>
              <p className="animate-slide-up" style={{ animationDelay: '0.6s' }}>ACCESS TO AN EXCLUSIVE HACKATHON WITH THOUSANDS OF $$$ UP FOR GRABS</p>
              <p className="animate-slide-up" style={{ animationDelay: '0.8s' }}>ANTHROPIC STAFF GUEST LECTURES</p>
              <p className="animate-slide-up" style={{ animationDelay: '1.0s' }}>AND MORE...</p>
            </div>
            
            {/* Join Us Button */}
            <button 
              className="px-20 py-8 rounded-xl font-medium font-work-sans hover:scale-105 transition-all duration-300 mx-auto relative z-10 animate-slide-up-delayed-3"
              style={{ 
                backgroundColor: '#d4a27f',
                fontSize: '28px',
                color: '#191919'
              }}
            >
              JOIN US
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-40 px-4" style={{ backgroundColor: '#fafaf7', minHeight: '850px' }}>
        <div className="max-w-8xl mx-auto flex justify-center items-center h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20" style={{ width: '85%' }}>
            {/* Left side - Text content */}
            <div className="flex-1 text-center flex flex-col justify-center" style={{ maxWidth: '800px', minHeight: '500px' }}>
              <h2 
                className="font-bold font-work-sans mb-10" 
                style={{ fontSize: '42px', color: '#191919' }}
              >
                ABOUT US:
              </h2>
              <div style={{ transform: 'translateY(-30px)' }}>
                <p 
                  className="leading-relaxed font-work-sans"
                  style={{ fontSize: '28px', color: '#191919' }}
                >
                  Claude Builders @ UVA is a Student-Run CIO that empowers students to pursue their goals. Whether it's building a web app, studying smarter, or researching, we're here to show how Claude can help
                </p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex-1 flex justify-center items-center" style={{ maxWidth: '800px', minHeight: '500px' }}>
              <img 
                src="/assets/images/horizontal.png" 
                alt="About Us" 
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxWidth: '800px', maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How To Join Section */}
      <section className="py-32 px-4" style={{ backgroundColor: '#e5e4df', minHeight: '900px' }}>
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-center h-full">
          
          {/* Main Heading */}
          <h2 
            className="font-bold font-work-sans text-center mb-16" 
            style={{ fontSize: '60px', color: '#191919' }}
          >
            HOW TO JOIN
          </h2>
          
          {/* Two Boxes Container */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full" style={{ width: '85%' }}>
            
            {/* Left Box - Step 1 */}
            <div 
              className="rounded-3xl text-center flex flex-col items-center flex-1 relative"
              style={{ backgroundColor: '#cc785c', height: '600px' }}
            >
              <div className="flex flex-col items-center pt-8">
                <h3 
                  className="font-bold font-work-sans mb-6" 
                  style={{ fontSize: '56px', color: '#191919' }}
                >
                  1
                </h3>
                <p 
                  className="font-work-sans" 
                  style={{ fontSize: '35px', color: '#191919' }}
                >
                  JOIN OUR LISTSERV
                </p>
              </div>
              <img 
                src="/assets/animations/claude point.gif" 
                alt="Claude Point" 
                className="w-48 h-48 object-contain absolute bottom-0"
              />
            </div>
            
            {/* Right Box - Step 2 */}
            <div 
              className="rounded-3xl text-center flex flex-col items-center flex-1 relative"
              style={{ backgroundColor: '#cc785c', height: '600px' }}
            >
              <div className="flex flex-col items-center pt-8">
                <h3 
                  className="font-bold font-work-sans mb-6" 
                  style={{ fontSize: '56px', color: '#191919' }}
                >
                  2
                </h3>
                <p 
                  className="font-work-sans" 
                  style={{ fontSize: '35px', color: '#191919' }}
                >
                  SIGN UP WITH THE<br />FORM BELOW
                </p>
              </div>
              <img 
                src="/assets/animations/claude point.gif" 
                alt="Claude Point" 
                className="w-48 h-48 object-contain absolute bottom-0"
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}