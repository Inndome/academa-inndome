import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f8f8] text-[#1e3a3a]">

      {/* HEADER */}
      <header className="border-b border-[#e4eeee]">
        <div className="mx-auto w-[1120px] flex items-center justify-between py-6 text-[13px]">
          <div className="font-medium tracking-[0.4px]">Academia Inndome</div>

          <nav className="flex gap-12 text-[#5f7b7c]">
            <span className="hover:text-black cursor-pointer">Nosotros</span>
            <span className="hover:text-black cursor-pointer">Cursos</span>
            <span className="hover:text-black cursor-pointer">Programas</span>
            <span className="hover:text-black cursor-pointer">Contacto</span>
          </nav>

          <button className="border border-[#2c4a4b] px-4 py-1 text-[12px] hover:bg-[#2c4a4b] hover:text-white transition">
            Campus
          </button>
        </div>
      </header>

      {/* HERO */}
      <section>
        <div className="mx-auto w-[1120px] grid grid-cols-[600px_440px] gap-[80px] pt-[120px] pb-[100px] items-center">

          {/* VISUAL */}
          <div className="flex justify-center">
            <Image
              src="/hero.png"
              alt="hero"
              width={560}
              height={560}
              className="opacity-85 object-contain"
              priority
            />
          </div>

          {/* COPY */}
          <div>
            <h1 className="text-[56px] leading-[1.08] font-light tracking-tight mb-6">
              Fórmate para transformar tu negocio
            </h1>

            <p className="text-[16px] leading-[1.7] text-[#6f8c8d] mb-16 max-w-[420px]">
              Programas diseñados para profesionales del sector energético que quieren crecer, captar clientes y gestionar mejor su negocio.
            </p>

            {/* CATEGORÍAS (ligeras, no cards) */}
            <div className="flex gap-[56px]">
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
        <div className="mx-auto w-[1120px] pb-[110px]">
          <h2 className="text-[28px] font-light tracking-tight mb-12">
            Descubre nuestros programas superiores
          </h2>

          {prog("Programa superior en Jurídico energético", "Especialízate en normativa y contratos del sector energético")}
          {prog("Programa superior en Ventas", "Aprende a captar y cerrar contratos de forma efectiva")}
          {prog("Programa superior en Autoconsumo", "Fotovoltaica, excedentes y batería virtual")}
          {prog("Programa superior en Operativa", "Altas, incidencias y gestión completa")}
        </div>
      </section>

      {/* TESTIMONIO */}
      <section>
        <div className="mx-auto w-[1120px] grid grid-cols-[260px_1fr] gap-[80px] items-center pb-[110px]">
          <div className="w-[240px] h-[240px] bg-[#e2ebeb]" />

          <div>
            <h3 className="text-[26px] font-light leading-snug mb-6">
              Descubre cómo nuestros cursos impulsan el crecimiento profesional
            </h3>

            <p className="text-[15px] leading-[1.7] text-[#6f8c8d] mb-5">
              “Gracias a la formación he conseguido mejorar mi negocio y captar nuevos clientes.”
            </p>

            <p className="text-[13px] text-[#4f6768]">— Alumno Inndome</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-white">
        <div className="mx-auto w-[720px] text-center py-[110px]">
          <h3 className="text-[28px] font-light mb-6">
            Te mantenemos informado
          </h3>

          <p className="text-[#6f8c8d] text-[15px] mb-12">
            Déjanos tus datos y te contactaremos
          </p>

          <div className="grid grid-cols-3 gap-6">
            <input className="border border-[#d9e3e3] p-3 text-[14px] focus:outline-none focus:border-black transition" placeholder="Nombre" />
            <input className="border border-[#d9e3e3] p-3 text-[14px] focus:outline-none focus:border-black transition" placeholder="Email" />
            <input className="border border-[#d9e3e3] p-3 text-[14px] focus:outline-none focus:border-black transition" placeholder="Mensaje" />
          </div>

          <button className="mt-10 border border-[#2c4a4b] px-8 py-2 text-[13px] hover:bg-[#2c4a4b] hover:text-white transition">
            Enviar mensaje
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2f2f] text-white">
        <div className="mx-auto w-[1120px] flex justify-between py-[80px] text-[13px]">
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

/* COMPONENTES */

function cat(text: string) {
  return (
    <div className="text-center group cursor-pointer">
      <div className="w-[48px] h-[48px] rounded-full bg-[#dfe7e7] mb-3 mx-auto group-hover:bg-[#2c4a4b] transition" />
      <div className="text-[13px] text-[#5c7778] group-hover:text-black transition">
        {text}
      </div>
    </div>
  );
}

function prog(title: string, desc: string) {
  return (
    <div className="flex items-center justify-between py-[22px] border-t border-[#e4eeee] group">
      <div>
        <p className="text-[15px] font-medium group-hover:underline">
          {title}
        </p>
        <p className="text-[14px] text-[#6f8c8d]">
          {desc}
        </p>
      </div>

      <button className="border border-[#2c4a4b] px-4 py-[6px] text-[12px] group-hover:bg-[#2c4a4b] group-hover:text-white transition">
        Solicita información
      </button>
    </div>
  );
}
