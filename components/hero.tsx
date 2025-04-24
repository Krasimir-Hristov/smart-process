"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI Automation Services
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transform your business processes with cutting-edge AI automation. Streamline workflows, reduce costs, and boost productivity.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto lg:ml-auto flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="/template_image.webp"
                alt="AI Automation Services"
                fill
                priority
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
