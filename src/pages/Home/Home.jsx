import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F7FA] ">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#7367F0]/10 text-[#7367F0] text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7367F0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7367F0]"></span>
                </span>
                New: Tracklify 2.0 is live!
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Track Your Success with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7367F0] to-[#9E95F5]">
                  Precision
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                The ultimate platform for teams to manage projects, track time,
                and boost productivity with AI-powered insights and real-time
                collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/admin"
                  className="px-8 py-4 bg-[#7367F0] text-white font-bold rounded-xl shadow-lg shadow-[#7367F0]/30 hover:bg-[#5e50ee] hover:-translate-y-1 transition-all duration-300"
                >
                  Start Tracking Free
                </Link>
                <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                <img
                  src="/hero-dashboard.png"
                  alt="Tracklify Dashboard"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7367F0]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#9E95F5]/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Users", value: "50k+" },
              { label: "Tasks Tracked", value: "1M+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Support", value: "24/7" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F8F7FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to scale
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help your team work smarter, not
              harder.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Tracking",
                desc: "Monitor project progress as it happens with live updates and instant notifications.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Smart Analytics",
                desc: "Get deep insights into team performance and project bottlenecks with AI-driven reports.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Team Collaboration",
                desc: "Break down silos and work together seamlessly with built-in communication tools.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#7367F0]/10 rounded-xl flex items-center justify-center text-[#7367F0] mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-linear-to-br from-[#7367F0] to-[#9E95F5] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 relative z-10">
              Ready to boost your productivity?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto relative z-10">
              Join thousands of teams who trust Tracklify to manage their daily
              workflows and achieve more.
            </p>
            <div className="relative z-10">
              <Link
                to="/admin"
                className="px-10 py-4 bg-white text-[#7367F0] font-bold rounded-xl shadow-xl hover:bg-gray-50 transition-colors inline-block"
              >
                Get Started for Free
              </Link>
              <p className="mt-4 text-sm text-white/60 font-medium">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
