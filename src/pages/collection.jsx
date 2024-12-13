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
        <title>Collections - JHL</title>
      </Head>
      <SimpleLayout
        title="Some things are important and useful"
        intro="If you look around on the Internet, there are too many goods things and nobody is sharing them. Here you can find a lot of useful information."
      >
        <div className="space-y-20">
          <SpeakingSection title="Links">
            <Appearance
              href="https://inuebisu.cn/"
              title="inuBlog"
              description="inuEbisu's Blog"
              event="My Friends"
              cta="Link"
            />
            <Appearance
              href="https://www.tecostudio.cn/"
              title="TecoStudio"
              description="TecoStudio Official Website"
              event="TecoStudio"
              cta="Link"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
