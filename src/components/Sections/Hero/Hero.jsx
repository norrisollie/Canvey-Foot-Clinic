import { content } from "../../../web-data";
import Section from "../Section";

const heroSection = content.pages?.home?.sections?.find(
  (section) => section.id === "hero",
);

const id = heroSection?.id;

const { title, subtitle, cta } = heroSection?.payload || {};

console.log({ heroSection, id, title, subtitle, cta });

function Hero() {
  return <Section id={id} title={title} subtitle={subtitle} cta={cta} />;
}

export default Hero;
