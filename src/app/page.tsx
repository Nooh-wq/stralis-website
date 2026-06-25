import { Hero } from "@/components/sections/Hero";
import { PositioningStrip } from "@/components/sections/PositioningStrip";
import { Services } from "@/components/sections/Services";
import { AppliedAI } from "@/components/sections/AppliedAI";
import { Work } from "@/components/sections/Work";
import { Stats } from "@/components/sections/Stats";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <Services />
      <AppliedAI />
      <Work />
      <Stats />
      <Reviews />
      <Contact />
    </>
  );
}
