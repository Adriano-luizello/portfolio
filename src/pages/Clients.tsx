import React from 'react';
import { Building2, Trophy, Users, Zap } from 'lucide-react';

export function Clients() {
  const clients = [
    {
      name: "Tech Innovators",
      logo: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=400&q=80",
      industry: "Technology",
      project: "Mobile App Development",
      year: "2023"
    },
    {
      name: "Creative Studios",
      logo: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=400&q=80",
      industry: "Entertainment",
      project: "Brand Identity",
      year: "2023"
    },
    {
      name: "Global Finance",
      logo: "https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&w=400&q=80",
      industry: "Finance",
      project: "Dashboard Design",
      year: "2022"
    },
    {
      name: "Health Plus",
      logo: "https://images.unsplash.com/photo-1618005198784-45c1a0a6a3ad?auto=format&fit=crop&w=400&q=80",
      industry: "Healthcare",
      project: "UX Research",
      year: "2022"
    }
  ];

  const stats = [
    { icon: Trophy, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "80+", label: "Happy Clients" },
    { icon: Building2, value: "12", label: "Countries" },
    { icon: Zap, value: "24/7", label: "Support" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Our Clients</h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          We've had the privilege of working with amazing companies around the world,
          helping them achieve their digital transformation goals.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-neutral-900 rounded-3xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <stat.icon className="w-8 h-8 text-white/60" />
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clients.map((client, index) => (
          <div key={index} className="bg-neutral-900 rounded-3xl p-8 group hover:bg-neutral-800 transition-colors">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{client.name}</h3>
                <p className="text-white/60">{client.industry}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Project</span>
                <span>{client.project}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Year</span>
                <span>{client.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}