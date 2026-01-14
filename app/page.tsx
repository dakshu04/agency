'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  Zap, 
  Activity, 
  BarChart3, 
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

// --- Shared "Shadcn-like" UI Primitives ---

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </span>
);

const Button = ({ 
  children, 
  variant = 'default', 
  className, 
  icon: Icon 
}: { 
  children: React.ReactNode; 
  variant?: 'default' | 'outline' | 'ghost'; 
  className?: string;
  icon?: React.ElementType;
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  const variants = {
    default: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    outline: "border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-100 hover:text-white",
    ghost: "hover:bg-slate-800 text-slate-100"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="ml-2 h-4 w-4" />}
    </button>
  );
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center">
          <Cpu className="text-white w-5 h-5" />
        </div>
        <span className="text-lg font-bold tracking-tight text-white">Uxora<span className="text-cyan-400">.ai</span></span>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#" className="hover:text-cyan-400 transition-colors">Services</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Protocol</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Insights</a>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <Button className="hidden sm:flex text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white border-0 shadow-lg shadow-cyan-900/20">
          Contact Us
        </Button>
      </div>
    </div>
  </nav>
);

const FloatingCard = ({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute hidden lg:flex flex-col bg-slate-900/80 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-2xl shadow-black/50 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden bg-slate-950">
      
      {/* Background Gradients/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] -z-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Clutch Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge className="bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800 gap-2 px-4 py-1.5">
            <span className="flex text-amber-400 gap-0.5">★★★★★</span>
            <span className="text-slate-400 border-l border-slate-700 pl-2 ml-1">Top Rated on Clutch</span>
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8"
        >
          Unleash <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient-x">Intelligent</span> <br />
          Digital Evolution
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Uxora merges human creativity with algorithmic precision. We build adaptive web ecosystems and data-driven SEO strategies for the AI era.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button className="h-12 px-8 rounded-full text-base bg-white text-slate-950 hover:bg-slate-200">
            Lets Connect <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="h-12 px-8 rounded-full text-base border-slate-800 hover:border-slate-700 bg-transparent">
            View Case Studies
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
function LogoWall() {
  const logos = [
    { name: "OPENAI", style: "font-sans" },
    { name: "anthropic", style: "font-sans tracking-tight" },
    { name: "NVIDIA", style: "font-serif italic" },
    { name: "<Cohere/>", style: "font-mono" },
    { name: "Midjourney", style: "font-sans" },
    { name: "SpaceX", style: "font-sans font-bold" }, // Added a few more for length
    { name: "Databricks", style: "font-sans tracking-wide" },
  ];

  return (
    <div className="">
      {/* Background Noise & Gradients */}
      
      

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
        <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em] mb-12">
          Trusted by Fortune 500 Innovators
        </p>

        {/* Scrolling Track Container */}
        <div className="flex w-full overflow-hidden mask-gradient">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-nowrap gap-20 items-center"
          >
            {/* Render logos twice to create the infinite loop effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center shrink-0 min-w-[150px] opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group"
              >
                <h3 className={`text-2xl font-bold text-white drop-shadow-lg group-hover:text-indigo-200 transition-colors ${logo.style}`}>
                  {logo.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Neural UI Design",
      description: "Adaptive interfaces that evolve with user behavior.",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      tags: ["React", "Tailwind", "Framer Motion"],
      colSpan: "col-span-1",
      gradient: "from-indigo-500/10 to-transparent",
      border: "border-indigo-500/20"
    },
    {
      title: "Brand Synthesis",
      description: "AI-generated visual identities and design systems.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      tags: ["Strategy", "Identity", "Guidelines"],
      colSpan: "col-span-1",
      gradient: "from-purple-500/10 to-transparent",
      border: "border-purple-500/20"
    },
    {
      title: "Motion Intelligence",
      description: "Micro-interactions powered by user intent data.",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tags: ["Lottie", "3D", "Interaction"],
      colSpan: "col-span-1",
      gradient: "from-amber-500/10 to-transparent",
      border: "border-amber-500/20"
    },
    {
      title: "Predictive SEO & Analytics",
      description: "Dominate search rankings using our proprietary predictive algorithms. We analyze millions of data points to forecast trends before they happen.",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      tags: ["Technical SEO", "Keyword Prediction", "SERP Dominance", "Real-time Data"],
      colSpan: "lg:col-span-2",
      gradient: "from-cyan-900/20 to-slate-900",
      border: "border-cyan-500/30",
      isHighlight: true
    },
    {
      title: "Core Maintenance",
      description: "Automated security patching and performance scaling.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      tags: ["Security", "Uptime", "Scaling"],
      colSpan: "col-span-1",
      gradient: "from-emerald-500/10 to-transparent",
      border: "border-emerald-500/20"
    },
  ];

  return (
    <section className="py-32 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Future</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                ${service.colSpan} 
                relative group overflow-hidden rounded-3xl p-8 
                bg-slate-900/40 border ${service.border} backdrop-blur-sm
                hover:bg-slate-900/60 transition-all duration-500
              `}
            >
              {/* Gradient Blob Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${service.isHighlight ? 'text-white text-2xl' : 'text-slate-100'}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-400 group-hover:text-white group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center">
               <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">Uxora.ai</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Designing the interface between humanity and artificial intelligence.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Uxora AI Agency. All systems operational.
      </div>
    </footer>
  );
}

export default function PremiumAgencyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <LogoWall />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}