'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowRight, Check, Plus, Minus, 
  Menu, X, ChevronDown, Mail, Twitter, Linkedin, Instagram 
} from 'lucide-react';

// --- UI COMPONENTS ---

const Section = ({ children, className = "" }) => (
  <section className={`relative max-w-7xl mx-auto px-6 py-24 ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-md mb-6">
    {children}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </div>
);

// --- SECTIONS ---

const Navbar = () => (
  <nav className="fixed top-0 inset-x-0 z-50 h-20 border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className="text-xl font-bold text-white tracking-wide">XTRACT</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        {['Services', 'Process', 'Pricing', 'FAQ'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a>
        ))}
      </div>
      <button className="px-5 py-2.5 rounded-lg bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(109,40,217,0.5)]">
        Book a call
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden min-h-screen">
    {/* Background Elements */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#5B21B6] opacity-30 rounded-[100%] blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Badge>New: Automated Lead Gen</Badge>
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
    >
      Intelligent Automation for <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Modern Businesses.</span>
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      className="text-lg text-zinc-400 max-w-xl mb-10"
    >
      Xtract brings AI automation to your fingertips tracking & streamlining tasks so you can focus on growth.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <button className="h-12 px-8 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white font-medium hover:opacity-90 transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 group">
        Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="h-12 px-8 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
        View services
      </button>
    </motion.div>

    {/* Logo Ticker */}
    <div className="mt-32 w-full max-w-5xl">
      <p className="text-zinc-500 text-sm font-medium mb-8">Trusted by industry leaders</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
         {[1,2,3,4,5].map((i) => (
           <div key={i} className="h-8 w-32 bg-zinc-800 rounded animate-pulse" />
         ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "Workflow Automation", desc: "Automate repetitive tasks like data entry and reporting.", icon: <Zap /> },
    { title: "AI Assistants", desc: "Custom chatbots that handle customer support 24/7.", icon: <Mail /> },
    { title: "Sales & Marketing", desc: "Lead generation and automated outreach sequences.", icon: <ArrowRight /> },
    { title: "Custom Development", desc: "Tailored AI solutions for your specific business needs.", icon: <Check /> },
  ];

  return (
    <Section id="services">
      <div className="text-center mb-16">
        <Badge>Our Services</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">AI Solutions That Scale</h2>
        <p className="text-zinc-400">We implement tools that help you work smarter.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Card key={i} className="group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(s.icon, { className: "text-purple-400" })}
            </div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-zinc-400">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Smart Analysis", desc: "We audit your current workflows to find bottlenecks." },
    { num: "02", title: "Development", desc: "We build custom AI agents tailored to your data." },
    { num: "03", title: "Integration", desc: "Seamlessly connecting AI to your existing stack." },
    { num: "04", title: "Optimization", desc: "Continuous monitoring and improvement." },
  ];

  return (
    <Section id="process">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 sticky top-32">
          <Badge>Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Smart, Scalable.</h2>
          <p className="text-zinc-400 mb-8">From analysis to deployment, we handle the complexity.</p>
          <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
            See detailed roadmap <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="flex gap-6 items-start">
              <span className="text-4xl font-bold text-white/10">{step.num}</span>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Section id="pricing">
      <div className="text-center mb-12">
        <Badge>Pricing</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Transparent Pricing</h2>
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-zinc-800 rounded-full relative p-1 transition-colors hover:bg-zinc-700"
          >
            <motion.div 
              animate={{ x: isAnnual ? 24 : 0 }}
              className="w-4 h-4 bg-purple-500 rounded-full"
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>Annually</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Starter Plan */}
        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-zinc-400">Starter</h3>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-bold text-white">${isAnnual ? 29 : 37}</span>
              <span className="text-zinc-500">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 text-zinc-300">
            {['Basic Automation', 'Email Support', '1 User'].map(f => (
              <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> {f}</li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">Get Started</button>
        </Card>

        {/* Pro Plan */}
        <Card className="border-purple-500/30 bg-purple-500/5">
          <div className="absolute top-0 right-0 bg-purple-600 px-3 py-1 text-xs font-bold rounded-bl-lg">POPULAR</div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-purple-300">Professional</h3>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-4xl font-bold text-white">${isAnnual ? 65 : 75}</span>
              <span className="text-zinc-500">/mo</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 text-zinc-300">
            {['Advanced Workflows', 'Priority Support', 'Unlimited Users', 'Custom Integrations'].map(f => (
              <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> {f}</li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors text-white font-semibold">Get Started</button>
        </Card>
      </div>
    </Section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How fast can you implement automation?", a: "Typically within 2-4 weeks depending on complexity." },
    { q: "Do I need technical knowledge?", a: "No! We build the system and provide a simple dashboard for you." },
    { q: "Is my data secure?", a: "Yes, we use enterprise-grade encryption for all data processing." },
  ];

  return (
    <Section id="faq" className="max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group border border-white/10 bg-white/5 rounded-lg open:bg-white/10 transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
              {f.q}
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-zinc-400" />
            </summary>
            <div className="px-6 pb-6 text-zinc-400">
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 bg-black py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold text-white">XTRACT</span>
        </div>
        <p className="text-zinc-500 max-w-xs">Automate Smarter, Optimize Faster, and Grow Stronger.</p>
      </div>
      
      <div className="flex gap-16">
        <div>
          <h4 className="font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            {['Services', 'Process', 'Pricing', 'Login'].map(l => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Socials</h4>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
      © 2024 Xtract Inc. All rights reserved.
    </div>
  </footer>
);

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}