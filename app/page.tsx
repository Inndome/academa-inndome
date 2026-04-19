"use client";

import { Search, ChevronRight } from "lucide-react";

const programs = [
  {
    title: "Programa superior en Jurídico energético",
    desc: "Normativa, contratos y claves legales del mercado energético.",
  },
  {
    title: "Programa superior en Ventas de energía",
    desc: "Captación, argumentario y cierre de contratos.",
  },
  {
    title: "Programa superior en Autoconsumo",
    desc: "Fotovoltaica, excedentes y batería virtual.",
  },
  {
    title: "Programa superior en Operativa",
    desc: "Altas, incidencias y gestión completa.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex text-[#1F2937] font-sans">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r border-gray-200 px-10 py-12">
        <h2 className="text-[18px] font-medium text-[#003B4F] mb-10 tracking-tight">
          Filtrar programas
        </h2>

        <div className="relative mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            placeholder="Buscar programas"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#003B4F]"
          />
        </div>

        <div className="space-y-10 text-[14px]">
          <div>
            <p className="text-gray-400 uppercase tracking-[0.08em] text-[11px] mb-3">
              Categoría
            </p>
            <ul className="space-y-2">
              {["Todos", "Energía", "Autoconsumo", "Ventas"].map((item) => (
                <li key={item} className="cursor-pointer text-gray-600 hover:text-[#003B4F]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gray-400 uppercase tracking-[0.08em] text-[11px] mb-3">
              Nivel
            </p>
            <ul className="space-y-2">
              {["Básico", "Intermedio", "Avanzado"].map((item) => (
                <li key={item} className="cursor-pointer text-gray-600 hover:text-[#003B4F]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 px-16 py-14">

        <div className="mb-16">
          <h1 className="text-[42px] font-normal text-[#003B4F] mb-4 tracking-tight">
            Programas
          </h1>
          <p className="text-gray-400 max-w-xl text-[15px] leading-relaxed">
            Formación diseñada para instaladores que quieren crecer en el sector energético con una propuesta profesional y clara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-16">
          {programs.map((p, i) => (
            <div key={i}>
              <h3 className="text-[18px] font-medium text-[#003B4F] mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 text-[14px] mb-6 max-w-[320px]">
                {p.desc}
              </p>

              <button className="flex items-center text-[14px] text-[#003B4F] font-medium opacity-80 hover:opacity-100">
                Solicitar información
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
