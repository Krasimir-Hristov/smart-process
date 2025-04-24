"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] py-20 overflow-hidden">
      <div className="container px-4 md:px-6 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6 w-full"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                AI Automation Services
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground text-lg md:text-2xl">
                Transform your business processes with cutting-edge AI automation. Streamline workflows, reduce costs, and boost productivity.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center mt-6">
              <Button asChild size="lg" className="text-lg py-7 px-8">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg py-7 px-8">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
