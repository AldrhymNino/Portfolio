export default function Skills() {
  const skills = [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true, // 👈 este será blanco
    },
    {
      name: "Testing (Jest)",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
  ]

  return (
    <section id="skills" className="py-16 px-6 bg-background text-center">
      <h2 className="text-3xl font-bold mb-12 text-primary">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-gray-700 shadow-md hover:shadow-lg hover:border-primary hover:scale-105 transition"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className={`w-12 h-12 object-contain ${
                skill.invert ? "invert" : ""
              }`}
            />
            <span className="text-text font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}