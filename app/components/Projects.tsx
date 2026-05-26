import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tech: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "StudentOS 2.0 — Collaborative Student Operating System",
    description: "A comprehensive student management and real-time collaboration platform built with Next.js and TypeScript. Features real-time multi-user document collaboration, course management, task scheduling, JWT-based secure sessions, and a beautifully interactive, high-performance workspace dashboard.",
    link: "https://student-os-2-0.vercel.app",
    github: "https://github.com/rajkumar0932/StudentOS-2.0",
    image: "/projects/project-1.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Zustand", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Doctor Appointment Booking Web App (Prescripto)",
    description: "A production-grade, full-stack MERN application enabling seamless patient discovery, secure online appointments, and clinic/doctor availability scheduling. Features safe JWT authentication with role-based access control, a sleek admin analytics panel, integrated payment solutions, and a fully mobile-responsive UI.",
    link: "https://practofrontend-rho.vercel.app",
    github: "https://github.com/rajkumar0932/Prescripto---Doctor-Appointment-Booking-Platform",
    image: "/projects/project-2.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    id: 3,
    title: "Video Hosting Backend (YouTube Clone Service)",
    description: "A highly scalable video hosting service engineered with 35+ fully-featured REST APIs supporting user channels, media streaming, playlists, comments, likes, subscriptions, and tweets. Integrates custom MongoDB aggregation pipelines for watch history, channel analytics, Multer/Cloudinary media pipelines, and dual-token JWT security.",
    github: "https://github.com/rajkumar0932",
    image: "/projects/project-3.png",
    tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "Multer", "Mongoose"],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-white/60 text-center mb-16 text-lg">
          A collection of scalable full-stack web applications and services I&apos;ve engineered
        </p>
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-sans tracking-tight">
                    {project.title}
                  </h3>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Links */}
                  <div className="flex gap-5 items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
                        aria-label="View source on GitHub"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
                        aria-label="Visit live project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl border border-white/5">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
