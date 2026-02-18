import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* navbar part 1 */}
        <div className="fixed left-0 top-0 right-0 z-[10] shrink-[0]" style={{"order":"-1000"}}>
          
          <nav aria-label="Desktop" className="items-center flex h-min justify-center relative w-full backdrop-blur-[5px] bg-black/80 gap-[10px] pt-5 pr-11 pb-5 pl-11 after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(23,_23,_23)] after:content-[&quot;&quot;]">
            <div aria-label="Content" className="items-center flex grow h-min justify-between relative w-px basis-0 max-w-[1400px] shrink-[0]">
              <div aria-label="Logo+Menu open" className="items-center flex flex-col size-min justify-center relative gap-[10px] shrink-[0]">
                <div className="relative shrink-[0]">
                  <a href="https://chatframe.framer.website/" aria-label="Variant 1" className="items-center flex size-min justify-center overflow-hidden relative bg-[rgba(94,_94,_94,_0.15)] text-[rgb(0,_0,_238)] gap-[6.87px] pt-[6.87px] pr-[13.75px] pb-[6.87px] pl-[6.87px] rounded-[1.718125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div aria-label="Globe" className="aspect-square overflow-hidden relative w-[27px] shadow-[rgb(0,234,255)_1.96px_-1.22px_16px_0px_inset,_rgb(38,0,255)_-1.72px_1.48px_16px_0px_inset,_rgba(255,255,255,0.88)_-9.09px_0.98px_161px_0px_inset,_rgb(255,255,255)_8.59px_-0.74px_11px_0px_inset,_rgba(11,0,77,0.19)_0px_0.906986px_0.906986px_-0.46875px,_rgba(11,0,77,0.18)_0px_2.14972px_2.14972px_-0.9375px,_rgba(11,0,77,0.18)_0px_3.92131px_3.92131px_-1.40625px,_rgba(11,0,77,0.17)_0px_6.51917px_6.51917px_-1.875px,_rgba(11,0,77,0.16)_0px_10.5279px_10.5279px_-2.34375px,_rgba(11,0,77,0.15)_0px_17.2332px_17.2332px_-2.8125px,_rgba(11,0,77,0.12)_0px_29.6743px_29.6743px_-3.28125px,_rgba(11,0,77,0.06)_0px_54px_54px_-3.75px,_rgba(0,0,0,0.25)_0px_3.94px_32px_0px,_rgba(0,0,0,0.25)_0px_7.85px_64px_0px,_rgb(30,0,179)_0px_7.11px_182px_0px] z-[5] shrink-[0] rounded-[0.859375rem]" style={{"backgroundImage":"linear-gradient(rgb(107, 134, 255) 0%, rgb(0, 123, 255) 48.4832%, rgb(0, 47, 255) 100%)"}}>
                      <div aria-label="Blur" className="absolute left-[-13px] right-[-9px] bottom-[-8px] aspect-[1.15385_/_1]">
                        <div className="absolute left-0 top-0 right-0 bottom-0">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9f676721f71c6a8a84b5dcea0885eb38746ba3a4.png%3Fwidth=360&amp;height=312?generation=1771443083880491&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_360_/_312]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="text-white/92 text-[17px] tracking-[-0.51px] leading-[17px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif","textDecoration":"rgba(255, 255, 255, 0.92)"}}>
                        <span className="font-medium">ChatFrame</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>

                 {/* navbar part 2 */}

              <div aria-label="Sections" className="items-center flex size-min justify-center overflow-hidden relative gap-[28px] shrink-[0]">
                <div className="relative shrink-[0]">
                  <a href="https://chatframe.framer.website/#features" aria-label="Variant 1" className="items-center flex size-min justify-start overflow-hidden relative text-[rgb(0,_0,_238)] gap-[10px] opacity-[0.8]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{"fontFamily":"Inter, sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Features</p>
                    </div>
                  </a>
                </div>
                <div className="relative shrink-[0]">
                  <a href="https://chatframe.framer.website/#benefits-1" aria-label="Variant 1" className="items-center flex size-min justify-start overflow-hidden relative text-[rgb(0,_0,_238)] gap-[10px] opacity-[0.8]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{"fontFamily":"Inter, sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Benefits</p>
                    </div>
                  </a>
                </div>
                <div className="relative shrink-[0]">
                  <a href="https://chatframe.framer.website/#testimonials" aria-label="Variant 1" className="items-center flex size-min justify-start overflow-hidden relative text-[rgb(0,_0,_238)] gap-[10px] opacity-[0.8]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{"fontFamily":"Inter, sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Testimonials</p>
                    </div>
                  </a>
                </div>
                <div className="relative shrink-[0]">
                  <a href="https://chatframe.framer.website/#pricing" aria-label="Variant 1" className="items-center flex size-min justify-start overflow-hidden relative text-[rgb(0,_0,_238)] gap-[10px] opacity-[0.8]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{"fontFamily":"Inter, sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Pricing</p>
                    </div>
                  </a>
                </div>
              </div>


              <div className="relative shrink-[0]">
                <a href="https://framer.link/RmHInmd" aria-label="Desktop/secondery" className="items-center flex size-min justify-center overflow-hidden relative bg-[rgb(23,_23,_23)] text-[rgb(0,_0,_238)] gap-[8px] pt-3 pr-5 pb-3 pl-5 rounded-[0.9775rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(34,_34,_34)] after:content-[&quot;&quot;] after:rounded-[0.9775rem]" style={{"backgroundImage":"linear-gradient(rgb(23, 23, 23) 0%, rgb(23, 23, 23) 25%, rgb(23, 23, 23) 50%, rgb(23, 23, 23) 75%, rgb(23, 23, 23) 100%)","textDecoration":"rgb(0, 0, 238)"}}>
                  <div className="flex flex-col justify-start relative whitespace-pre z-[10] shrink-[0]">
                    <p className="text-white text-[16px] tracking-[-0.64px] leading-[19.2px]" style={{"fontFamily":"Inter, sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Get Template</p>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>

    </div>
  )
}

export default Navbar