import React from 'react'
import HeroSection from '@/components/HeroSection'
import Cardsection from '@/components/Cardsection'
import Footersection from '@/components/Footersection'
import WhyChooseUs from "@/components/WhyChooseUs"
import LoginModal from '@/components/LoginModal'

export default function Home() {
  return (
      <>
      <main className="flex-1">

        <HeroSection />
        <Cardsection />
      </main>
      <WhyChooseUs/>
      <Footersection />
    </>
  )
}
