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
import { FadeIn } from '@/components/motion/FadeIn'
import { Blog } from '@/typedata/blog/blog'

export default function PageClient({ blogs }: { blogs: Blog[] }) {
  return <>
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

    {/* Blog Preview */}
    {Boolean(blogs.length) &&
      <FadeIn>
        <BlogPreviewSection blogs={blogs} />
      </FadeIn>
    }

    {/* Contact CTA */}
    <FadeIn>
      <CtaSection />
    </FadeIn>

    {/* Footer */}
    <FooterSection />

  </>
}