import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center"
    >
      <h2 className="text-4xl font-bold text-slate-100 mb-6">Contacto</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-8">
        Si te interesa mi trabajo o simplemente quieres conversar sobre
        tecnología, puedes escribirme. ¡Estoy abierto a nuevas oportunidades y
        colaboraciones! 🚀
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://www.linkedin.com/in/aldrhym-ni%C3%B1o-877743218"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white rounded-xl shadow-lg transition cursor-pointer"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>

        <a
          href="https://github.com/AldrhymNino"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl shadow-lg transition cursor-pointer"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>

        <a
          href="https://wa.me/573018915454"
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg transition cursor-pointer"
        >
          <Phone className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </section>
  );
}