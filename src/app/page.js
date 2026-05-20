
import HeroCarousel from "./heroCarousel/page";
import ExtraSectionOne from "./extraSectionOne/page";
import ExtraSectionTwo from "./extraSectionTwo/page";
import ShowingGallary from "./showingGalllary/page";
import HomePageTutor from "./homePageTutor/page";




export default function Home() {
  return (
    <div>
    <HeroCarousel></HeroCarousel>
    <HomePageTutor ></HomePageTutor>
    
     
      <ExtraSectionOne></ExtraSectionOne>

      <ShowingGallary></ShowingGallary>
      <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
}
