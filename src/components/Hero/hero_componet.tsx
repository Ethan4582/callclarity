import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="absolute h-[420px] left-[-80px] top-[-80px] right-[-80px]">
      <div className="relative size-full overflow-hidden hero-bg-gradient">

        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/assets/img1.png"
            alt="Hero Background"
            fill
            priority
            className="object-contain scale-115 brightness-110 contrast-110 drop-shadow-2xl"
          />
        </div>
<div className="overflow-hidden absolute inset-0 hero-radial-overlay" />
    

      </div>
    </div>
  );
};

export default HeroComponent;
