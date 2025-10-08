import { FaLightbulb, FaTools, FaBrain, FaSync, FaUsers, FaRocket } from "react-icons/fa";

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Soft Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Autodidacta */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
            <FaLightbulb className="text-yellow-400 text-2xl" />
            <span>Autodidacta y aprendizaje rápido</span>
          </div>

          {/* Resolución de problemas */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
            <FaTools className="text-blue-400 text-2xl" />
            <span>Resolución de problemas</span>
          </div>

          {/* Persistencia */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
            <FaBrain className="text-purple-400 text-2xl" />
            <span>Persistencia y disciplina</span>
          </div>

          {/* Adaptabilidad */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
            <FaSync className="text-green-400 text-2xl" />
            <span>Adaptabilidad y mejora continua</span>
          </div>

          {/* Trabajo en equipo */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
            <FaUsers className="text-pink-400 text-2xl" />
            <span>Trabajo en equipo y colaboración</span>
          </div>

          {/* Creatividad */}
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md">
            <FaRocket className="text-red-400 text-2xl" />
            <span>Creatividad e innovación</span>
          </div>
        </div>
      </div>
    </section>
  );
}
