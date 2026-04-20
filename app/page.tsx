import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f8f8] text-[#1e3a3a]">
      {/* HEADER */}
      <header className="border-b border-[#edf3f3]">
        <div className="mx-auto w-[1120px] flex items-center justify-between py-6 text-[13px]">
          <div className="font-medium tracking-[0.3px]">Academia Inndome</div>

          <nav className="flex gap-12 text-[#6f8c8d]">
            <span className="cursor-pointer transition hover:text-[#1e3a3a]">
              Nosotros
            </span>
            <span className="cursor-pointer transition hover:text-[#1e3a3a]">
              Cursos
            </span>
            <span className="cursor-pointer transition hover:text-[#1e3a3a]">
              Programas
            </span>
            <span className="cursor-pointer transition hover:text-[#1e3a3a]">
              Contacto
            </span>
          </nav>

          <button className="border border-[#2c4a4b] px-5 py-[6px] text-[12px] tracking-[0.4px] transition hover:bg-[#2c4a4b] hover:text-white">
            Campus
          </button>
        </div>
      </header>

      {/* HERO */}
      <section>
        <div className="mx-auto grid w-[1120px] grid-cols-[600px_440px] items-center gap-[100px] pt-[140px] pb-[120px]">
          {/* IMAGEN */}
          <div className="flex justify-center">
            <Image
              src="/hero.png"
              alt="Hero"
              width={540}
              height={540}
              priority
              className="object-contain opacity-90"
            />
          </div>

          {/* TEXTO */}
          <div className="pl-[20px]">
            <h1 className="mb-6 text-[56px] font-light leading-[1.06] tracking-[-0.02em] text-[#1f3a3a]">
              Fórmate para transformar tu negocio
            </h1>

            <p className="mb-16 max-w-[420px] text-[16px] leading-[1.75] text-[#7f9a9b]">
              Programas diseñados para profesionales del sector energético que
              quieren crecer, captar clientes y gestionar mejor su negocio.
            </p>

            <div className="flex gap-16">
              {cat("Ventas")}
              {cat("Autoconsumo")}
              {cat("Operativa")}
              {cat("Jurídico")}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section>
        <div className="mx-auto w-[1120px] pb-[130px]">
          <h2 className="mb-14 text-[28px] font-light tracking-[-0.01em] text-[#1f3a3a]">
            Descubre nuestros programas superiores
          </h2>

          {prog(
            "Programa superior en Jurídico energético",
            "Especialízate en normativa y contratos del sector energético"
          )}
          {prog(
            "Programa superior en Ventas",
            "Aprende a captar y cerrar contratos de forma efectiva"
          )}
          {prog(
            "Programa superior en Autoconsumo",
            "Fotovoltaica y excedentes y batería virtual"
          )}
          {prog(
            "Programa superior en Operativa",
            "Altas, incidencias y gestión completa"
          )}
        </div>
      </section>

      {/* TESTIMONIO */}
      <section>
        <div className="mx-auto grid w-[1120px] grid-cols-[260px_1fr] items-center gap-[90px] pb-[130px]">
          <div className="h-[240px] w-[240px] bg-[#e7efef]" />

          <div>
            <h3 className="mb-6 text-[26px] font-light leading-[1.2] tracking-[-0.01em] text-[#1f3a3a]">
              Descubre cómo nuestros cursos impulsan el crecimiento profesional
            </h3>

            <p className="mb-5 max-w-[560px] text-[15px] leading-[1.75] text-[#7f9a9b]">
              “Gracias a la formación he conseguido mejorar mi negocio y captar
              nuevos clientes.”
            </p>

            <p className="text-[13px] text-[#5c7778]">— Alumno Inndome</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-white">
        <div className="mx-auto w-[760px] py-[120px] text-center">
          <h3 className="mb-6 text-[28px] font-light tracking-[-0.01em] text-[#1f3a3a]">
            Te mantenemos informado
          </h3>

          <p className="mb-12 text-[15px] text-[#7f9a9b]">
            Déjanos tus datos y te contactaremos
          </p>

          <div className="grid grid-cols-3 gap-6">
            <input
              className="border border-[#e2ebeb] bg-white p-3 text-[14px] text-[#1f3a3a] transition focus:border-[#2c4a4b] focus:outline-none"
              placeholder="Nombre"
            />
            <input
              className="border border-[#e2ebeb] bg-white p-3 text-[14px] text-[#1f3a3a] transition focus:border-[#2c4a4b] focus:outline-none"
              placeholder="Email"
            />
            <input
              className="border border-[#e2ebeb] bg-white p-3 text-[14px] text-[#1f3a3a] transition focus:border-[#2c4a4b] focus:outline-none"
              placeholder="Mensaje"
            />
          </div>

          <button className="mt-10 border border-[#2c4a4b] px-8 py-[8px] text-[13px] tracking-[0.4px] transition hover:bg-[#2c4a4b] hover:text-white">
            Enviar mensaje
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#123535] text-white">
        <div className="mx-auto flex w-[1120px] justify-between py-[80px] text-[13px]">
          <div>
            <p className="mb-3 font-medium">Academia Inndome</p>
            <p>Barcelona</p>
            <p>info@inndome.com</p>
          </div>

          <div>
            <p className="mb-3 font-medium">Links</p>
            <p>Contacto</p>
            <p>Legal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function cat(text: string) {
  return (
    <div className="group cursor-pointer text-center">
      <div className="mx-auto mb-3 h-[50px] w-[50px] rounded-full bg-[#dfe7e7] transition duration-300 group-hover:bg-[#2c4a4b]" />
      <div className="text-[13px] text-[#5c7778] transition group-hover:text-[#1f3a3a]">
        {text}
      </div>
    </div>
  );
}

function prog(title: string, desc: string) {
  return (
    <div className="group flex items-center justify-between border-t border-[#edf3f3] py-6 transition duration-300 hover:translate-x-[4px]">
      <div>
        <p className="text-[15px] font-medium text-[#1f3a3a] group-hover:underline">
          {title}
        </p>
        <p className="text-[14px] text-[#7f9a9b]">{desc}</p>
      </div>

      <button className="border border-[#2c4a4b] px-5 py-[5px] text-[12px] tracking-[0.5px] transition hover:bg-[#2c4a4b] hover:text-white">
        Solicita información
      </button>
    </div>
  );
}
