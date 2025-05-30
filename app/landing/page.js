'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context.jsx';
import Image from 'next/image';
import {
  PlayCircle,
  Star,
  Clapperboard,
  Search,
  Brain,
  Users,
  List,
  PieChart,
  Award,
  Target,
  Film,
  Quote,
  CheckCircle,
  ArrowRight,
  Sparkles, 
  Zap,
  Heart,
  TrendingUp,
  Calendar,
  Clock,
  Shield,
  Rocket,
  Eye,
  ChevronRight
} from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { ShineBorder } from '@/components/magicui/shine-border';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { SparklesCore } from '@/components/ui/sparkles';
import { HoverEffect } from '@/components/ui/card-hover-effect.jsx';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { EvervaultCard } from '@/components/ui/evervault-card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (loading) return;
    if (user && router.pathname !== '/dashboard') {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  const heroAvatars = [
    { id: 1, name: "User One", designation: "Film Buff", image: "https://i.pravatar.cc/40?img=11" },
    { id: 2, name: "User Two", designation: "Movie Lover", image: "https://i.pravatar.cc/40?img=12" },
    { id: 3, name: "User Three", designation: "Cinema Goer", image: "https://i.pravatar.cc/40?img=13" },
    { id: 4, name: "User Four", designation: "Series Watcher", image: "https://i.pravatar.cc/40?img=14" },
    { id: 5, name: "User Five", designation: "Popcorn Devourer", image: "https://i.pravatar.cc/40?img=15" },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Advanced machine learning algorithms analyze your viewing patterns and preferences to suggest movies you'll absolutely love.",
      link: "#"
    },
    {
      icon: Search,
      title: "Smart Search & Filters",
      description: "Find exactly what you're looking for with intelligent search and powerful filtering by genre, year, rating, and mood.",
      link: "#"
    },
    {
      icon: List,
      title: "Personalized Watchlists",
      description: "Create and organize multiple watchlists with AI-powered suggestions and smart categorization features.",
      link: "#"
    },
    {
      icon: Users,
      title: "Social Discovery",
      description: "Connect with friends, share recommendations, and discover what's trending in your social circle.",
      link: "#"
    },
    {
      icon: PieChart,
      title: "Viewing Analytics",
      description: "Track your viewing habits with detailed insights, statistics, and personalized viewing reports.",
      link: "#"
    },
    {
      icon: Award,
      title: "Critic & User Reviews",
      description: "Access comprehensive reviews from critics and users, plus aggregate scores from multiple sources.",
      link: "#"
    }
  ];

  const testimonials = [
    {
      quote: "FilmFindr has completely revolutionized how I discover movies. The AI recommendations are incredibly accurate and have introduced me to films I never would have found otherwise.",
      name: "Sarah Chen",
      title: "Film Enthusiast",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "As a professional critic, I'm impressed by FilmFindr's ability to understand nuanced preferences. It's become an essential tool in my workflow for discovering emerging talent.",
      name: "Marcus Rodriguez",
      title: "Movie Critic",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "No more spending 30 minutes scrolling through Netflix! FilmFindr knows exactly what I want to watch based on my mood. It's like having a personal movie curator.",
      name: "Emily Watson",
      title: "Casual Viewer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "I used to rely on friends for movie tips, but FilmFindr is like having a thousand friends with excellent taste! The variety is amazing.",
      name: "David Lee",
      title: "Explorer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
  ];

  const howItWorksSteps = [
    {
      title: "Create Your Profile",
      description: "Tell us your movie mood, favorite genres, and what makes you hit play. The more you share, the smarter your recs!",
      icon: <Target className="text-primary w-12 h-12" />,
      badge: "Step 1",
    },
    {
      title: "AI Learns Your Taste",
      description: "Our AI gets to know your vibe—analyzing your likes, skips, and hidden gems to serve up spot-on suggestions.",
      icon: <Brain className="text-pink-500 w-12 h-12" />,
      badge: "Step 2",
    },
    {
      title: "Discover & Enjoy",
      description: "Get playful recommendations, build watchlists, and start streaming. Movie night, solved!",
      icon: <PlayCircle className="text-violet-500 w-12 h-12" />,
      badge: "Step 3",
    },
  ];


  const typewriterWords = [
    { text: "Find" }, { text: "Your" }, { text: "Perfect" },
    { text: "Movie", className: "text-primary dark:text-primary" },
    { text: "Match.", className: "text-primary dark:text-primary" },
  ];

  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg text-muted-foreground font-medium">Loading FilmFindr...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20"> {/* pt-20 for navbar height */}
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10"></div>
          {/* Aceternity Sparkles */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <SparklesCore
              id="tsparticleshero"
              background="transparent"
              minSize={0.2}
              maxSize={1.2}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_60%)] opacity-30 -z-10"></div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_80%)] -z-10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <MotionEffect fade slide delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm text-sm font-medium shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-foreground">AI-Powered Movie Discovery Platform</span>
                  <div className="ml-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">
                    NEW
                  </div>
                </div>
              </MotionEffect>

              <MotionEffect fade slide delay={0.2}>
                <TypewriterEffectSmooth words={typewriterWords} className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight" />
              </MotionEffect>
              
              <MotionEffect fade slide delay={0.3}>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Stop endless scrolling. Our AI understands your taste, mood, and preferences to recommend the perfect movie or show for any moment.
                </p>
              </MotionEffect>

              <MotionEffect fade slide delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <ShimmerButton
                    className="px-8 py-4 text-lg font-semibold shadow-lg group"
                    onClick={() => router.push('/auth/signup')}
                    shimmerColor="#fff"
                    shimmerSize="0.1em"
                    background="hsl(var(--primary))"
                  >
                    <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </ShimmerButton>
                  
                  <ShineBorder
                    className="px-8 py-4 text-lg font-semibold backdrop-blur-sm border-2 hover:bg-primary/5"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    borderRadius="var(--radius)"
                  >
                    <button
                      className="w-full h-full flex items-center justify-center bg-transparent"
                      onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Clapperboard className="w-5 h-5 mr-2" />
                      Watch Demo
                    </button>
                  </ShineBorder>
                </div>
              </MotionEffect>

              <MotionEffect fade slide delay={0.5}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                  <div className="flex items-center space-x-2">
                    <AnimatedTooltip items={heroAvatars} />
                      <div className="text-left ml-3">
                      <p className="text-sm font-semibold text-foreground">50,000+ Users</p>
                      <p className="text-xs text-muted-foreground">Already discovering great movies</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="ml-2 text-sm font-semibold">4.9/5 Rating</span>
                  </div>
                </div>
              </MotionEffect>
            </div>
          </div>
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse -z-10"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-1000 -z-10"></div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 50000, label: "Active Users", icon: Users, suffix: "+" },
                { number: 1000000, label: "Movies Analyzed", icon: Film, suffix: "+" },
                { number: 98, label: "Match Accuracy", icon: Target, suffix: "%" },
                { number: 4.9, label: "User Rating", icon: Star, suffix: "/5" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <MotionEffect fade slide delay={index * 0.1} key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      <NumberTicker value={stat.number} />{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </MotionEffect>
                );
              })}
            </div>
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionEffect fade slide className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Features You&apos;ll <span className="text-primary">Love</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover movies effortlessly with our powerful AI-driven features designed for every type of movie lover.
              </p>
            </MotionEffect>
            <HoverEffect items={features.map(feature => {
              const IconComponent = feature.icon;
              return {
                title: (
                  <div className="flex items-center space-x-3">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                       <IconComponent className="w-6 h-6" />
                     </div>
                    <span className="text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</span>
                  </div>
                ),
                description: feature.description,
                link: feature.link,
              };
            })} 
            className="max-w-5xl mx-auto"
            itemClassName="rounded-2xl"
            />
          </div>
        </section>

        <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-muted/60 to-background/80 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MotionEffect fade slide className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                How <span className="text-primary">FilmFindr</span> Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Movie magic in three fun, effortless steps
              </p>
            </MotionEffect>
            
            <div className="px-6">
              <div className="mt-12 space-y-12 md:space-y-16">
                {howItWorksSteps.map((step, index) => (
                  <MotionEffect fade slide delay={index * 0.15} key={index}>
                    <div className="relative pt-2 group">
                      <div className="absolute -top-4 left-4 px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full shadow-md">
                        {step.badge}
                      </div>
                      <div className="bg-card/80 dark:bg-card/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-lg group-hover:shadow-primary/20 transition-shadow duration-300">
                        <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-pink-400/20 to-violet-500/20 shadow-lg 
                          ${index === 0 ? 'animate-pulse' : index === 1 ? 'animate-bounce' : 'animate-spin-slow'}`">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-base">{step.description}</p>
                      </div>
                    </div>
                  </MotionEffect>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10" />
        </section>

        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <MotionEffect fade slide className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Loved by <span className="text-primary">Movie Enthusiasts</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of users who have transformed their movie discovery experience
              </p>
            </MotionEffect>

            <div className="relative flex flex-col items-center justify-center overflow-hidden">
              <InfiniteMovingCards
                items={testimonials.map(t => ({ ...t, quote: (
                  <div className="space-y-4">
                     <Quote className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                     <blockquote className="text-muted-foreground leading-relaxed text-lg">
                       {t.quote}
                     </blockquote>
                  </div>
                )}))}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                className="w-full max-w-6xl"
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <MotionEffect fade slide className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Powered by Advanced
                    <span className="block text-primary">AI Technology</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Our machine learning algorithms continuously learn from your viewing patterns, ratings, and preferences to deliver increasingly accurate recommendations.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Lightning Fast", desc: "Get recommendations in milliseconds" },
                    { icon: Heart, title: "Mood Aware", desc: "Suggestions based on your current mood" },
                    { icon: TrendingUp, title: "Always Learning", desc: "Gets better with every interaction" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </MotionEffect>

              <MotionEffect fade slide delay={0.2} className="relative h-[500px]">
                <EvervaultCard className="h-full">
                  <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 p-4 opacity-20">
                    {[...Array(25)].map((_, i) => (
                       <div 
                         key={i} 
                         className="bg-primary/50 rounded-md animate-pulse"
                         style={{ animationDelay: `${i * 0.05}s`, animationDuration: '1.5s' }} 
                       />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <Brain className="w-24 h-24 text-primary/70 mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold text-white/90">Intelligent Core</h3>
                      <p className="text-white/70 mt-2">Constantly evolving for smarter picks.</p>
                  </div>
                </EvervaultCard>
              </MotionEffect>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <WavyBackground

            waveWidth={50}
            blur={10}
            speed="fast"
            colors={["hsl(var(--primary))", "hsl(var(--primary)/0.7)", "hsl(var(--primary)/0.5)", "hsl(var(--primary)/0.3)"]}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <MotionEffect fade slide className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                  Ready to Transform Your
                  <span className="block text-primary">Movie Nights?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join thousands of movie lovers who have discovered their perfect entertainment companion. Start your journey today - completely free!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4"> 
                  <ShimmerButton
                    className="px-10 py-4 text-lg font-bold shadow-2xl group"
                    shimmerColor="#FFFFFF"
                    background="hsl(var(--primary))"
                    onClick={() => router.push('/auth/signup')}
                  >
                    <Rocket className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                    Start Free Today
                    <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </ShimmerButton>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-4 text-lg font-bold border-2 border-foreground/30 text-foreground hover:bg-foreground/10 backdrop-blur-sm"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Eye className="w-6 h-6 mr-2" />
                    Explore Features
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">100% Free Forever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">No Credit Card Required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-medium">Setup in 2 Minutes</span>
                  </div>
                </div>
              </MotionEffect>
            </div>
          </WavyBackground>
        </section>
      </main>
      <Footer />
    </>
  );
}