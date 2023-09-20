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
            <Tool title="Macbook Pro 2019">
              I love using the MacBook, it gives me a lot of convenience and makes me more productive. I really recommend having your own MacBook.
            </Tool>
            <Tool title="DIY PC">
              CPU: AMD R7 5700X; <br />
              GPU: NIVIDA 1650 super; <br />
              RAM: KINGBANK 16G*2 3600Hz; <br />
              SSD: SAMSUNG 980 1T*2; <br />
              ELECTRIC: TT SFX 550W; <br />
              MotherBoard: MSI MPG B550 GAMING PLUS <br />
            </Tool>
            <Tool title="PRIVATE SERVER">
              CPU: AMD EPYC 7302P; <br />
              RAM: SAMSUNG 16G*8 2400Hz; <br />
              SSD: SAMSUNG 980 1T; <br />
              HDD: SEAGATE 6T*3 8T*1 <br />
            </Tool>
            <Tool title="OTHER">
              Mouse: RAZER VIPER ULTIMATE; <br />
              Keyboard: RAZER BLACKWIDOW V3 MINI; <br />
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
          <ToolsSection title="Address">
            <Tool title="Japan">
              Jianyue Hugo Liang / Janyue Aosugi <br />
              Room 804, Ruminasu Icibancho <br />
              21-3, Ichibancho <br />
              Chiyoda-city, Tokyo-to <br />
              102-0082, Japan <br />
            </Tool>
          </ToolsSection>
          <ToolsSection title="Links">
            <Appearance
              href="https://inuebisu.cn"
              title="inuebisu"
              description="NICE and FRIENDLY guy"
              cta="Link"
            />
            <Appearance
              href="https://www.tecostudio.cn"
              title="TecoStuio"
              description="A group of people who love Minecraft and working for it's community."
              cta="Link"
            />
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
