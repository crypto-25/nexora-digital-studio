import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Work />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
