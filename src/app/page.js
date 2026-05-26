import HeroCarousel from "./heroCarousel/page";
import ExtraSectionOne from "./extraSectionOne/page";
import ExtraSectionTwo from "./extraSectionTwo/page";
import ShowingGallary from "./showingGalllary/page";
import TutorCard from "@/components/TutorCard";
import ExtraCard from "./extracard/page";




export default function Home() {
  return (
    <div>
    <HeroCarousel></HeroCarousel>

   
    <ExtraCard/>
      <ExtraSectionOne></ExtraSectionOne>

      <ShowingGallary></ShowingGallary>
      <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
}
