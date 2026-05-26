import Image from "next/image";

const skills = [
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "React.js", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "Express.js", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Firebase", category: "Tools" },
  { name: "DSA", category: "CS Fundamentals" },
  { name: "OOPs", category: "CS Fundamentals" },
  { name: "DBMS", category: "CS Fundamentals" },
  { name: "Operating Systems", category: "CS Fundamentals" },
  { name: "Computer Networks", category: "CS Fundamentals" },
  { name: "Competitive Programming", category: "CS Fundamentals" },
];

const categoryColors: Record<string, string> = {
  "Languages": "border-purple-500/40 text-purple-300 bg-purple-500/10",
  "Web": "border-blue-500/40 text-blue-300 bg-blue-500/10",
  "Databases": "border-orange-500/40 text-orange-300 bg-orange-500/10",
  "Tools": "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
  "CS Fundamentals": "border-yellow-500/40 text-yellow-300 bg-yellow-500/10",
};

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* About Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl max-w-4xl mx-auto text-white/80 leading-relaxed mb-6">
            I&apos;m <span className="text-purple-400 font-semibold">Raj Kumar Gupta</span>, a passionate Full Stack Developer and{" "}
            <span className="text-purple-400">Competitive Programmer</span> pursuing Electronics and Communication Engineering at{" "}
            <span className="text-white font-semibold">National Institute of Technology Agartala</span> (Batch of 2027).
          </p>
          <div className="text-lg max-w-4xl mx-auto text-white/70 space-y-4 leading-relaxed">
            <p>
              I love building end-to-end web applications — from crafting intuitive UIs to designing scalable backend systems.
              My competitive programming background gives me a robust algorithmic foundation, which I apply when architecting efficient and high-performance software solutions.
            </p>
            <p>
              I am an active open-source contributor, having recently contributed to <span className="text-purple-400 font-medium">pyodide/pyodide</span> (17k+ stars) where I successfully resolved documentation tooling challenges. In competitive coding, I have systematically mastered over 1600+ DSA problems across platforms like Codeforces and LeetCode.
            </p>
          </div>
        </div>

        {/* Education & Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Education Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-200">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              🎓 Education
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-purple-300">NIT Agartala</h4>
                  <span className="text-sm text-white/60">2023 - 2027</span>
                </div>
                <p className="text-white/80">B.Tech in Electronics and Communication Engineering</p>
                <p className="text-purple-400 font-semibold text-sm mt-1">CGPA: 8.34 / 10</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-purple-300">Sainik School Gopalganj</h4>
                  <span className="text-sm text-white/60">2021 - 2022</span>
                </div>
                <p className="text-white/80">Senior Secondary (XII - CBSE)</p>
                <p className="text-purple-400 font-semibold text-sm mt-1">Percentage: 92.80%</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-purple-300">Sainik School Gopalganj</h4>
                  <span className="text-sm text-white/60">2019 - 2020</span>
                </div>
                <p className="text-white/80">Secondary (X - CBSE)</p>
                <p className="text-purple-400 font-semibold text-sm mt-1">Percentage: 93.60%</p>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-200">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              🏆 Coding Ranks & Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/80">LeetCode Profile</span>
                <span className="text-purple-300 font-semibold">Knight (Max Rating: 1920)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/80">Codeforces Profile</span>
                <span className="text-purple-300 font-semibold">Specialist (Max Rating: 1445)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/80">LeetCode Weekly 441</span>
                <span className="text-purple-300 font-semibold">AIR 285</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/80">LeetCode Weekly 475</span>
                <span className="text-purple-300 font-semibold">AIR 390</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/80">CodeChef Starters 138 (Div 3)</span>
                <span className="text-purple-300 font-semibold">Global Rank 72</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-white/80">CodeFest’25 Prelims (IICPC)</span>
                <span className="text-purple-300 font-semibold">Rank 1220 (out of 45k+)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Tech Stack & Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-105 ${categoryColors[skill.category]}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Illustration */}
        <div className="flex justify-center">
          <Image
            src="/assets/illustration.png"
            alt="Raj Kumar Gupta Tech Skills"
            width={900}
            height={500}
            className="object-cover mx-auto rounded-2xl"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "DSA & CP Solved", value: "1600+" },
            { label: "Codeforces Specialist", value: "1445 Max" },
            { label: "LeetCode Knight", value: "1920 Max" },
            { label: "NIT ECE CGPA", value: "8.34 / 10" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200"
            >
              <p className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
