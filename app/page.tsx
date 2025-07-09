"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Sparkles,
  Zap,
  Brain,
  Rocket,
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
} from "lucide-react"

export default function LandingPage() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const demoSections = [
    {
      title: "Smart Task Management",
      description: "AI automatically prioritizes and organizes your tasks",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Intelligent Scheduling",
      description: "Optimize your calendar with AI-powered time blocking",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Performance Analytics",
      description: "Get insights into your productivity patterns",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-400",
    },
  ]

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Task Processing",
      description: "Advanced AI algorithms understand context and priority",
      gradient: "from-indigo-600 via-purple-600 to-blue-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Automation",
      description: "Automate repetitive tasks with intelligent workflows",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Intelligence",
      description: "AI-enhanced team coordination and communication",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast productivity trends and optimize performance",
      gradient: "from-pink-500 via-rose-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: textY }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              AI-Powered
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                Productivity
              </motion.span>
              <br />
              Suite
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Transform your workflow with intelligent automation, predictive analytics, and AI-driven insights that
              adapt to your unique productivity patterns.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-4 border-2 border-blue-400/50 text-blue-100 hover:bg-blue-500/10 rounded-full backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div
            className="absolute top-1/4 left-10 hidden lg:block"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">AI Active</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-10 hidden lg:block"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-4 border border-purple-300/30">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-300" />
                <span className="text-purple-100 text-sm">+47% Efficiency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience the Future
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Interactive demonstrations of our AI-powered features
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {demoSections.map((demo, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeDemo === index
                        ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
                        : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8"
                    }`}
                    onClick={() => setActiveDemo(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${demo.color}`}>{demo.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                        <p className="text-blue-200">{demo.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-80 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${demoSections[activeDemo].color} flex items-center justify-center`}
                      >
                        {demoSections[activeDemo].icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{demoSections[activeDemo].title}</h3>
                      <p className="text-blue-200 text-lg">{demoSections[activeDemo].description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Productivity Comparison */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Transformation Results
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              See the dramatic improvement in productivity metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-xl border border-red-500/30 p-8 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-red-200 mb-4">Before AI</h3>
                  <p className="text-red-300">Traditional workflow challenges</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl">
                    <span className="text-red-200">Task Completion Rate</span>
                    <span className="text-2xl font-bold text-red-400">67%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl">
                    <span className="text-red-200">Daily Focus Time</span>
                    <span className="text-2xl font-bold text-red-400">3.2h</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl">
                    <span className="text-red-200">Meeting Efficiency</span>
                    <span className="text-2xl font-bold text-red-400">45%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl">
                    <span className="text-red-200">Stress Level</span>
                    <span className="text-2xl font-bold text-red-400">High</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl border border-green-500/30 p-8 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-green-200 mb-4">After AI</h3>
                  <p className="text-green-300">AI-optimized productivity</p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-green-200">Task Completion Rate</span>
                    <span className="text-2xl font-bold text-green-400">94%</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-green-200">Daily Focus Time</span>
                    <span className="text-2xl font-bold text-green-400">6.8h</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-green-200">Meeting Efficiency</span>
                    <span className="text-2xl font-bold text-green-400">89%</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-green-200">Stress Level</span>
                    <span className="text-2xl font-bold text-green-400">Low</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Intelligent Features
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Cutting-edge AI capabilities designed for modern professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Ready to Transform?
            </motion.h2>

            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
              Join thousands of professionals who have revolutionized their productivity with AI
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 border-2 border-blue-400/50 text-blue-100 hover:bg-blue-500/10 rounded-full backdrop-blur-sm transition-all duration-300 text-lg bg-transparent"
              >
                <MessageSquare className="w-6 h-6 mr-3" />
                Talk to Sales
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center space-x-8 text-blue-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
