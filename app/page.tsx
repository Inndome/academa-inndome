import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#f5f7f6] text-[#2f4f4f]">
      
      {/* SIDEBAR */}
      <aside className="w-[260px] border-r border-gray-200 px-6 py-10 bg-white">
        <h3 className="text-sm text-gray-500 mb-6">Filtrar programas</h3>

        <input
          type="text"
          placeholder="Buscar..."
          className="w-full border border-gray-300 px-3 py-2 text-sm mb-10 outline-none"
        />

        <h4 className="text-sm text-gray-500 mb-4">Categoría</h4>
        <ul className="space-y-3 text-[15px]">
          <li className="cursor-pointer hover:underline">Energía</li>
          <li className="cursor-pointer hover:underline">Autoconsumo</li>
          <li className="cursor-pointer hover:underline">Ventas</li>
        </ul>
      </aside>

      {/* CONTENIDO */}
      <section className="flex-1 px-16 py-12">

        {/* HERO */}
        <div className="flex items-center justify-between">

          {/* IMAGEN */}
          <div className="w-[520px] h-[520px] flex items-center justify-center">
            <Image
              src="/globe.svg"
              alt="Globo"
              width={520}
              height={520}
              priority
            />
          </div>

          {/* TEXTO */}
          <div className="max-w-[520px]">
            <h1 className="text-[64px] leading-[1.1] font-medium mb-6">
              Fórmate para transformar tu negocio
            </h1>

            <p className="text-gray-500 text-[18px] leading-relaxed mb-10">
              Programas diseñados para profesionales del sector energético que quieren crecer, captar clientes y gestionar mejor su negocio.
            </p>

            {/* ICONOS */}
            <div className="flex gap-12">
              {["Ventas", "Autoconsumo", "Operativa", "Jurídico"].map((item) => (
                <div key={item} className="flex flex-col items-center text-sm text-gray-500">
                  <div className="w-[60px] h-[60px] bg-gray-200 rounded-full mb-2"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LISTADO */}
        <div className="mt-24">
          <h2 className="text-[36px] mb-10">
            Descubre nuestros programas superiores
          </h2>

          <div className="space-y-10">
            {[
              {
                title: "Programa superior en Jurídico energético",
                desc: "Especialízate en normativa y contratos del sector energético",
              },
              {
                title: "Programa superior en Ventas",
                desc: "Aprende a captar y cerrar contratos de forma efectiva",
              },
              {
                title: "Programa superior en Autoconsumo",
                desc: "Fotovoltaica, excedentes y batería virtual",
              },
              {
                title: "Programa superior en Operativa",
                desc: "Altas, incidencias y gestión completa",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-gray-200 pb-6"
              >
                <div>
                  <h3 className="text-[18px] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>

                <button className="border border-[#2f4f4f] px-5 py-2 text-sm hover:bg-[#2f4f4f] hover:text-white transition">
                  Solicita información
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="mt-32 text-center">
          <h2 className="text-[32px] mb-4">Te mantenemos informado</h2>
          <p className="text-gray-500 mb-10">
            Déjanos tus datos y te contactaremos
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <input
              placeholder="Nombre"
              className="border px-4 py-3 w-[240px]"
            />
            <input
              placeholder="Email"
              className="border px-4 py-3 w-[240px]"
            />
            <input
              placeholder="Teléfono"
              className="border px-4 py-3 w-[240px]"
            />
          </div>

          <button className="border border-[#2f4f4f] px-8 py-3 hover:bg-[#2f4f4f] hover:text-white transition">
            Enviar mensaje
          </button>
        </div>

      </section>
    </main>
  );
}
