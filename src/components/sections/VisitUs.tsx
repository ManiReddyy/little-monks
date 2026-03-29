'use client';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Send } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4"
          >
            Come Visit Us Today!
          </motion.h2>
          <p className="font-body text-foreground/70 text-lg max-w-2xl mx-auto">
            We would love to show you around our joyful space. Schedule a visit or simply walk in to experience the Little Monks magic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 rounded-[3rem] p-8 md:p-12 shadow-clay relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

          {/* Details & Map */}
          <div className="relative z-10 flex flex-col justify-between">
            <div className="space-y-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-foreground mb-1">Our Location</h4>
                  <p className="font-body text-foreground/80 leading-relaxed text-sm">
                    Little Monks Pre School, House, Bhrindhavan Enclave, New Bolarum, Railway Employees Colony, Bolarum, Hyderabad, Secunderabad, Telangana 500014
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-foreground mb-1">Call Us Now</h4>
                  <a href="tel:+9109676957687" className="font-body text-foreground/80 hover:text-secondary hover:underline transition-colors block">
                    +91 096769 57687
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-foreground mb-1">Timings</h4>
                  <p className="font-body text-foreground/80">Mon – Sat: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map iframe */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.839845347248!2d78.50821631536647!3d17.514755187985794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b000ababc95%3A0x8898b3f2fbe85989!2sLittle%20Monks%20Pre%20School!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg relative z-10 border border-gray-100">
            <h3 className="font-heading text-3xl text-foreground mb-6">Schedule a Visit</h3>
            <form action="mailto:PLACEHOLDER@SCHOOL.COM" method="POST" encType="text/plain" className="space-y-5">
              
              <div>
                <label className="block font-body text-sm font-bold text-foreground/80 mb-2">Parent's Name *</label>
                <input 
                  type="text" 
                  name="Parent Name" 
                  required 
                  className="w-full bg-gray-50 border border-gray-200 text-foreground px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body placeholder:text-gray-400"
                  placeholder="E.g. John Doe" 
                />
              </div>

              <div>
                <label className="block font-body text-sm font-bold text-foreground/80 mb-2">Mobile Number *</label>
                <input 
                  type="tel" 
                  name="Mobile" 
                  required 
                  className="w-full bg-gray-50 border border-gray-200 text-foreground px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body placeholder:text-gray-400"
                  placeholder="+91 XXXXX XXXXX" 
                />
              </div>

              <div>
                <label className="block font-body text-sm font-bold text-foreground/80 mb-2">Child's Age/Program</label>
                <input 
                  type="text" 
                  name="Program" 
                  className="w-full bg-gray-50 border border-gray-200 text-foreground px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body placeholder:text-gray-400"
                  placeholder="E.g. 3 years old, Nursery" 
                />
              </div>

              <div>
                <label className="block font-body text-sm font-bold text-foreground/80 mb-2">Your Query *</label>
                <textarea 
                  name="Query" 
                  required 
                  rows={4} 
                  className="w-full bg-gray-50 border border-gray-200 text-foreground px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body placeholder:text-gray-400 resize-none"
                  placeholder="How can we help you?" 
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-primary text-foreground font-bold text-lg py-4 rounded-full shadow-[0_6px_0_#e5c337] hover:shadow-[0_4px_0_#e5c337] hover:translate-y-1 active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send size={20} />
              </motion.button>
              <p className="text-center font-body text-xs text-foreground/50 mt-4">
                Note: This will open your default email client to send the details directly to the school.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
