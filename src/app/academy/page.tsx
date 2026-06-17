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
    <div className="absolute inset-0 z-[100] h-screen w-screen overflow-y-auto bg-white print:h-auto print:w-auto print:overflow-visible font-sans">
      <div className="mx-auto flex w-full max-w-3xl flex-col bg-gray-100 shadow-2xl print:shadow-none print:max-w-none">
        {/* Intro Slide */}
        <section className="flex h-screen flex-col items-center justify-center bg-zinc-900 p-8 text-white print:h-[297mm] print:w-[210mm] print:break-after-page">
          <h1 className="text-4xl font-bold mb-4 text-center">Portfolio Submission</h1>
          <h2 className="text-2xl text-gray-300">Apple Developer Academy Indonesia</h2>
          <div className="mt-12 text-center">
            <p className="text-lg">Muhammad Arya Kamal</p>
            <p className="text-gray-400">Telkom University</p>
            <p className="text-gray-400">aryakaml24@gmail.com</p>
          </div>
          <div className="mt-16 border border-gray-600 px-6 py-3 rounded-full text-sm">
            Press Cmd+P or Ctrl+P to Print/Save as PDF
          </div>
        </section>

        {projects.map((project, index) => {
          // Parse Why-How-What from description
          const descStr = project.description || "";
          const whyMatch = descStr.match(/Why:\s*(.*?)(?=\n\nHow:|$)/s);
          const howMatch = descStr.match(/How:\s*(.*?)(?=\n\nWhat:|$)/s);
          const whatMatch = descStr.match(/What:\s*(.*?)$/s);

          const why = whyMatch ? whyMatch[1].trim() : "";
          const how = howMatch ? howMatch[1].trim() : "";
          const what = whatMatch ? whatMatch[1].trim() : descStr;

          return (
            <React.Fragment key={project.name}>
              {/* Slide 1: Highlight Your Role */}
              <section className="relative flex h-screen flex-col bg-purple-600 p-8 pt-16 print:h-[297mm] print:w-[210mm] print:break-after-page">
                <div className="mb-8">
                  <p className="text-sm font-medium text-purple-100">Apple Developer Academy Indonesia</p>
                </div>
                
                <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm self-start">
                  <h2 className="text-4xl font-bold text-white">Highlight Your Role</h2>
                </div>
                <p className="mb-8 max-w-lg text-xl font-medium text-white leading-relaxed">
                  Group work or individual, explain your contribution clearly. Your goal is to show how you think and build.
                </p>

                <div className="flex-1 rounded-3xl bg-white/20 p-8 pt-12 backdrop-blur-sm border border-white/30 relative">
                   <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-white/50"></div>
                   <div className="space-y-8 pl-8 relative">
                     <div className="relative">
                       <div className="absolute -left-10 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-white shadow-[0_0_0_4px_rgba(168,85,247,0.5)]"></div>
                       <h3 className="text-xl font-bold text-white">Artwork/Project Title</h3>
                       <p className="text-purple-100 text-lg italic">{project.name}</p>
                     </div>
                     <div className="relative">
                       <h3 className="text-xl font-bold text-white">Year Accomplished</h3>
                       <p className="text-purple-100 text-lg italic">{project.year}</p>
                     </div>
                     <div className="relative">
                       <div className="absolute -left-10 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-white shadow-[0_0_0_4px_rgba(168,85,247,0.5)]"></div>
                       <h3 className="text-xl font-bold text-white">Role/Position</h3>
                       <p className="text-purple-100 text-lg italic">
                          {project.name === "Lumpat" ? "CTO" : "AI & Web Dev Engineer"}
                       </p>
                     </div>
                     <div className="relative">
                       <h3 className="text-xl font-bold text-white">Publication Link</h3>
                       <a href={project.url} className="text-purple-100 text-lg italic underline hover:text-white transition">
                         {project.url}
                       </a>
                     </div>
                   </div>
                </div>
                
                <div className="mt-8 flex justify-center space-x-2">
                  <span className="text-white/50 font-mono text-sm">Project {index + 1} of {projects.length}</span>
                </div>
              </section>

              {/* Slide 2: Tell Your Story Clearly */}
              <section className="relative flex h-screen flex-col bg-indigo-500 p-8 pt-16 print:h-[297mm] print:w-[210mm] print:break-after-page">
                <div className="mb-8">
                  <p className="text-sm font-medium text-indigo-100">Apple Developer Academy Indonesia</p>
                </div>
                
                <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm self-start">
                  <h2 className="text-4xl font-bold text-white">Tell Your Story Clearly</h2>
                </div>
                <div className="mb-8 max-w-lg text-xl font-medium text-white leading-relaxed space-y-2">
                  <p>Use this thinking process:</p>
                  <p className="font-bold text-2xl">Why - How - What</p>
                  <p className="pt-2 text-lg">Your portfolio is a journey that reflects your expertise. Present it with confidence and clarity.</p>
                </div>

                <div className="flex-1 rounded-3xl bg-white/20 p-8 pt-12 backdrop-blur-sm border border-white/30 relative">
                   <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-white/50"></div>
                   <div className="pl-8 relative h-full flex flex-col">
                     <div className="absolute -left-10 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-white shadow-[0_0_0_4px_rgba(99,102,241,0.5)]"></div>
                     <h3 className="text-xl font-bold text-indigo-100 mb-6">Project Description</h3>
                     
                     <div className="space-y-6 text-white text-lg overflow-y-auto pr-4 pb-4">
                       <div>
                         <strong className="block text-xl text-white mb-1">Why</strong>
                         <p className="text-indigo-50 leading-relaxed">{why}</p>
                       </div>
                       <div>
                         <strong className="block text-xl text-white mb-1">How</strong>
                         <p className="text-indigo-50 leading-relaxed">{how}</p>
                       </div>
                       <div>
                         <strong className="block text-xl text-white mb-1">What</strong>
                         <p className="text-indigo-50 leading-relaxed">{what}</p>
                       </div>
                     </div>
                   </div>
                </div>
              </section>

              {/* Slide 3: Work in progress */}
              <section className="relative flex h-screen flex-col bg-sky-500 p-8 pt-16 print:h-[297mm] print:w-[210mm] print:break-after-page">
                <div className="mb-8">
                  <p className="text-sm font-medium text-sky-100">Apple Developer Academy Indonesia</p>
                </div>
                
                <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm self-start">
                  <h2 className="text-4xl font-bold text-white">Work in progress</h2>
                </div>
                <div className="mb-8 max-w-lg text-xl font-medium text-white leading-relaxed space-y-2">
                  <p>Show ideas, drafts, and experiments.</p>
                  <p className="font-bold text-2xl">It doesn't need to be perfect.</p>
                </div>

                <div className="flex-1 rounded-3xl bg-white/20 p-8 pt-12 backdrop-blur-sm border border-white/30 relative flex flex-col">
                   <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-white/50"></div>
                   <div className="pl-8 relative flex-1 flex flex-col">
                     <div className="absolute -left-10 top-2 h-3 w-3 -translate-x-[5px] rounded-full bg-white shadow-[0_0_0_4px_rgba(14,165,233,0.5)]"></div>
                     <h3 className="text-xl font-bold text-sky-100 mb-4">Currently, the project is in progress...</h3>
                     <p className="text-sky-50 leading-relaxed mb-8">
                       (Insert pictures, screenshots, architectural drafts, terminal outputs, or code snippets here to show your work process for <strong>{project.name}</strong>)
                     </p>
                     <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center">
                           <span className="text-white/50">Image Placeholder</span>
                        </div>
                        <div className="bg-white/10 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center">
                           <span className="text-white/50">Image Placeholder</span>
                        </div>
                     </div>
                   </div>
                </div>
              </section>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
