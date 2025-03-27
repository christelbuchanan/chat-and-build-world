import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ChatAndBuildWorld() {
  return (
    <div className="font-sans bg-gradient-to-b from-green-50 to-blue-50 text-gray-800">

      {/* 1. Enchanted Workshop */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center text-center px-4 transition-all duration-1000 ease-in-out">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow animate-fade-in">Build Anything, Instantly.</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6 animate-fade-in delay-200">From concept to code at warp speed.</p>
        <input
          type="text"
          placeholder="Build a todo app in React with Tailwind..."
          className="px-4 py-3 w-full max-w-md rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-4 animate-fade-in delay-400"
        />
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow animate-bounce mt-2">Enter the Builder's World</button>
      </section>

      {/* 2. Floating Skyship Features */}
      <section className="min-h-screen bg-sky-100 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">Your Tools, Skybound</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard title="AI Chat Copilot" desc="A gentle guide who writes code with you, not for you." />
          <FeatureCard title="Modular Components" desc="Snap together elegant UI blocks like puzzle pieces." />
          <FeatureCard title="Instant Deploy" desc="Launch in moments with a single click." />
          <FeatureCard title="Framework Freedom" desc="React, Vue, Next—whichever wind you follow." />
        </div>
        <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow animate-pulse">Explore the Builder's Sky</button>
      </section>

      {/* 3. Magical Town Square */}
      <section className="min-h-screen bg-yellow-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">The Magical Town Square</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-10 animate-fade-in delay-200">
          Welcome to the Square of Shared Ideas. Trade tools, swap scrolls, and meet your fellow builders.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Stall title="Tailwind Scrolls" description="Styled UI snippets ready to drop in." />
          <Stall title="React Potions" description="Reusable components brewed with care." />
          <Stall title="Debug Bones" description="Fixes, tips, and magical bug squashing bones." />
          <Stall title="Starter Crates" description="Unpack starter templates to begin your build." />
        </div>

        <button className="mt-10 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform">Visit the Launch Pad</button>
      </section>

      {/* 4. Hilltop Launch Pad */}
      <section className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-700 text-white text-center py-20 px-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">Launch What You Believe In</h2>
        <p className="text-lg max-w-xl mb-6 animate-fade-in delay-200">Every journey starts with a spark. Yours is ready.</p>
        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold text-white shadow-xl animate-bounce flex items-center gap-2">
          <Sparkles size={20} />
          Launch Your Build
        </button>

        <div className="mt-10 text-sm text-indigo-200 animate-fade-in delay-500">Optional: Choose your avatar and generate your World Card</div>
      </section>

      {/* 5. Avatar + World Card Builder */}
      <section className="min-h-screen bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Create Your Builder Avatar</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">Choose your magical persona to represent your journey and generate a shareable World Card.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <AvatarOption label="Coder Witch" imageUrl="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=255&q=80" />
          <AvatarOption label="Tinker Sprite" imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=255&q=80" />
          <AvatarOption label="Curious Canine" imageUrl="https://images.unsplash.com/photo-1517101724602-c257fe568157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=255&q=80" />
          <AvatarOption label="Dreaming Druid" imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=255&q=80" />
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow">🎴 Generate My World Card</button>
      </section>

    </div>
  );
}

interface FeatureCardProps {
  title: string;
  desc: string;
}

function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

interface StallProps {
  title: string;
  description: string;
}

function Stall({ title, description }: StallProps) {
  return (
    <div className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition border border-yellow-300 hover:scale-105">
      <h4 className="text-lg font-semibold text-yellow-800 mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

interface AvatarOptionProps {
  label: string;
  imageUrl: string;
}

function AvatarOption({ label, imageUrl }: AvatarOptionProps) {
  return (
    <div className="border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 cursor-pointer transition">
      <div className="h-24 w-full bg-indigo-50 rounded mb-2 overflow-hidden">
        <img src={imageUrl} alt={label} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm font-medium text-indigo-800">{label}</p>
    </div>
  );
}
