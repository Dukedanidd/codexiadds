"use client";
import { Suspense } from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Suspense>
              <Header />
            </Suspense>
            <motion.main>
              <Hero />
              <About />
              <Pricing />
              <FAQ />
              <CTA />
            </motion.main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}