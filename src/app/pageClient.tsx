"use client"
import AboutSection from '@/components/organism/AboutSectionV2'
import TechStackSection from '@/components/organism/TechStackSectionV2'
import LatestProject from '@/components/organism/LatestProjectSectionV1'
import HeroSection from '@/components/organism/HeroSectionV2'
import { CommandPrompt } from '@/components/organism/CommandPromptV1'
import ExperienceSection from '@/components/organism/ExperienceSectionV2'
import BlogPreviewSection from '@/components/organism/BlogPreviewSectionV1'
import CtaSection from '@/components/organism/CtaSectionV1'
import { FooterSection } from '@/components/organism/FooterSection'
import { FadeIn } from '@/components/motion/FadeIn'
import { Blog } from '@/typedata/blog/blog'
import { useChat } from '@/hooks/use-chat'
import { ChatPromptForm } from '@/components/organism/ChatPromptForm'
import { Pagination } from '@/typedata/pagination/pagination'

export default function PageClient({ pagination }: { pagination: Pagination<Blog> }) {
  const { handleChat, streamMessage, messages, streamDone, clearChat } = useChat();
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
    {Boolean(pagination.data.length) &&
      <FadeIn>
        <BlogPreviewSection blogs={pagination.data} />
      </FadeIn>
    }

    {/* Contact CTA */}
    <FadeIn>
      <CtaSection />
    </FadeIn>

    {/* Footer */}
    <FooterSection />

    {/* Chat Prompt Form */}
    <ChatPromptForm streamDone={streamDone} messages={messages} streamMessage={streamMessage} onChat={handleChat} clearChat = {clearChat} />
  </>
}