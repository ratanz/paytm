"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Shield, Zap, RefreshCw } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header/Navigation */}
      <header className="border-zinc-800 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold text-blue-500">PayEase</div>
          <nav className="space-x-4">
            <Link to="/signin" className="text-white hover:text-gray-300 px-4 py-2 rounded-md">
              Sign In
            </Link>
            <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Fast, Secure Payments
          <span className="text-blue-500"> Made Simple</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-zinc-400 md:text-xl">
          Send money instantly to anyone, anywhere. Experience the future of digital payments with bank-grade security
          and lightning-fast transactions.
        </p>
        <Link 
          to="/signup"
          className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
        >
          Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
            <div className="flex flex-col items-center p-6 text-center">
              <Zap className="mb-4 h-12 w-12 text-blue-500" />
              <h3 className="mb-2 text-xl font-semibold text-white">Instant Transfers</h3>
              <p className="text-zinc-400">Send and receive money in seconds, not days. No waiting required.</p>
            </div>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
            <div className="flex flex-col items-center p-6 text-center">
              <Shield className="mb-4 h-12 w-12 text-blue-500" />
              <h3 className="mb-2 text-xl font-semibold text-white">Secure & Protected</h3>
              <p className="text-zinc-400">Bank-level encryption and fraud protection to keep your money safe.</p>
            </div>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
            <div className="flex flex-col items-center p-6 text-center">
              <RefreshCw className="mb-4 h-12 w-12 text-blue-500" />
              <h3 className="mb-2 text-xl font-semibold text-white">Easy Recurring Payments</h3>
              <p className="text-zinc-400">Schedule payments and manage subscriptions with a few clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="rounded-3xl bg-zinc-800/50 p-8 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
            Join millions of users who trust PayEase for their payment needs. Create your account in minutes and start
            sending money instantly.
          </p>
          <Link 
            to="/signup"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
          >
            Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-zinc-400">© 2024 PayEase. All rights reserved.</div>
            <nav className="flex gap-4 text-sm text-zinc-400">
              <Link to="#" className="hover:text-blue-500">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-blue-500">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-blue-500">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

