import { RightSide } from "@/components/contents/RightSide";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import SplineScene from "@/components/spline/SplineScene";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:h-svh w-full">
        <div className="p-5 flex flex-col gap-[30px] md:gap-auto md:flex-row">
          <div className="flex-1">
            <RightSide />
          </div>
          <div className="flex-1 z-10">
            <SplineScene />
          </div>
        </div>
      </main>
    </>
  );
}
