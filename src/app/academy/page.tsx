import React from "react";
import projectsData from "../../data/projects.json";

export const metadata = {
  title: "Academy Portfolio - Muhammad Arya Kamal",
  description: "Portfolio submission for Apple Developer Academy",
};

export default function AcademyPortfolio() {
  const targetProjects = ["Lumpat", "Hawa", "Prenava", "Competition Maker"];
  const projects = projectsData.filter((p) => targetProjects.includes(p.name));

  const getProjectMedia = (projectName: string) => {
    switch (projectName) {
      case "Lumpat":
        return (
          <div className="flex flex-col gap-2 h-full w-full">
            <p className="font-mono text-[14px] font-bold border-b-2 border-[var(--color-navy)] mb-2">Web Previews & On-Site Timing</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1 min-h-0">
              <img src="/academy-assets/lumpat/Screenshot%202026-06-17%20at%2017.13.14.png" alt="Lumpat Web Preview 1" className="object-cover w-full h-full border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
              <img src="/academy-assets/lumpat/Screenshot%202026-06-17%20at%2017.14.49.png" alt="Lumpat Web Preview 2" className="object-cover w-full h-full border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
              <img src="/academy-assets/lumpat/Screenshot%202026-06-17%20at%2017.14.03%201.png" alt="Lumpat Web Preview 3" className="object-cover w-full h-full border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
              <img src="/academy-assets/lumpat/WhatsApp%20Image%202026-06-12%20at%2021.44.23.jpeg" alt="Lumpat Timing Setup" className="object-cover w-full h-full border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
            </div>
          </div>
        );
      case "Hawa":
        return (
          <div className="flex flex-col gap-2 h-full w-full">
            <p className="font-mono text-[14px] font-bold border-b-2 border-[var(--color-navy)] mb-2">Dashboard & Singapore Showcase</p>
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
              <img src="/academy-assets/hawa/Screenshot%202026-06-17%20at%2017.16.38.png" alt="Hawa App Preview 1" className="object-cover w-full h-full border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
              <img src="/academy-assets/hawa/Screenshot%202026-06-17%20at%2017.17.45.png" alt="Hawa App Preview 2" className="object-cover w-full h-full border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
            </div>
            <div className="mt-2 bg-[var(--color-cream)] border-2 border-[var(--color-navy)] p-3 shadow-[4px_4px_0_0_var(--color-navy)]">
               <p className="font-bold text-[14px] leading-tight">🏆 Result: Our team was selected to present the project at the YDCT Global Summit in Singapore! 🇸🇬</p>
               <a href="https://www.linkedin.com/posts/muhammadaryakamal_climatetech-airquality-bandung-activity-7427930531532828672-zuWG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPzrBABMwHE4Lo-2hIwqFNUDNQMn1NHGlQ" target="_blank" rel="noreferrer" className="text-blue-600 underline text-xs mt-1 inline-block">View LinkedIn Post ↗</a>
            </div>
          </div>
        );
      case "Prenava":
        return (
          <div className="flex flex-col gap-2 h-full w-full">
            <p className="font-mono text-[14px] font-bold border-b-2 border-[var(--color-navy)] mb-2">Mobile App Screens</p>
            <div className="flex gap-4 flex-1 justify-center items-center min-h-0">
              <img src="/academy-assets/prenava/Screenshot%202026-06-17%20at%2017.19.54.png" alt="Prenava App 1" className="object-contain h-full max-h-[220px] border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
              <img src="/academy-assets/prenava/Screenshot%202026-06-17%20at%2017.23.06.png" alt="Prenava App 2" className="object-contain h-full max-h-[220px] border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
              <img src="/academy-assets/prenava/Screenshot%202026-06-17%20at%2017.25.26.png" alt="Prenava App 3" className="object-contain h-full max-h-[220px] border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)]" />
            </div>
            <div className="mt-2 bg-[var(--color-cream)] border-2 border-[var(--color-navy)] p-3 shadow-[4px_4px_0_0_var(--color-navy)] text-center">
               <p className="font-bold text-[16px]">🚀 The app is already up and available on the Google Playstore!</p>
            </div>
          </div>
        );
      case "Competition Maker":
        return (
          <div className="flex flex-col gap-2 h-full w-full">
            <p className="font-mono text-[14px] font-bold border-b-2 border-[var(--color-navy)] mb-2">EISD Hackathon 2025 Highlights</p>
            <div className="flex gap-4 flex-1 min-h-0">
               <div className="flex-1 bg-[var(--color-cream)] border-2 border-[var(--color-navy)] p-5 shadow-[4px_4px_0_0_var(--color-navy)] flex flex-col justify-center">
                  <h4 className="font-bold text-xl mb-1">ESD Laboratory</h4>
                  <p className="text-sm mb-4 border-b border-[var(--color-navy)] pb-2">Competition Division Coordinator (1 yr 2 mos)</p>
                  <div className="border-l-4 border-[var(--color-navy)] pl-4">
                    <p className="font-bold mb-1">Jan 2025 - Dec 2025</p>
                    <p className="italic text-sm">Created and organized the EISD Hackathon 2025</p>
                  </div>
               </div>
               <div className="flex-1 border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_var(--color-navy)] bg-zinc-900 flex items-center justify-center p-2 relative overflow-hidden">
                  <div className="text-center z-10 text-white p-4">
                    <p className="mb-3 font-bold text-lg">Hackathon Aftermovie</p>
                    <a href="https://www.instagram.com/eisdcompetition/reel/DS1gLTBAn-_/" target="_blank" rel="noreferrer" className="inline-block bg-white text-black px-4 py-2 font-bold border-2 border-black hover:bg-gray-200 transition">Watch Reel on Instagram ↗</a>
                  </div>
                  <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-600 to-orange-500"></div>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />
      
      <div className="absolute inset-0 z-[100] h-screen w-screen overflow-y-auto bg-[var(--color-canvas)] text-[var(--color-navy)] print:h-auto print:w-auto print:overflow-visible font-sans">
        <div className="mx-auto flex w-full flex-col items-center bg-[var(--color-canvas)] pb-20 print:bg-white print:pb-0">
          
          <div className="my-8 rounded-none border-2 border-[var(--color-navy)] bg-[var(--color-cream)] px-6 py-3 text-sm font-mono shadow-[4px_4px_0_0_var(--color-navy)] print:hidden">
            Press Cmd+P or Ctrl+P to Print/Save as PDF
          </div>

          {projects.map((project, index) => {
            const descStr = project.description || "";
            const whyMatch = descStr.match(/Why:\s*([\s\S]*?)(?=\n\nHow:|$)/);
            const howMatch = descStr.match(/How:\s*([\s\S]*?)(?=\n\nWhat:|$)/);
            const whatMatch = descStr.match(/What:\s*([\s\S]*?)$/);

            const why = whyMatch ? whyMatch[1].trim() : "";
            const how = howMatch ? howMatch[1].trim() : "";
            const what = whatMatch ? whatMatch[1].trim() : descStr;

            return (
              <section 
                key={project.name} 
                className="relative flex flex-col justify-between mb-12 w-[297mm] h-[210mm] border-2 border-[var(--color-navy)] bg-[var(--color-canvas)] p-12 shadow-[8px_8px_0_0_var(--color-navy)] print:mb-0 print:border-none print:shadow-none print:break-after-page print:p-12 box-border"
              >
                <div className="flex flex-1 gap-12 overflow-hidden">
                  
                  <div className="w-[28%] flex flex-col gap-6">
                    <div>
                      <h3 className="font-bold text-xl uppercase tracking-widest border-b-2 border-[var(--color-navy)] pb-2 mb-2">Artwork/Project Title</h3>
                      <p className="font-mono text-[16px]">{project.name}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl uppercase tracking-widest border-b-2 border-[var(--color-navy)] pb-2 mb-2">Year Accomplished</h3>
                      <p className="font-mono text-[16px]">{project.year}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl uppercase tracking-widest border-b-2 border-[var(--color-navy)] pb-2 mb-2">Role/Position</h3>
                      <p className="font-mono text-[16px]">
                         {project.name === "Lumpat" ? "CTO" : project.name === "Competition Maker" ? "Competition Division Coordinator" : "AI & Web Dev Engineer"}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl uppercase tracking-widest border-b-2 border-[var(--color-navy)] pb-2 mb-2">Publication Link</h3>
                      <a href={project.url} className="font-mono text-[14px] underline hover:bg-[var(--color-navy)] hover:text-[var(--color-canvas)] transition-colors break-words">
                        {project.url}
                      </a>
                    </div>
                  </div>

                  <div className="w-[72%] flex flex-col gap-6 overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between border-b-2 border-[var(--color-navy)] pb-2 mb-3">
                        <h3 className="font-bold text-xl uppercase tracking-widest">Artwork/Project Description</h3>
                        <span className="font-mono text-sm uppercase">Project {index + 1} of {projects.length}</span>
                      </div>
                      
                      <div className="font-mono text-[14px] leading-relaxed space-y-3 text-justify">
                         <p><strong className="bg-[var(--color-navy)] text-[var(--color-canvas)] px-2 py-1 mr-2 inline-block mb-1">Why</strong> {why}</p>
                         <p><strong className="bg-[var(--color-navy)] text-[var(--color-canvas)] px-2 py-1 mr-2 inline-block mb-1">How</strong> {how}</p>
                         <p><strong className="bg-[var(--color-navy)] text-[var(--color-canvas)] px-2 py-1 mr-2 inline-block mb-1">What</strong> {what}</p>
                      </div>
                    </div>

                    <div className="flex-1 mt-2 p-1 flex flex-col items-center justify-center min-h-0 overflow-hidden">
                      {getProjectMedia(project.name)}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-[var(--color-navy)] flex justify-between items-end font-mono text-sm leading-relaxed shrink-0">
                  <div className="w-[25%] pr-4">
                    <p className="font-bold mb-1 uppercase text-xs tracking-wider text-[var(--color-navy)]/80">Your name</p>
                    <p className="font-bold text-[14px]">Muhammad Arya Kamal.</p>
                  </div>
                  <div className="w-[35%] pr-4">
                    <p className="font-bold mb-1 uppercase text-xs tracking-wider text-[var(--color-navy)]/80">Your university/school name</p>
                    <p className="font-bold text-[13px]">(Student or Alumni)</p>
                    <p className="text-[13px]">final-year student at Telkom University</p>
                  </div>
                  <div className="w-[20%] pr-4">
                    <p className="font-bold mb-1 uppercase text-xs tracking-wider text-[var(--color-navy)]/80">Your contact information</p>
                    <p className="text-[13px]">Email: aryakaml24@gmail.com</p>
                  </div>
                  <div className="w-[20%] text-right flex flex-col items-end">
                    <p className="font-bold mb-1 uppercase text-xs tracking-wider text-[var(--color-navy)]/80">Portfolio Submission for</p>
                    <p className="font-bold text-[14px] max-w-[150px]">Apple Developer Academy Indonesia</p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
