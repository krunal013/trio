import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";
import Image from "next/image";

/* ===== CLIENT LOGOS ===== */
import BakeFlavour from "../../../public/images/Clients/BakeFlavors.webp";
import Herbnova from "../../../public/images/Clients/Herbnova.webp";
import CAKENJOY from "../../../public/images/Clients/CAKENJOY.webp";
import Shadowbron from "../../../public/images/Clients/shadow.webp";
import Neo from "../../../public/images/Clients/neo.webp";
import Rachaita from "../../../public/images/Clients/Rachaita.webp";
import Raghuvir from "../../../public/images/Clients/Raghuvir.webp";
import Mantradharin from "../../../public/images/Clients/mantradharin.webp";
import Shivam from "../../../public/images/Clients/shivam.webp";
import EmilyMistry from "../../../public/images/Clients/Logo.webp";
import Tekton from "../../../public/images/Clients/Tekton.webp";
import ThreeCharacter from "../../../public/images/Clients/3C.webp";
import Skynet from "../../../public/images/Clients/Skynet.webp";
import Settle from "../../../public/images/Clients/9settle.webp";
import Rayo from "../../../public/images/Clients/Rayo.webp";
import Container from "./Container";

/* ===== DATA ===== */
const reviews = [
  { img: BakeFlavour, width: 120 },
  { img: Herbnova, width: 130 },
  { img: CAKENJOY, width: 130 },
  { img: Shadowbron, width: 130 },
  { img: Neo, width: 90 },
  { img: Rachaita, width: 160 },
  { img: Raghuvir, width: 120 },
  { img: Mantradharin, width: 140 },
  { img: Shivam, width: 120 },
  { img: EmilyMistry, width: 120 },
  { img: Tekton, width: 140 },
  { img: ThreeCharacter, width: 120 },
  { img: Skynet, width: 120 },
  { img: Settle, width: 130 },
  { img: Rayo, width: 110 },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

/* ===== LOGO CARD ===== */
const LogoCard = ({ img, width = 120 }) => {
  return (
      <div
      className={cn(
        "flex items-center justify-center cursor-pointer",
        "h-20 md:h-24 lg:h-28",
        "w-36 md:w-44 lg:w-48",
        "rounded-xl border border-zinc-200 bg-white",
        "hover:bg-zinc-50 transition-colors",
        "px-4"
      )}
    >
      <Image
        src={img}
        alt="Client logo"
        width={width}                 // ✅ width now defined
        height={60}                   // ✅ required by next/image
        className="object-contain max-h-12 md:max-h-14 lg:max-h-16"
      />
    </div>
  );
};

/* ===== MARQUEE SECTION ===== */
export function MarqueeDemo() {
  return (
    <Container>
    <section className="lg:flex items-start justify-between gap-10 pb-10 py-6 lg:py-20">
      
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/3 flex flex-col my-auto space-y-3 md:py-8">
        <span className="text-3xl md:text-5xl font-bold">
          Trusted by <span className="text-blue-500">Top brands</span>
        </span>
        <p className="text-zinc-600 text-md md:text-xl">
          From enterprise-grade solutions to custom applications, we empower
          leading brands with scalable, high-performance digital solutions.
        </p>
      </div>

      {/* RIGHT MARQUEE */}
      <div className="w-full lg:w-2/3 relative flex flex-col items-center justify-center overflow-hidden">
        
        <Marquee pauseOnHover className="[--duration:18s]">
          {firstRow.map((item, index) => (
            <LogoCard
              key={index}
              img={item.img}
              width={item.width}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:18s]">
          {secondRow.map((item, index) => (
            <LogoCard
              key={index}
              img={item.img}
              width={item.width}
            />
          ))}
        </Marquee>

        {/* FOG LEFT */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f4f9ff]" />

        {/* FOG RIGHT */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f4f9ff]" />
      </div>

    </section>
    </Container>
  );
}
