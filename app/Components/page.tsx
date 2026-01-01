import Hero from "./Hero/page";
import Skill from "./Skill/page";
import Works from "./Works/page";
import Contact from "./Contact/page";
import Navbar from "./Navbar/page"

export default function Components() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Works />
      <Contact />
    </div>
  )
}
