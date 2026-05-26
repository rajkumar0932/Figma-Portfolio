import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  role: string;
  description: string;
  tech: string[];
  link: string;
  type: "project" | "education" | "open-source";
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "pyodide/pyodide (17k+ Stars)",
    role: "Open Source Contributor",
    description: "Contributed to Pyodide, a Python runtime in WebAssembly. Resolved issue #6085 by creating and submitting PR #6142, which updated Vite bundler documentation to ensure seamless integration and usage for developers.",
    tech: ["Vite", "Python", "WebAssembly", "Git", "GitHub"],
    link: "https://github.com/pyodide/pyodide",
    type: "open-source",
  },
  {
    id: 2,
    title: "Video Hosting Backend (Scalable Service)",
    role: "Backend Engineer",
    description: "Engineered a high-performance YouTube-like backend supporting media hosting, playlists, tweets, channels, and social interactions. Implemented secure dual-token JWT authentication, Multer/Cloudinary media pipelines, and complex MongoDB aggregation pipelines for watch history.",
    tech: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "Multer"],
    link: "https://github.com/rajkumar0932",
    type: "project",
  },
  {
    id: 3,
    title: "Doctor Appointment Booking (Prescripto)",
    role: "Full Stack Developer",
    description: "Built a full-featured booking platform with role-based access control for Patients, Doctors, and Admins. Developed responsive React frontends, secure JWT-based authentication, appointment scheduling pipelines, and admin analytics dashboards.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://practofrontend-rho.vercel.app",
    type: "project",
  },
  {
    id: 4,
    title: "AI Interview Coach",
    role: "Full Stack Developer",
    description: "Developed an intelligent interview preparation web platform offering personalized DSA, System Design, and behavioral practice questions. Integrated OpenAI API for real-time interview performance feedback and progress analytics tracking.",
    tech: ["React.js", "Node.js", "Express.js", "OpenAI API", "JavaScript"],
    link: "https://github.com/rajkumar0932/Ai-Interview-Coach",
    type: "project",
  },
];

const typeColors = {
  project: "from-purple-950/40 via-slate-950/80 to-slate-950",
  "open-source": "from-cyan-950/40 via-slate-950/80 to-slate-950",
  education: "from-blue-950/40 via-slate-950/80 to-slate-950",
};

const typeBorderColors = {
  project: "border-purple-500/50",
  "open-source": "border-cyan-500/50",
  education: "border-blue-500/50",
};

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Projects & Experience
        </h2>
        <p className="text-white/60 text-center mb-12 text-lg">My engineering contributions and full-stack building blocks</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className={`bg-gradient-to-r ${typeColors[card.type]} backdrop-blur-sm rounded-xl p-6 border border-white/10 border-t-3 ${typeBorderColors[card.type]} hover:shadow-2xl hover:shadow-purple-950/50 transition-all duration-300 flex flex-col gap-3`}
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">
                    {card.title}
                  </h3>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                    card.type === "open-source" 
                      ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30" 
                      : "bg-purple-500/10 text-purple-300 border-purple-500/30"
                  }`}>
                    {card.type}
                  </span>
                </div>
                <p className="text-purple-400 text-sm font-semibold mb-3">{card.role}</p>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {card.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 text-white/70 text-xs px-3 py-1 rounded-full border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block mt-auto"
              >
                VIEW DETAILS →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
