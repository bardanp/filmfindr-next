"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { 
  ArrowRight, 
  Star, 
  PlayCircle, 
  Library, 
  Search, 
  TrendingUp, 
  Users,
  BarChart3,
  Brain
} from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ShinyButton } from "@/components/magicui/shiny-button"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DotPattern } from "@/components/magicui/dot-pattern"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {/* NAVBAR */}
      <Navbar />

      <div className="flex flex-col min-h-screen bg-background overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <DotPattern 
              className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" 
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Announcement Badge */}
              <BlurFade delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-2 mb-8">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Now powered by advanced AI recommendations
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </BlurFade>

              {/* Main Headline */}
              <BlurFade delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Discover movies you'll
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    actually love
                  </span>
                </h1>
              </BlurFade>

              {/* Subtitle */}
              <BlurFade delay={0.3}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Stop endless scrolling. Get personalized movie recommendations powered by AI, 
                  discover hidden gems, and connect with fellow film enthusiasts.
                </p>
              </BlurFade>

              {/* CTA Buttons */}
              <BlurFade delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link href="/auth/signup">
                    <ShinyButton className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#06b6d4_50%,#22d3ee_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-1 text-base font-semibold text-white backdrop-blur-3xl">
                        Start discovering for free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </ShinyButton>
                  </Link>
                  
                  <Button variant="outline" size="lg" className="h-12 border-border hover:border-cyan-500/40 hover:bg-cyan-500/5">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch demo
                  </Button>
                </div>
              </BlurFade>

              {/* Social Proof */}
              <BlurFade delay={0.5}>
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                  <p className="text-sm">Trusted by movie enthusiasts worldwide</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-background"></div>
                        ))}
                      </div>
                      <span className="text-sm font-medium">50k+ users</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm font-medium ml-1">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <BlurFade delay={0.1}>
                <Badge variant="outline" className="mb-4">
                  Features
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Everything you need to discover
                  <br />
                  <span className="text-cyan-500">your next favorite movie</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Powerful features designed to help you find, track, and share the movies you love
                </p>
              </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: "AI-Powered Recommendations",
                  description: "Advanced machine learning algorithms analyze your taste and mood to suggest perfect matches."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Social Discovery",
                  description: "See what friends are watching, share reviews, and discover movies through your network."
                },
                {
                  icon: <Library className="h-8 w-8" />,
                  title: "Smart Watchlists",
                  description: "Organize your movies with intelligent categorization and never lose track of what to watch next."
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Trending Insights",
                  description: "Stay ahead with real-time trends and predictions about what's becoming popular."
                },
                {
                  icon: <Search className="h-8 w-8" />,
                  title: "Advanced Search",
                  description: "Find exactly what you're looking for with powerful filters by genre, mood, and more."
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Viewing Analytics",
                  description: "Track your movie journey with detailed statistics and personalized insights."
                }
              ].map((feature, index) => (
                <BlurFade key={index} delay={0.1 * index}>
                  <Card className="h-full border-border hover:border-cyan-500/40 transition-all duration-300 bg-card/50 backdrop-blur-sm group">
                    <CardHeader>
                      <div className="mb-4 size-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <BlurFade delay={0.1}>
                <Badge variant="outline" className="mb-4">
                  How it works
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Get started in
                  <span className="text-cyan-500"> 3 simple steps</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From signup to your first personalized recommendation in minutes
                </p>
              </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Tell us your taste",
                  description: "Rate a few movies you've seen or select your favorite genres to help our AI understand your preferences."
                },
                {
                  step: "02", 
                  title: "Get recommendations",
                  description: "Receive personalized movie suggestions based on your taste, mood, and what's available to stream."
                },
                {
                  step: "03",
                  title: "Discover & share",
                  description: "Watch, rate, and share your discoveries with friends. Build your profile and connect with fellow movie lovers."
                }
              ].map((step, index) => (
                <BlurFade key={index} delay={0.1 * index}>
                  <div className="text-center group">
                    <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                      <span className="text-2xl font-bold text-cyan-500">{step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <BlurFade delay={0.1}>
                <Badge variant="outline" className="mb-4">
                  Testimonials
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Loved by movie enthusiasts
                  <br />
                  <span className="text-cyan-500">around the world</span>
                </h2>
              </BlurFade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "FilmFindr completely changed how I discover movies. The AI recommendations are scary good - it's like having a personal movie curator.",
                  author: "Sarah Chen",
                  role: "Film Critic",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                },
                {
                  quote: "I've discovered so many hidden gems through FilmFindr. The social features make movie nights with friends so much better.",
                  author: "Marcus Rodriguez", 
                  role: "Movie Enthusiast",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                },
                {
                  quote: "The mood-based recommendations are perfect. Whether I want comedy or drama, FilmFindr always knows exactly what I need.",
                  author: "Emily Thompson",
                  role: "Content Creator",
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                }
              ].map((testimonial, index) => (
                <BlurFade key={index} delay={0.1 * index}>
                  <Card className="h-full border-border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <BlurFade delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "50k+", label: "Active Users" },
                  { value: "2M+", label: "Movies Rated" },
                  { value: "98%", label: "Match Accuracy" },
                  { value: "4.9/5", label: "User Rating" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-4xl md:text-5xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <BlurFade delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to discover your
                  <br />
                  <span className="text-cyan-500">next favorite movie?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of movie lovers who've already found their perfect matches
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth/signup">
                    <Button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 px-8 py-6 text-lg font-semibold">
                      Get started for free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-border hover:border-cyan-500/40">
                    Learn more
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required. Start discovering in seconds.
                </p>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
