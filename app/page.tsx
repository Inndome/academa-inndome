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

        <div className="space-y-2 text-sm">
          <div>Energía</div>
          <div>Autoconsumo</div>
          <div>Ventas</div>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 flex items-center justify-center">

        <div className="flex items-center gap-20">

          {/* CÍRCULO (ARREGLADO) */}
          <div className="w-[260px] h-[260px] rounded-full bg-[#8faeb1]" />

          {/* TEXTO */}
          <div className="max-w-[420px]">

            <h1 className="text-[42px] font-light mb-4">
              Academia Inndome
            </h1>

            <p className="text-[15px] text-[#6b8485] mb-10">
              Formación para instaladores que quieren crecer
            </p>

            <div className="flex gap-10">
              {cat("Ventas")}
              {cat("Autoconsumo")}
              {cat("Operativa")}
              {cat("Jurídico")}
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

function cat(text: string) {
  return (
    <div className="text-center">
      <div className="w-[45px] h-[45px] rounded-full bg-[#d8e2e3] mb-2 mx-auto" />
      <div className="text-xs">{text}</div>
    </div>
  );
}
