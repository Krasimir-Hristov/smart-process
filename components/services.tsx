"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { services } from "@/data/services"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-16 w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Our Services</h2>
            <p className="text-muted-foreground text-lg md:text-xl/relaxed">
              Discover how our AI automation solutions can transform your business operations.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.link} passHref className="h-full">
                <Card className="h-full transition-all duration-200 hover:shadow-lg">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
