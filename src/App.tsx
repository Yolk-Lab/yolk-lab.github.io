import { 
  Users, 
  Target, 
  Zap, 
  Eye, 
  Calendar,
  MapPin,
  ArrowRight,
  Egg,
  ExternalLink
} from "lucide-react";
import { usePostHog } from 'posthog-js/react';

// Simple Button component
function Button({ 
  children, 
  className = "", 
  size = "default",
  variant = "default",
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    default: "bg-yolk-darker text-white hover:bg-yolk-dark",
    secondary: "bg-yolk-yellow/20 text-yolk-darker border border-yolk-yellow/30",
  };
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple Card components
function Card({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
}

function CardContent({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Simple Badge component
function Badge({ 
  children, 
  className = "", 
  variant = "default",
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary";
} & React.HTMLAttributes<HTMLDivElement>) {
  const variantClasses = {
    default: "bg-yolk-darker text-white",
    secondary: "bg-yolk-yellow/20 text-yolk-darker border border-yolk-yellow/30",
  };
  
  return (
    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

// Simple ImageWithFallback component
function ImageWithFallback({ 
  src, 
  alt, 
  className = "",
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={src} alt={alt} className={className} {...props} />;
}

// Community event image showing the "Grown, Not Born" culture
const yolkCommunityImage = "./images/yolk-workspace/community-event-1.jpg";

export default function App() {
  const posthog = usePostHog();
  
  const handleApplyClick = (position: string) => {
    posthog?.capture('cta_apply', { position });
    window.open('https://tally.so/r/3xEkDG', '_blank');
  };
  
  const handleStartApplicationClick = () => {
    posthog?.capture('cta_start_application');
    window.open('https://tally.so/r/3xEkDG', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yolk-yellow to-yolk-yellow-dark rounded-xl flex items-center justify-center shadow-lg">
                <Egg className="h-6 w-6 text-yolk-darker" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl tracking-tight">Yolk Lab</span>
                <span className="text-xs text-yolk-teal uppercase tracking-wider">Grown, Not Born</span>
              </div>
            </div>
            <Button 
              className="hidden sm:flex shadow-lg"
              onClick={() => handleApplyClick('menu')}
            >
              Apply for Cohort
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yolk-yellow-light via-white to-yolk-teal-light/20 py-12 md:py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(246,213,92,0.3),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Invitation Only • Starting August 2025
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight">
                    AI Challenge
                    <span className="text-yolk-teal block">Program #1</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-yolk-dark max-w-lg leading-relaxed">
                    The first cohort of Yolk Lab is our AI Challenge accelerator program. We're looking for founders who want to accelerate their growth using AI tools and solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="shadow-xl"
                  onClick={() => handleApplyClick('hero')}
                >
                  Apply for Cohort <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-yolk-dark">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-yolk-darker flex-shrink-0" />
                  <span className="whitespace-nowrap">15 Selected Founders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-yolk-darker flex-shrink-0" />
                  <span className="whitespace-nowrap">12-Week Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-yolk-darker flex-shrink-0" />
                  <span className="whitespace-nowrap">Yolk Coworking, Kraków</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yolk-yellow to-yolk-teal rounded-3xl blur opacity-20"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-yolk-yellow-light to-yolk-teal-light shadow-2xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/cafe-style-coworking.webp"
                  alt="Yolk coworking space with collaborative cafe-style areas"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border-2 border-yolk-yellow/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yolk-yellow rounded-full animate-pulse"></div>
                  <span className="text-sm text-yolk-darker">Live collaboration happening now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section with Community Image */}
      <section className="py-12 md:py-16 bg-yolk-darker text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
                Grown, Not Born
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                We believe great entrepreneurs aren't just born with it—they're cultivated through the right environment, community, and relentless growth. At Yolk Lab, we provide the incubator for your startup dreams.
              </p>
              <div className="pt-4">
                <a 
                  href="https://yolkfolk.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yolk-yellow hover:text-yolk-yellow-light transition-colors"
                >
                  <span className="mr-2">Hosted at Yolk Coworking, Kraków</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <img 
                  src={yolkCommunityImage} 
                  alt="Yolk community events where entrepreneurs are grown, not born"
                  className="w-full h-full object-cover rounded-2xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-tight leading-tight">Why Join Our Accelerator?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Working side by side with other startup founders will significantly improve your chances to build successful business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 border-yolk-yellow/20 shadow-xl hover:shadow-2xl hover:border-yolk-yellow/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-yolk-yellow rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="h-6 w-6 text-yolk-darker" />
                </div>
                <CardTitle>Fast-track Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  In just 12 weeks, move from concept to working product, or if you already make the product, move to scaling up.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yolk-teal/20 shadow-xl hover:shadow-2xl hover:border-yolk-teal/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-yolk-teal rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Vibrant Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Collaborate with developers, designers, AI engineers, marketers, and investors. Find co‑founders, swap feedback, and tap into collective expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yolk-sage/20 shadow-xl hover:shadow-2xl hover:border-yolk-sage/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-yolk-sage rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Premium Workspace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Dedicated collaboration room with whiteboard walls, beanbags, and instruments, plus calm dedicated desks for deep work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yolk-yellow-dark/20 shadow-xl hover:shadow-2xl hover:border-yolk-yellow-dark/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-yolk-yellow-dark rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Ongoing Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Yolk will become the hub for all AI startup founders. Join meetups, open demos, roundtables, and mastermind sessions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workspace Gallery */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-yolk-yellow-light/30 to-yolk-teal-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-tight leading-tight">Your Creative Workspace</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Experience the energy and collaboration at Yolk Coworking in Kraków - where AI startups are grown, not born
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/dedicated-desks.webp"
                  alt="Dedicated desk workspace for focused development"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Dedicated Development Desks</h3>
              <p className="text-gray-600 text-sm md:text-base">Focus on building your AI startup with dedicated workspace and all the tools you need.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/collaborative-workspace.webp"
                  alt="Collaborative networking and community events"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Vibrant Community</h3>
              <p className="text-gray-600 text-sm md:text-base">Connect with fellow entrepreneurs, investors, and mentors in our collaborative spaces.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/meeting-room.webp"
                  alt="Professional meeting rooms for pitches and collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Professional Meeting Spaces</h3>
              <p className="text-gray-600 text-sm md:text-base">Present your ideas in professional meeting rooms equipped with latest technology.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/flexible-cafe-coworking.webp"
                  alt="Flexible cafe-style workspace for casual collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Flexible Collaboration</h3>
              <p className="text-gray-600 text-sm md:text-base">Work in our cafe-style spaces perfect for brainstorming and casual meetings.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/courtyard-events.webp"
                  alt="Outdoor courtyard events and networking"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Outdoor Networking</h3>
              <p className="text-gray-600 text-sm md:text-base">Join outdoor events and networking sessions in our beautiful courtyard space.</p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="./images/yolk-workspace/film-night-community.webp"
                  alt="Community events and social gatherings at Yolk coworking space"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Community Events</h3>
              <p className="text-gray-600 text-sm md:text-base">Join regular social events, workshops, and networking sessions that bring our startup community together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-tight leading-tight">Ready to Build the Future of AI?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Three simple steps to join our exclusive community
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4 sm:space-x-6 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yolk-yellow rounded-2xl flex items-center justify-center text-yolk-darker text-lg sm:text-xl shadow-xl flex-shrink-0">
                1
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl">Apply</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Submit a one‑page project brief outlining your AI startup vision and goals
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-6 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yolk-teal rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl shadow-xl flex-shrink-0">
                2
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl">Interview</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Quick 15‑minute fit call to ensure mutual alignment and program fit
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-6 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yolk-sage rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl shadow-xl flex-shrink-0">
                3
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl">Launch</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Program begins first week of August 2025 (with possibility to join later)
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="shadow-2xl text-xl px-10 py-6"
              onClick={() => handleStartApplicationClick()}
            >
              Start Your Application <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yolk-darker text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yolk-yellow to-yolk-yellow-dark rounded-xl flex items-center justify-center shadow-lg">
                <Egg className="h-6 w-6 text-yolk-darker" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl tracking-tight">Yolk Lab</span>
                <span className="text-xs text-yolk-yellow uppercase tracking-wider">Grown, Not Born</span>
              </div>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div>© 2025 Yolk Lab. All rights reserved.</div>
              <div className="mt-1">
                <a 
                  href="https://yolkfolk.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yolk-yellow hover:text-yolk-yellow-light underline"
                >
                  yolkfolk.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}