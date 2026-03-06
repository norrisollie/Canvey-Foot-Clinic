import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileNav from "./components/Header/MobileNav";
import Hero from "./components/Sections/Hero/Hero";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  // handle toggle of mobile nav, toggles showMobileNav state between true and false
  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  return (
    <>
      {
        // show mobile nav if showMobileNav is true
        showMobileNav && <MobileNav toggleMobileNav={toggleMobileNav} />
      }
      <main className="min-h-svh flex flex-col">
        <Header toggleMobileNav={toggleMobileNav} />
        <Hero />
        <Footer />
        {/* <Section title="About Us">Section 2</Section>
        <Section title="Services">Section 3</Section>
        <Section title="Testimonials">Section 4</Section>
        <Section title="Contact">Section 5</Section>
        <Footer /> */}
      </main>
    </>
  );
}

export default App;
