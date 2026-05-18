import SectionOne from "@/app/components/SectionOne";
import SectionTwo from "@/app/components/SectionTwo";
import SectionThree from "@/app/components/SectionThree";
import SectionFour from "@/app/components/SectionFour";
import SectionFive from "@/app/components/SectionFive"; // Renamed from SectionFour
import SectionSix from "@/app/components/SectionSix";   // Renamed from SectionFive


export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}