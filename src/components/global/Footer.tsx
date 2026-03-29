import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, Mail, Camera, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-8 mt-20 relative overflow-hidden">
      {/* Decorative top shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/ applicable" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 0 0 321.39 29.09Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10 pt-10">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
              <Image 
                src="/logo.png" 
                alt="Little Monks Logo" 
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-contain"
              />
            </div>
            <span className="font-heading text-3xl md:text-4xl text-white font-bold whitespace-nowrap">
              <span className="text-primary">Little</span>Monks
            </span>
          </Link>
          <p className="font-body opacity-80 mb-6 text-sm">
            A nurturing Montessori preschool where every child is loved, guided, and inspired to explore the world with curiosity and confidence.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <a 
              href="https://www.instagram.com/the_little_monks_preschool/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-fit"
            >
              <Camera size={20} /> Follow us on Instagram
            </a>
          </div>
        </div>

        <div>
           <h4 className="font-heading text-2xl mb-6 text-secondary tracking-wide">Contact Us</h4>
           <ul className="space-y-4 font-body opacity-90 text-sm">
             <li className="flex items-start gap-3">
               <MapPin className="text-primary shrink-0 mt-1" size={18} />
               <span>Bhrindhavan Enclave, Bolarum,<br/>Secunderabad</span>
             </li>
             <li className="flex items-center gap-3">
               <Phone className="text-secondary shrink-0" size={18} />
               <span>096769 57687</span>
             </li>
             <li className="flex items-center gap-3">
               <Mail className="text-accent shrink-0" size={18} />
               <span>hello@littlemonks.com</span>
             </li>
             <li className="flex items-center gap-3">
               <Clock className="text-white shrink-0" size={18} />
               <span>Mon – Sat: 9 AM – 5 PM</span>
             </li>
           </ul>
        </div>

        <div>
           <h4 className="font-heading text-2xl mb-6 text-accent tracking-wide">Quick Links</h4>
           <ul className="space-y-3 font-body opacity-90 text-sm">
             <li><Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2">• About Us</Link></li>
             <li><Link href="#programs" className="hover:text-secondary transition-colors flex items-center gap-2">• Our Programs</Link></li>
             <li><Link href="#gallery" className="hover:text-accent transition-colors flex items-center gap-2">• Photo Gallery</Link></li>
             <li><Link href="#contact" className="hover:text-white transition-colors flex items-center gap-2">• Admissions</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="font-heading text-2xl mb-6 text-primary tracking-wide">Stay Updated</h4>
           <p className="font-body opacity-80 text-sm mb-4">Subscribe to our newsletter for school updates and parenting tips.</p>
           <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
             <input type="email" placeholder="Your email" className="bg-transparent border-none outline-none text-sm px-4 text-white w-full placeholder:text-white/50" />
             <button className="bg-primary text-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white transition-colors">
               &rarr;
             </button>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center font-body text-sm opacity-60">
        © {new Date().getFullYear()} Little Monks Pre School. All rights reserved.
      </div>
    </footer>
  );
}
