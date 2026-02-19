import React from 'react'

import Marquee from '../marquee'
import HeroStartBadge from '../HeroStartBadge'
import HeroTitle from '../HeroTitle'
import HeroActions from '../HeroActions'
import HeroSocial from '../HeroSocial'
import HeroIllustration from '../HeroIllustration'

const Hero = () => {
  return (
    <div>
      <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[900px]">
        <main aria-label="Main" className="items-center flex flex-col h-min justify-center overflow-hidden relative w-full gap-[0px]">
          <section aria-label="Hero" className="items-center flex flex-col h-screen justify-center relative w-full gap-[0px] pt-0 pr-[100px] pb-0 pl-[100px] shrink-[0]">
            <div aria-label="Content" className="items-center flex grow h-px justify-center relative w-full basis-0 gap-[13px] max-w-[1000px] z-[1] shrink-[0]">
              <div aria-label="Left" className="items-start flex flex-col grow h-min justify-center relative w-px basis-0 gap-[32px] pt-[45px] pr-0 pb-0 pl-0 z-[1] shrink-[0]">
                <header aria-label="Header" className="items-start flex flex-col h-min justify-center relative w-full gap-[16px] shrink-[0]">
                  <HeroStartBadge />
                  <HeroTitle />
                </header>
                <HeroActions />
                <HeroSocial />
              </div>
              <HeroIllustration />
            </div>
            <Marquee />
          </section>
        </main>
      </div>
    </div>
  )
}

export default Hero