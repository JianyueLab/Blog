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

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
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
            <Tool title="Macbook Pro 2019 16 inch">
              I love using the MacBook, it gives me a lot of convenience and makes me more productive. I really recommend having your own MacBook.
            </Tool>
            <Tool title="DIY PC">
              CPU: AMD R7 5700X; <br />
              GPU: ZOTAC NIVIDA RTX 4060; <br />
              RAM: KINGBANK 16G*2 3600Hz; <br />
              SSD: SAMSUNG 980 1T*2; <br />
              POWER: Super Flower 750W; <br />
              MotherBoard: MSI MPG B550 GAMING PLUS <br />
            </Tool>
            <Tool title="PRIVATE SERVER">
              CPU: AMD EPYC 7302P; <br />
              RAM: SAMSUNG 16G*4 2400Hz & 32g*2 2666; MICRON 16g*2 2400Hz;<br />
              SSD: SAMSUNG 980 pro 1T; <br />
              HDD: SEAGATE 6T*3 8T*1; <br />
              POWER: TT sfx 550W; <br />
              MOTHERBOARD: Supermicro H12SSL-i <br />
            </Tool>
            <Tool title="TEST & TRAINING SERVER">
              CPU: AMD R5 5600X; <br />
              GPU: NVIDIA 1650 SUPER; <br />
              RAM: MICRON 16*2 2400Hz; KINGBANK 16g*1 3600Hz; <br />
              SSD: SAMSUNG 980 1T; <br />
              POWER: TT sfx 550W; <br />
              MOTHERBOARD: ASROCK B550M PRO 4 <br />
            </Tool>
            <Tool title="OTHER">
              Mouse: RAZER VIPER ULTIMATE; <br />
              Keyboard: ASUS ROG AZOTH BLACK; <br />
              MONITOR: DELL 24 GAMING MONITOR; <br />
              HEADPHONE: RAZER KRAKEN V3 <br />
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
          <ToolsSection title="Links">
            <Appearance
              href="https://jianyuelab.net"
              title="My Chinese Blog"
              description="Chinese BLOG!!!!!!"
              cta="Link"
            />
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
