import React from 'react'
import {
  HERO_BG_TEXT,
  HERO_HIGHLIGHTED_TEXT,
  HERO_TRIANGLE_SVG,
  HERO_FIND_ICON_SVG,
  HERO_IMPROVE_ICON_SVG,
  HERO_DIVIDER_ICON,
  HERO_SHARE_ICON,
  HERO_COPY_ICON,
  HERO_MORE_ICON,
} from '../data/globalData'

// Helper: render each character inside its own span (blur-[0px] animations)
const CharSpans = ({ text }: { text: string }) => {
  // Split into words, preserve spaces
  const words = text.split(/(\s+)/);
  return (
    <>
      {words.map((word, wi) => {
        if (/^\s+$/.test(word)) return ' ';
        return (
          <span key={wi} className="whitespace-nowrap">
            {word.split('').map((ch, ci) => (
              <span key={ci} className="inline-block blur-[0px]" style={{ textDecoration: 'rgb(255, 255, 255)' }}>{ch}</span>
            ))}
          </span>
        );
      })}
    </>
  );
};

const hero_componet = () => {
  return (
    <div>  <div className="contents">
      <div className="absolute h-[409px] left-[-58px] top-[-76px] right-[-135px]">
        <div aria-label="Variant 1" className="size-full overflow-hidden relative" style={{ "backgroundImage": "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(2, 0, 105, 0.88) 83%, rgba(30, 0, 71, 0.88) 100%)" }}>
          <div aria-label="BG Text" className="overflow-hidden absolute w-[550px] h-96 left-[calc(50.0752%-275px)] top-[-150px]">
            <div className="flex flex-col justify-start absolute whitespace-pre-wrap left-0 top-[50%] right-0 translate-y-[-50%]">
              {HERO_BG_TEXT.map((para, i) => (
                <p key={i} className="text-white/55 text-[16px] tracking-[-0.32px] leading-[25.6px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgba(255, 255, 255, 0.55)" }}>{para}</p>
              ))}
            </div>
          </div>

          <div aria-label="Radial" className="overflow-hidden absolute left-0 top-0 right-0 bottom-0" style={{ "backgroundImage": "radial-gradient(50% 36%, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%)" }}></div>

          <div aria-label="select" className="items-center flex size-min justify-center overflow-hidden absolute left-20 top-[157px] bg-[rgb(29,_44,_59)] gap-[10px]">
            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
              <p className="text-white text-[16px] tracking-[-0.32px] leading-[25.6px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>
                <CharSpans text={HERO_HIGHLIGHTED_TEXT} />
              </p>
            </div>
          </div>

          <div aria-label="menu" className="absolute w-[328px] h-[58px] left-[103px] top-[calc(50.6112%-29px)]">
            <div className="absolute w-[17px] h-[15px] left-[140px] top-0 bg-size-[100%_100%]" style={{ "backgroundImage": `url("${HERO_TRIANGLE_SVG}")` }}></div>
            <div aria-label="Content" className="items-center flex size-min justify-center overflow-hidden absolute left-[50%] bottom-0 bg-black gap-[13px] pt-1 pr-3 pb-1 pl-1 translate-x-[-50%] rounded-[0.8125rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(25,_25,_25)] after:content-[&quot;&quot;] after:rounded-[0.8125rem]">
              <div aria-label="Fake Buttons" className="items-center flex size-min justify-center overflow-hidden relative gap-[6.87px] shrink-[0]">
                <div aria-label="Find" className="items-center flex size-min justify-center overflow-hidden relative bg-[rgb(18,_18,_18)] gap-[8px] pt-[10px] pr-3 pb-[10px] pl-[10px] shrink-[0] rounded-[0.625rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(20,_20,_20)] after:content-[&quot;&quot;] after:rounded-[0.625rem]">
                  <div className="relative w-4 h-[14px] bg-size-[100%_100%] shrink-[0] opacity-[0.88]" style={{ "backgroundImage": `url("${HERO_FIND_ICON_SVG}")` }}></div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.88]">
                    <p className="text-white text-[17px] tracking-[-0.68px] leading-[17px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>Find</p>
                  </div>
                </div>
                <div aria-label="Improve" className="items-center flex size-min justify-center overflow-hidden relative bg-[rgb(48,_48,_48)] gap-[7px] pt-[10px] pr-3 pb-[10px] pl-[10px] shrink-[0] rounded-[0.625rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(20,_20,_20)] after:content-[&quot;&quot;] after:rounded-[0.625rem]">
                  <div className="relative w-[14px] h-[14px] bg-size-[100%_100%] shrink-[0]" style={{ "backgroundImage": `url("${HERO_IMPROVE_ICON_SVG}")` }}></div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="text-white text-[17px] tracking-[-0.68px] leading-[17px]" style={{ "fontFamily": "Inter, \"Inter Placeholder\", sans-serif", "textDecoration": "rgb(255, 255, 255)" }}>Improve</p>
                  </div>
                </div>
              </div>
              <div aria-label="Icons" className="items-center flex size-min justify-center relative gap-[12px] shrink-[0]">
                <div className="relative w-px h-[17px] shrink-[0]">
                  <div className="size-full">
                    <div className="size-full">
                      <img src={HERO_DIVIDER_ICON} className="block size-full" />
                    </div>
                  </div>
                </div>
                <div aria-label="Share+Copy" className="items-center flex size-min justify-center overflow-hidden relative gap-[12px] shrink-[0]">
                  <div aria-label="share" className="aspect-square relative w-[18px] shrink-[0] opacity-[0.95]">
                    <div className="items-center flex size-full justify-center max-h-full max-w-full">
                      <div className="size-full overflow-hidden">
                        <img src={HERO_SHARE_ICON} className="block size-full" />
                      </div>
                    </div>
                  </div>
                  <div aria-label="copy alt" className="aspect-square relative w-[18px] shrink-[0] opacity-[0.95]">
                    <div className="items-center flex size-full justify-center max-h-full max-w-full">
                      <div className="size-full overflow-hidden">
                        <img src={HERO_COPY_ICON} className="block size-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-px h-[17px] shrink-[0]">
                  <div className="size-full">
                    <div className="size-full">
                      <img src={HERO_DIVIDER_ICON} className="block size-full" />
                    </div>
                  </div>
                </div>
                <div aria-label="more alt" className="aspect-square relative w-[18px] shrink-[0]">
                  <div className="items-center flex size-full justify-center max-h-full max-w-full">
                    <div className="fill-none size-full overflow-hidden">
                      <img src={HERO_MORE_ICON} className="block size-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default hero_componet