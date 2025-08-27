// Services Component
// Generated: 2025-08-27T18:24:16.020Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Target,
  BarChart3,
  Lightbulb,
  Cog
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "strategic-transformation",
      title: "Strategic Business Transformation",
      description: "Comprehensive transformation strategies that drive sustainable growth",
      longDescription: "Our strategic transformation service helps organizations reimagine their business model, optimize operations, and accelerate growth. We partner with leadership teams to develop and execute transformation roadmaps that deliver measurable results.",
      icon: TrendingUp,
      benefits: [
        "Digital transformation strategy",
        "Operational excellence programs",
        "Change management support",
        "Performance measurement frameworks"
      ],
      pricing: "Starting at $15,000/engagement",
      timeline: "6-12 months typical engagement",
      featured: true,
      badge: "Most Requested"
    },
    {
      id: "organizational-development",
      title: "Organizational Development",
      description: "Build high-performing teams and optimize organizational structure",
      longDescription: "We help organizations develop their most valuable asset - their people. Our organizational development services focus on leadership development, team effectiveness, and creating cultures that drive performance and innovation.",
      icon: Users,
      benefits: [
        "Leadership development programs",
        "Team effectiveness assessments",
        "Organizational design optimization",
        "Culture transformation initiatives"
      ],
      pricing: "Custom engagement pricing",
      timeline: "3-9 months per program"
    },
    {
      id: "market-expansion",
      title: "Market Expansion Strategy",
      description: "Strategic guidance for entering new markets and scaling operations",
      longDescription: "Our market expansion expertise helps businesses identify growth opportunities, develop go-to-market strategies, and successfully enter new markets. We provide comprehensive analysis and actionable strategies for sustainable expansion.",
      icon: Globe,
      benefits: [
        "Market opportunity analysis",
        "Competitive landscape assessment",
        "Go-to-market strategy development",
        "Risk mitigation planning"
      ],
      pricing: "Starting at $8,000/project",
      timeline: "2-6 months"
    },
    {
      id: "risk-management",
      title: "Enterprise Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies",
      longDescription: "Protect your business with our enterprise risk management services. We identify potential risks, develop mitigation strategies, and implement governance frameworks that ensure business continuity and regulatory compliance.",
      icon: Shield,
      benefits: [
        "Risk assessment and analysis",
        "Compliance framework development",
        "Business continuity planning",
        "Governance structure optimization"
      ],
      pricing: "Tailored consulting rates",
      timeline: "4-8 weeks per assessment",
      badge: "Critical"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Strategic Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Consulting Services That
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert consulting services designed to address your most complex business challenges and unlock sustainable growth opportunities
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need a Tailored Strategic Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business faces unique challenges. Let's discuss how our strategic consulting expertise can address your specific needs and drive measurable results.
          </p>
          <Button size="lg">
            Book Strategic Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}