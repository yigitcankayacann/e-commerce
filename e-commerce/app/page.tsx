import HamburgerMenu from "@/app/components/navbar/HamburgerMenu";
import ImagesSliderDemo from "@/app/components/slider/Slider";
import ThreeDCardDemo from "@/app/components/card/ThreeDCardDemo";
import Apple from "@/app/components/hooks/Apple";
import DirectionAwareHoverDemo from "@/app/components/direction/Direction";


export default function Home() {
  return (
      <div className="flex flex-col min-h-screen gap-6">

            <HamburgerMenu/>
            <ImagesSliderDemo/>
            <ThreeDCardDemo/>
            <Apple/>
            <DirectionAwareHoverDemo/>

      </div>);
}
