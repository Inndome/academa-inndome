import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f5f8f8] text-[#1f3a3a]">

      {/* SIDEBAR */}
      <aside className="w-[250px] border-r border-[#e4eeee] px-8 py-10">
        <p className="text-[13px] mb-4 text-[#4c6667]">
          Filtrar programas
        </p>

        <input
          placeholder="Buscar..."
          className="w-full border border-[#d9e3e3] px-3 py-2 mb-10 text-[13px]"
        />

        <p className="text-[12px] text-[#7b9697] mb-3">
          Categoría
        </p>

        <div className="space-y-2 text-[14px] text-[#2c4a4b]">
          <div>Energía</div>
          <div>Autoconsumo</div>
          <div>Ventas</div>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 flex justify-center">

        <div className="w-[1100px]">

          {/* HERO */}
          <div className="flex items-center justify-between pt-28 pb-24">

            {/* IMAGEN */}
            <div className="w-[460px] opacity-90">
              <Image
                src="/hero.png"
                alt="hero"
                width={460}
                height={460}
                className="object-contain"
              />
            </div>

            {/* TEXTO */}
            <div className="max-w-[420px]">

              <h1 className="text-[42px] font-light mb-4">
                Academia Inndome
              </h1>

              <p className="text-[15px] text-[#6f8c8d] mb-10">
                Formación para instaladores que quieren crecer
              </p>

              <div className="flex gap-12">
                {cat("Ventas")}
                {cat("Autoconsumo")}
                {cat("Operativa")}
                {cat("Jurídico")}
              </div>

            </div>

          </div>

          {/* LISTADO */}
          <div className="pb-20">

            <p className="text-[12px] text-[#6f8c8d] mb-6">
              Programas disponibles
            </p>

            {prog("Ventas de energía", "Aprende a captar y cerrar contratos")}
            {prog("Autoconsumo", "Fotovoltaica y excedentes")}
            {prog("Operativa", "Altas e incidencias")}
            {prog("Jurídico energético", "Normativa del sector")}

          </div>

        </div>

      </main>
    </div>
  );
}

function cat(text: string) {
  return (
    <div className="text-center">
      <div className="w-[48px] h-[48px] rounded-full bg-[#dfe7e7] mb-2 mx-auto" />
      <div className="text-[13px] text-[#4f6768]">
        {text}
      </div>
    </div>
  );
}

function prog(title: string, desc: string) {
  return (
    <div className="flex justify-between items-center py-5 border-t border-[#e4eeee]">

      <div>
        <div className="text-[14px] font-medium">
          {title}
        </div>
        <div className="text-[13px] text-[#6f8c8d]">
          {desc}
        </div>
      </div>

      <button className="border border-[#2c4a4b] px-4 py-1 text-[12px] hover:bg-[#2c4a4b] hover:text-white transition">
        Ver programa
      </button>

    </div>
  );
}
