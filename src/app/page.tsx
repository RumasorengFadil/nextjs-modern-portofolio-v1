"use client"
import AboutSection from '@/components/organism/AboutSectionV2'
import TechStackSection from '@/components/organism/TechStackSectionV2'
import LatestProject from '@/components/organism/LatestProjectSectionV1'
import HeroSection from '@/components/organism/HeroSectionV2'
import NavbarSection from '@/components/organism/NavbarSectionV1'
import { CommandPrompt } from '@/components/organism/CommandPromptV1'
import ExperienceSection from '@/components/organism/ExperienceSectionV2'
import BlogPreviewSection from '@/components/organism/BlogPreviewSectionV1'
import CtaSection from '@/components/organism/CtaSectionV1'
import { FooterSection } from '@/components/organism/FooterSection'
import PublicLayout from '@/layout/PublicLayout'
import { FadeIn } from '@/components/motion/FadeIn'

export default function HomePage() {
  return (
    <PublicLayout >
      {/* Navbar Section*/}
      <NavbarSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <FadeIn>
        <ExperienceSection />
      </FadeIn>

      {/* Projects Section */}
      <FadeIn>
        <LatestProject />
      </FadeIn>

      {/* About Section */}
      <FadeIn direction='right' >
        <AboutSection />
      </FadeIn>

      {/* Skills Section */}
      <FadeIn direction='left'>
        <TechStackSection />
      </FadeIn>


      {/* Command Prompt */}
      <CommandPrompt />

      {/* Command Particles */}
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}

      {/* Blog Preview */}
      <FadeIn>
        <BlogPreviewSection />
      </FadeIn>

      {/* Contact CTA */}
      <FadeIn>
        <CtaSection />
      </FadeIn>

      {/* Footer */}
      <FooterSection />
    </PublicLayout >
  )
}