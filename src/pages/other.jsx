import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Other - JianyueHugo</title>
        <meta
          name="description"
          content="Things I recommend and some links of my friends"
        />
      </Head>
      <SimpleLayout
        title="Recommendation"
        intro="Things I recommend and some links of my friends"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="DIY PC">
              CPU: AMD R7 5700X
              GPU: NIVIDA 1650 super
              RAM: KINGBANK 16G*2 3600Hz
              SSD: SAMSUNG 980 1T*2
              ELECTRIC: TT SFX 550W
              MotherBoard: MSI MPG B550 GAMING PLUS 
            </Tool>
            <Tool title="PRIVATE SERVER">
              CPU: AMD EPYC 7302P
              RAM: SAMSUNG 16G*8 2400Hz
              SSD: SAMSUNG 980 1T
              HDD: SEAGATE 6T*3 8T*1
            </Tool>
            <Tool title="OTHER">
              Mouse: RAZER VIPER ULTIMATE
              Keyboard: RAZER BLACKWIDOW V3 MINI
              MONITOR: DELL 24 GAMING MONITOR
              HEADPHONE: RAZER KRAKEN V3
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              Nice and good to use.
            </Tool>
            <Tool title="Visual Studio Code">
              Easy app for project
            </Tool>
          </ToolsSection>
          <ToolsSection title="Links" href="https://inuebisu.cn">
            <Tool title="inuebisu">
              Blog of inuebisu, nice guy. REALLY FRIENDLY.
            </Tool>
            <Tool title="TecoStudio" href="https://www.tecostudio.cn">
              A group of people who love Minecraft and working for community.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
