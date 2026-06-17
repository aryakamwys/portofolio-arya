import React from "react";
import projectsData from "../../data/projects.json";

export const metadata = {
  title: "Academy Portfolio - Muhammad Arya Kamal",
  description: "Portfolio submission for Apple Developer Academy",
};

export default function AcademyPortfolio() {
  const targetProjects = ["Lumpat", "Hawa", "Prenava"];
  const projects = projectsData.filter((p) => targetProjects.includes(p.name));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 0; /* Menghilangkan timestamp dan URL default dari browser */
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />
      
      <div className="absolute inset-0 z-[100] h-screen w-screen overflow-y-auto bg-[var(--color-canvas)] text-[var(--color-navy)] print:h-auto print:w-auto print:overflow-visible font-sans">
        <div className="mx-auto flex w-full flex-col items-center bg-[var(--color-canvas)] pb-20 print:bg-white print:pb-0">
          
          {/* Helper for screen only */}
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
                {/* Header/Main Content Split */}
                <div className="flex flex-1 gap-12 overflow-hidden">
                  
                  {/* Left Column: Details */}
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
                         {project.name === "Lumpat" ? "CTO" : "AI & Web Dev Engineer"}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl uppercase tracking-widest border-b-2 border-[var(--color-navy)] pb-2 mb-2">Publication Link</h3>
                      <a href={project.url} className="font-mono text-[15px] underline hover:bg-[var(--color-navy)] hover:text-[var(--color-canvas)] transition-colors break-words">
                        {project.url}
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Description & Media */}
                  <div className="w-[72%] flex flex-col gap-6 overflow-hidden">
                    <div>
                      <div className="flex items-center justify-between border-b-2 border-[var(--color-navy)] pb-2 mb-4">
                        <h3 className="font-bold text-xl uppercase tracking-widest">Artwork/Project Description</h3>
                        <span className="font-mono text-sm uppercase">Project {index + 1} of {projects.length}</span>
                      </div>
                      
                      <div className="font-mono text-[14px] leading-relaxed space-y-3 text-justify">
                         <p><strong className="bg-[var(--color-navy)] text-[var(--color-canvas)] px-2 py-1 mr-2 inline-block mb-1">Why</strong> {why}</p>
                         <p><strong className="bg-[var(--color-navy)] text-[var(--color-canvas)] px-2 py-1 mr-2 inline-block mb-1">How</strong> {how}</p>
                         <p><strong className="bg-[var(--color-navy)] text-[var(--color-canvas)] px-2 py-1 mr-2 inline-block mb-1">What</strong> {what}</p>
                      </div>
                    </div>

                    {/* Media Placeholders */}
                    <div className="flex-1 border-2 border-dashed border-[var(--color-navy)] bg-[var(--color-cream)]/30 p-4 flex flex-col items-center justify-center min-h-0">
                      <p className="font-mono text-[15px] text-[var(--color-navy)] text-center mb-2 font-bold">
                         [Insert Project Images / Screenshots Here]
                      </p>
                      <p className="font-mono text-[13px] text-[var(--color-navy)]/70 text-center max-w-md">
                         Add your final UI mockups and work-in-progress drafts here to complete the story.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t-2 border-[var(--color-navy)] flex justify-between items-end font-mono text-sm leading-relaxed shrink-0">
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
