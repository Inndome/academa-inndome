export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f7f9f9] text-[#243b3b]">

      {/* SIDEBAR */}
      <aside className="w-[260px] border-r border-[#e6eeee] px-8 py-10">

        <p className="text-sm mb-3">Filtrar programas</p>

        <input
          placeholder="Buscar..."
          className="w-full border border-gray-300 px-2 py-2 mb-8 text-sm"
        />

        <p className="text-xs text-[#6b8485] mb-2">Categoría</p>

        <div className="space-y-2 text-sm text-[#243b3b]">
          <div>Energía</div>
          <div>Autoconsumo</div>
          <div>Ventas</div>
        </div>

      </aside>

      {/* CONTENIDO */}
      <main className="flex-1">

        {/* HERO */}
        <div className="flex items-center justify-between px-28 py-32">

          {/* CÍRCULO */}
          <div className="w-[380px] h-[380px] rounded-full bg-[#8faeb1]" />

          {/* TEXTO */}
          <div className="max-w-[500px]">

            <h1 className="text-[44px] font-light tracking-tight mb-4">
              Academia Inndome
            </h1>

            <p className="text-[16px] text-[#6b8485] mb-10 leading-relaxed">
              Formación para instaladores que quieren crecer
            </p>

            {/* ICONOS */}
            <div className="flex gap-12">
              {cat("Ventas")}
              {cat("Autoconsumo")}
              {cat("Operativa")}
              {cat("Jurídico")}
            </div>

          </div>

        </div>

        {/* LISTADO */}
        <div className="px-28 pb-24">

          <p className="text-xs text-[#5e7374] mb-6">
            Programas disponibles
          </p>

          {prog("Ventas de energía", "Aprende a captar y cerrar contratos")}
          {prog("Autoconsumo", "Fotovoltaica y excedentes")}
          {prog("Operativa", "Altas e incidencias")}
          {prog("Jurídico energético", "Normativa del sector")}

        </div>

      </main>
    </div>
  );
}

function cat(text: string) {
  return (
    <div className="text-center">
      <div className="w-[55px] h-[55px] rounded-full bg-[#d8e2e3] mb-3 mx-auto" />
      <div className="text-[13px] text-[#4f6768]">{text}</div>
    </div>
  );
}

function prog(title: string, desc: string) {
  return (
    <div className="flex justify-between items-center py-6 border-t border-[#e6eeee]">

      <div>
        <div className="font-medium text-[15px]">{title}</div>
        <div className="text-[13px] text-[#6b8485]">
          {desc}
        </div>
      </div>

      <button className="border border-[#2e4a4b] px-4 py-1 text-[12px] hover:bg-[#2e4a4b] hover:text-white transition">
        Ver programa
      </button>

    </div>
  );
}
