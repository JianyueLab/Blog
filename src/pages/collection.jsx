import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Collections - JianyueHugo</title>
      </Head>
      <SimpleLayout
        title="Some things are important and useful"
        intro="If you look around on the Internet, there are too many goods things and nobody is sharing them. Here you can find a lot of useful information."
      >
        <div className="space-y-20">
          <SpeakingSection title="Minecraft">
            <Appearance
              href="https://www.mcbbs.net/thread-1367720-1-1.html"
              title="EssentialX WIKI——中文翻译版"
              description="TecoStudio出品, EssentialX 中文WIKI"
              event="MCBBS —— CHINESE MINECRAFT FORUM"
              cta="Link"
            />
            <Appearance
              href="https://www.mcbbs.net/thread-1355338-1-1.html"
              title="《红石理论》"
              description="TecoStudio出品, 如何使用红石技术"
              event="MCBBS —— CHINESE MINECRAFT FORUM"
              cta="Link"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
