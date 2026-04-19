export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1a2e2f" }}>

      {/* HEADER */}
      <div style={{
        padding: "20px 60px",
        borderBottom: "1px solid #eee",
        fontSize: "14px"
      }}>
        Academia Inndome
      </div>

      {/* HERO */}
      <div style={{
        display: "flex",
        padding: "80px 60px",
        alignItems: "center",
        gap: "60px"
      }}>

        {/* IZQUIERDA (SIMULACIÓN ESFERA) */}
        <div style={{
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#cfe3e4,#8fb8bb)",
        }} />

        {/* DERECHA TEXTO */}
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "38px", marginBottom: "20px" }}>
            Formación para instaladores
          </h1>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Programas diseñados para profesionales del sector energético
            que quieren crecer, captar clientes y gestionar mejor su negocio.
          </p>
        </div>

      </div>

      {/* CATEGORÍAS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        paddingBottom: "80px",
        borderBottom: "1px solid #eee"
      }}>
        {categoria("Ventas")}
        {categoria("Autoconsumo")}
        {categoria("Operativa")}
        {categoria("Jurídico")}
      </div>

      {/* PROGRAMAS */}
      <div style={{ padding: "80px 60px" }}>

        <h2 style={{ marginBottom: "40px" }}>
          Programas disponibles
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {programa("Ventas de energía", "Aprende a captar y cerrar contratos")}
          {programa("Autoconsumo", "Fotovoltaica y excedentes")}
          {programa("Operativa", "Altas e incidencias")}
          {programa("Jurídico energético", "Normativa del sector")}
        </div>

      </div>

    </div>
  );
}

/* COMPONENTE CATEGORÍA */
function categoria(texto: string) {
  return (
    <div style={{ textAlign: "center", cursor: "pointer" }}>
      <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#e6f0f1",
        margin: "0 auto 10px"
      }} />
      <p>{texto}</p>
    </div>
  );
}

/* COMPONENTE PROGRAMA */
function programa(titulo: string, desc: string) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #eee",
      paddingBottom: "20px"
    }}>
      <div>
        <h3 style={{ marginBottom: "5px" }}>{titulo}</h3>
        <p style={{ color: "#666" }}>{desc}</p>
      </div>

      <button style={{
        border: "1px solid #1a2e2f",
        background: "transparent",
        padding: "8px 16px",
        cursor: "pointer"
      }}>
        Ver programa
      </button>
    </div>
  );
}
