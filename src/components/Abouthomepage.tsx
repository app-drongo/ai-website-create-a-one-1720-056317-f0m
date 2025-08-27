// Abouthomepage Component
// Generated: 2025-08-27T18:24:16.020Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Shield,
  Lightbulb
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive sustainable growth and competitive advantage for your business."
    },
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      description: "We combine proven methodologies with innovative thinking to solve complex business challenges and unlock new opportunities."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success with our clients."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Our team brings diverse industry experience and global market insights to every strategic engagement."
    }
  ]

  const stats = [
    { value: "2015", label: "Established", icon: Award },
    { value: "200+", label: "Clients Served", icon: Users },
    { value: "95%", label: "Client Retention", icon: TrendingUp },
    { value: "15+", label: "Industries", icon: Globe }
  ]

  const team = [
    {
      name: "Alexandra Mitchell",
      role: "Managing Partner",
      image: "AM",
      bio: "Former McKinsey Principal with 20+ years in strategic transformation and M&A advisory."
    },
    {
      name: "Robert Chen",
      role: "Senior Partner", 
      image: "RC",
      bio: "Ex-BCG Partner specializing in digital transformation and operational excellence."
    },
    {
      name: "Sarah Williams",
      role: "Partner, Strategy",
      image: "SW",
      bio: "Former Fortune 500 executive with expertise in organizational change and growth strategy."
    },
    {
      name: "Marcus Thompson",
      role: "Partner, Operations",
      image: "MT",
      bio: "Former Deloitte Director with deep experience in process optimization and performance improvement."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Apex Strategic Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Businesses Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Strategic Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a premier strategic consulting firm dedicated to helping mid to large-sized 
            businesses navigate complex challenges and achieve sustainable growth through proven methodologies and innovative solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by a team of former Big Four consultants, Apex Strategic Solutions 
                was born from a vision to deliver world-class strategic consulting with a more personalized, 
                results-focused approach.
              </p>
              <p>
                We recognized that many businesses needed access to top-tier strategic expertise 
                without the complexity and overhead of traditional consulting models. Our founders 
                combined their decades of experience to create a more agile, client-centric approach.
              </p>
              <p>
                Today, we're proud to have guided over 200 organizations through successful 
                transformations, helping them achieve measurable growth and competitive advantage 
                in an increasingly complex business landscape.
              </p>
            </div>
            <Button className="group">
              Explore Our Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Excellence in strategy execution is what separates market leaders from followers."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Alexandra Mitchell, Managing Partner</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The fundamental principles that guide our approach to strategic consulting and client partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground">
              Seasoned professionals with proven track records in strategic consulting and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Apex Strategic Solutions transformed our entire business model. Their strategic insights 
                and execution support helped us achieve 40% revenue growth while improving operational efficiency."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-semibold">James Morrison</div>
                  <div className="text-sm text-muted-foreground">CEO, Global Manufacturing Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}