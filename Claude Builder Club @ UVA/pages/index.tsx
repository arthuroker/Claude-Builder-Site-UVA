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
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beautifully-delicious text-hero-text leading-tight">
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
        {/* Twinkling Parallax Claude Logos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Curved path movements - each logo follows a unique curved trajectory */}
          <div className="absolute animate-curve-path-1 opacity-7" style={{ animationDelay: '0.2s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-8 h-8 animate-pulse-gentle" />
          </div>
          <div className="absolute animate-curve-path-2 opacity-9" style={{ animationDelay: '1.5s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-12 h-12 animate-pulse-gentle" style={{ animationDelay: '0.8s' }} />
          </div>
          <div className="absolute animate-curve-path-3 opacity-6" style={{ animationDelay: '3.1s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-6 h-6 animate-pulse-gentle" style={{ animationDelay: '1.2s' }} />
          </div>
          <div className="absolute animate-curve-path-4 opacity-8" style={{ animationDelay: '0.7s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-14 h-14 animate-pulse-gentle" style={{ animationDelay: '2.1s' }} />
          </div>
          <div className="absolute animate-curve-path-5 opacity-5" style={{ animationDelay: '4.3s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-10 h-10 animate-pulse-gentle" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="absolute animate-curve-path-6 opacity-9" style={{ animationDelay: '2.8s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-16 h-16 animate-pulse-gentle" style={{ animationDelay: '1.7s' }} />
          </div>
          <div className="absolute animate-curve-path-7 opacity-7" style={{ animationDelay: '5.2s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-11 h-11 animate-pulse-gentle" style={{ animationDelay: '0.9s' }} />
          </div>
          <div className="absolute animate-curve-path-8 opacity-6" style={{ animationDelay: '1.9s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-9 h-9 animate-pulse-gentle" style={{ animationDelay: '2.5s' }} />
          </div>
          <div className="absolute animate-curve-path-9 opacity-8" style={{ animationDelay: '6.1s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-13 h-13 animate-pulse-gentle" style={{ animationDelay: '0.6s' }} />
          </div>
          <div className="absolute animate-curve-path-10 opacity-5" style={{ animationDelay: '3.7s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-7 h-7 animate-pulse-gentle" style={{ animationDelay: '1.3s' }} />
          </div>
          <div className="absolute animate-curve-path-11 opacity-9" style={{ animationDelay: '0.9s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-15 h-15 animate-pulse-gentle" style={{ animationDelay: '1.8s' }} />
          </div>
          <div className="absolute animate-curve-path-12 opacity-7" style={{ animationDelay: '4.6s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-18 h-18 animate-pulse-gentle" style={{ animationDelay: '0.3s' }} />
          </div>
          <div className="absolute animate-curve-path-13 opacity-6" style={{ animationDelay: '2.2s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-12 h-12 animate-pulse-gentle" style={{ animationDelay: '2.9s' }} />
          </div>
          <div className="absolute animate-curve-path-14 opacity-8" style={{ animationDelay: '5.8s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-17 h-17 animate-pulse-gentle" style={{ animationDelay: '1.1s' }} />
          </div>
          <div className="absolute animate-curve-path-15 opacity-5" style={{ animationDelay: '1.4s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-19 h-19 animate-pulse-gentle" style={{ animationDelay: '0.7s' }} />
          </div>
          <div className="absolute animate-curve-path-16 opacity-9" style={{ animationDelay: '3.9s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-8 h-8 animate-pulse-gentle" style={{ animationDelay: '2.3s' }} />
          </div>
          <div className="absolute animate-curve-path-17 opacity-6" style={{ animationDelay: '6.7s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-14 h-14 animate-pulse-gentle" style={{ animationDelay: '1.6s' }} />
          </div>
          <div className="absolute animate-curve-path-18 opacity-7" style={{ animationDelay: '0.5s' }}>
            <img src="/assets/images/claude-logo.svg" alt="" className="w-11 h-11 animate-pulse-gentle" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
        
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
            <h2 className="font-bold mb-20 leading-tight relative z-10" style={{ fontSize: '35px', color: '#191919' }}>
              JOIN A COMMUNITY OF THINKERS,<br />
              BUILDERS, AND DOERS WHERE<br />
              YOU'LL HAVE ACCESS TO:
            </h2>
            
            {/* Benefits List */}
            <div className="space-y-10 mb-20 relative z-10" style={{ fontSize: '30px', color: '#191919' }}>
              <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>FREE CLAUDE PRO</p>
              <p className="animate-slide-up" style={{ animationDelay: '0.4s' }}>$50 IN API CREDITS</p>
              <p className="animate-slide-up" style={{ animationDelay: '0.6s' }}>ACCESS TO AN EXCLUSIVE HACKATHON WITH THOUSANDS OF $$$ UP FOR GRABS</p>
              <p className="animate-slide-up" style={{ animationDelay: '0.8s' }}>ANTHROPIC STAFF GUEST LECTURES</p>
              <p className="animate-slide-up" style={{ animationDelay: '1.0s' }}>AND MORE...</p>
            </div>
            
            {/* Join Us Button */}
            <button 
              className="px-20 py-8 rounded-xl font-medium hover:scale-105 transition-all duration-300 mx-auto relative z-10 animate-slide-up-delayed-3"
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

      {/* What We Are About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              What We're About
            </h2>
            <p className="text-xl text-sage max-w-3xl mx-auto font-medium">
              We're a community-driven organization that bridges the gap between students and cutting-edge AI technology, fostering innovation and practical learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <div className="bg-coral w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Inclusive Community</h3>
              <p className="text-sage font-medium">
                A welcoming space for students from all academic backgrounds and experience levels to explore AI together.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <div className="bg-sage w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Practical Learning</h3>
              <p className="text-sage font-medium">
                Hands-on learning experiences with Claude AI through workshops, projects, and real-world applications.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
              <div className="coral-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Innovation Focus</h3>
              <p className="text-sage font-medium">
                Pushing boundaries and exploring innovative applications of AI across various fields and disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Why Join Us?
            </h2>
            <p className="text-xl text-sage max-w-3xl mx-auto font-medium">
              Discover the unique advantages of being part of our growing community of AI enthusiasts and builders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-coral w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Accelerate Your Skills</h3>
                  <p className="text-sage font-medium">
                    Quickly develop AI literacy and practical skills that are valuable in any field through our structured learning approach.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-sage w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Network & Collaborate</h3>
                  <p className="text-sage font-medium">
                    Connect with like-minded peers, collaborate on projects, and build lasting professional relationships.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-coral w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Exclusive Resources</h3>
                  <p className="text-sage font-medium">
                    Access exclusive workshops, resources, mentorship opportunities, and industry connections.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-coral/20">
              <h3 className="text-2xl font-bold text-charcoal mb-6">What You'll Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-coral rounded-full"></div>
                  <span className="text-sage font-medium">Practical AI skills applicable to any major</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sage rounded-full"></div>
                  <span className="text-sage font-medium">Portfolio of AI-powered projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-coral rounded-full"></div>
                  <span className="text-sage font-medium">Industry connections and mentorship</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sage rounded-full"></div>
                  <span className="text-sage font-medium">Leadership and collaboration experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-cream mb-12 max-w-2xl mx-auto font-medium">
            Becoming part of the Claude Builder Club @ UVA is easy. Here's how to get started on your AI journey with us.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              className="rounded-2xl p-6 border-2 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(240, 239, 234, 0.1)', 
                borderColor: 'rgba(204, 120, 92, 0.3)' 
              }}
            >
              <div className="bg-coral w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Express Interest</h3>
              <p className="text-cream font-medium">
                Fill out our interest form or reach out through our contact channels to get started.
              </p>
            </div>
            
            <div 
              className="rounded-2xl p-6 border-2 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(240, 239, 234, 0.1)', 
                borderColor: 'rgba(130, 129, 121, 0.3)' 
              }}
            >
              <div className="bg-sage w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Attend Events</h3>
              <p className="text-cream font-medium">
                Join our introductory workshop or info session to learn more about what we do.
              </p>
            </div>
            
            <div 
              className="rounded-2xl p-6 border-2 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(240, 239, 234, 0.1)', 
                borderColor: 'rgba(204, 120, 92, 0.3)' 
              }}
            >
              <div className="bg-coral w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Start Building</h3>
              <p className="text-cream font-medium">
                Begin your journey with our onboarding program and dive into your first project.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-charcoal hover:bg-cream px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              <Mail size={20} />
              Contact Us
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-coral text-coral hover:bg-coral hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <Github size={20} />
              View Projects
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12 px-4 border-t border-coral/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-coral">Claude Builder Club @ UVA</h3>
          <p className="text-cream mb-6 font-medium">
            Empowering the next generation of AI-powered builders and innovators.
          </p>
          <div className="flex justify-center gap-6">
            <button className="text-sage hover:text-coral transition-colors duration-300">
              <Mail size={24} />
            </button>
            <button className="text-sage hover:text-coral transition-colors duration-300">
              <Github size={24} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}