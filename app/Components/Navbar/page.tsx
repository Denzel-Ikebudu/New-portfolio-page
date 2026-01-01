"use client"
import { useState } from "react"
import ThemeToggle from "../ThemeToggle"
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-screen max-w-6xl mx-auto px-6">
      <nav className="sticky mx-auto mt-[50px] w-[80vw] flex flex-1 items-center justify-between h-[60px] p-4 z-50 
      bg-[rgb(var(--muted)/0.25)] background-blur-md">
        <Link href="/" className="font-bold text-lg">Denzel</Link>
        
        <div className="absolute left-1/2 -translate-x-1/2 md:flex gap-6 hidden">
          <Link href="#about" className="transition-transform duration-300 hover:scale-125 ease-out">About</Link>
          <Link href="#works" className="transition-transform duration-300 hover:scale-125 ease-out">Works</Link>
          <Link href="#contact" className="transition-transform duration-300 hover:scale-125 ease-out">Contact</Link>
        </div>

        <div className="flex items-center gap-[24px] justify-between md:gap-4">
          <Link href="https://www.linkedin.com/in/denzel-ikebudu-09ab36290/" className="transition-transform duration-300 hover:scale-125 ease-out"><i className="bi bi-linkedin"></i></Link>
          <Link href="https://x.com/Denzel_ikebudu" className="transition-transform duration-300 hover:scale-125 ease-out"><i className="bi bi-twitter"></i></Link>
          <Link href="https://github.com/Denzel-Ikebudu" className="transition-transform duration-300 hover:scale-125 ease-out"><i className="bi bi-github"></i></Link>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-label="Toggle menu">
            <i className = {`bi ${open ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>

      </nav>
      <AnimatePresence>
        {open && (
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="md:hidden  border-t border-[rgb(var(--border))] absolute right-[10vw] mt-2 w-[220px] rounded-lg
          bg-[rgb(var(--bg))] shadow-lg z-50">
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href='/' onClick={()=> setOpen(false)}>About</Link>
              <Link href='/' onClick={()=> setOpen(false)}>Projects</Link>
              <Link href='/' onClick={()=> setOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}