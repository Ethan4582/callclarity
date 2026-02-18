import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* navbar part 1 */}
      <div className="fixed left-0 top-0 right-0 z-10 shrink-0 order-first">

        <nav aria-label="Desktop" className="nav-container">
          <div aria-label="Content" className="nav-content">
            <div aria-label="Logo+Menu open" className="items-center flex flex-col size-min justify-center relative gap-[10px] shrink-0">
              <div className="relative shrink-0">
                <a href="/" aria-label="Home" className="logo-container">
                  <div aria-label="Globe" className="globe-icon">
                    <div aria-label="Blur" className="absolute left-[-13px] right-[-9px] bottom-[-8px] aspect-[1.15385/1]">
                      <div className="absolute inset-0">
                        <img
                          src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9f676721f71c6a8a84b5dcea0885eb38746ba3a4.png%3Fwidth=360&amp;height=312?generation=1771443083880491&amp;alt=media"
                          className="block size-full object-cover overflow-clip"
                          alt="Globe Blur"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start relative shrink-0">
                    <p className="text-white/92 text-[17px] tracking-[-0.51px] leading-[17px] font-geist">
                      <span className="font-medium">CallClarity</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>

          

            <div aria-label="Sections" className="items-center flex size-min justify-center overflow-hidden relative gap-7 shrink-0">
              <div className="nav-link-container">
                <a href="#features" className="nav-link">
                  <div className="flex flex-col justify-start relative shrink-0">
                    <p className="nav-link-text">Features</p>
                  </div>
                </a>
              </div>
              <div className="nav-link-container">
                <a href="#benefits-1" className="nav-link">
                  <div className="flex flex-col justify-start relative shrink-0">
                    <p className="nav-link-text">Benefits</p>
                  </div>
                </a>
              </div>
              <div className="nav-link-container">
                <a href="#testimonials" className="nav-link">
                  <div className="flex flex-col justify-start relative shrink-0">
                    <p className="nav-link-text">Testimonials</p>
                  </div>
                </a>
              </div>
              <div className="nav-link-container">
                <a href="#pricing" className="nav-link">
                  <div className="flex flex-col justify-start relative shrink-0">
                    <p className="nav-link-text">Pricing</p>
                  </div>
                </a>
              </div>
            </div>


            <div className="relative shrink-0">
              <a href="/" aria-label="Sign In" className="btn-signin">
                <div className="flex flex-col justify-start relative z-10 shrink-0">
                  <p className="nav-link-text">Sign In</p>
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