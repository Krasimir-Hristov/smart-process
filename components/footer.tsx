"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-slate-950 text-slate-50">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">SmartProcess</h3>
            <p className="text-sm text-slate-400 max-w-xs">
              Transforming businesses with cutting-edge AI automation solutions. 
              Simplify your processes and boost productivity with our intelligent services.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@smartprocess.com" className="text-sm hover:text-slate-50 transition-colors">
                  info@smartprocess.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="text-sm hover:text-slate-50 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-slate-400 hover:text-slate-50 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} SmartProcess. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
