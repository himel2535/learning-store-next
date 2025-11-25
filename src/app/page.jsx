import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}
