import { Hero } from "@/components/sections/Hero";
import { SectionList } from "@/components/sections/SectionList";
import { ProjectList } from "@/components/sections/ProjectList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div
        style={{
          backgroundColor: "rgb(108, 231, 221)",
          backgroundImage:
            "linear-gradient(45deg, rgb(250, 255, 178) 25%, transparent 25%, transparent 75%, rgb(250, 255, 178) 75%, rgb(250, 255, 178)), linear-gradient(45deg, rgb(250, 255, 178) 25%, rgb(108, 231, 221) 25%, rgb(108, 231, 221) 75%, rgb(250, 255, 178) 75%, rgb(250, 255, 178))",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }}
      >
        <SectionList />
        <ProjectList />
      </div>
    </div>
  );
}
