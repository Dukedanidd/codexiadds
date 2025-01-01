"use client";
import { Suspense } from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SplashScreen from '@/components/SplashScreen';
import PortfolioCarousel from '@/components/Portfolio';
import Form from '@/components/Form';
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
              <PortfolioCarousel />
              <Form />
              <FAQ />
            </motion.main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}