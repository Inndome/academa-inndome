export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f7f9f9",
      color: "#243b3b"
    }}>

      {/* HERO GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        alignItems: "center",
        padding: "120px 100px",
        gap: "60px"
      }}>

        {/* CÍRCULO */}
        <div style={{
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "#8faeb1",
          marginLeft: "40px"
        }} />

        {/* TEXTO */}
        <div>
          <h1 style={{
            fontSize: "38px",
            fontWeight: "500",
            marginBottom: "15px"
          }}>
            Formación para instaladores
          </h1>

          <p style={{
            color: "#5e7374",
            lineHeight: "1.6",
            maxWidth: "420px"
          }}>
            Programas diseñados para profesionales del sector energético que quieren crecer, captar clientes y gestionar mejor su negocio.
          </p>
        </div>

      </div>

      {/* ICONOS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "60px",
        marginBottom: "80px"
      }}>
        {cat("Ventas")}
        {cat("Autoconsumo")}
        {cat("Operativa")}
        {cat("Jurídico")}
      </div>

      {/* LISTADO */}
      <div style={{
        padding: "0 100px 100px"
      }}>

        <p style={{
          marginBottom: "30px",
          fontSize: "14px",
          color: "#4a6061"
        }}>
          Programas disponibles
        </p>

        {prog("Ventas de energía", "Aprende a captar y cerrar contratos")}
        {prog("Autoconsumo", "Fotovoltaica y excedentes")}
        {prog("Operativa", "Altas e incidencias")}
        {prog("Jurídico energético", "Normativa del sector")}

      </div>

    </div>
  );
}

function cat(text: string) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#d8e2e3",
        marginBottom: "10px"
      }} />
      <span style={{ fontSize: "13px", color: "#516a6b" }}>{text}</span>
    </div>
  );
}

function prog(title: string, desc: string) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      borderTop: "1px solid #e3ecec"
    }}>
      <div>
        <strong style={{ fontWeight: "500" }}>{title}</strong>
        <p style={{ fontSize: "13px", color: "#6b8485" }}>{desc}</p>
      </div>

      <button style={{
        border: "1px solid #2e4a4b",
        background: "transparent",
        padding: "6px 14px",
        fontSize: "12px"
      }}>
        Ver programa
      </button>
    </div>
  );
}
