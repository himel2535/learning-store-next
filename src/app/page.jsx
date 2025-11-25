import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import PopularBooks from "@/components/PopularBooks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <div>
        <Hero></Hero>
        <FeaturesSection></FeaturesSection>
        <PopularBooks></PopularBooks>
        <Testimonials></Testimonials>
   
      </div>
    </div>
  );
}
