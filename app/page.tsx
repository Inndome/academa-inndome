export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      color: "#1f3a3b",
      background: "#f9fbfb"
    }}>

      {/* HERO */}
      <div style={{
        display: "flex",
        padding: "120px 80px",
        alignItems: "center",
        gap: "80px"
      }}>

        {/* ESFERA */}
        <div style={{
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #cfe5e6, #7ea9ad)"
        }} />

        {/* TEXTO */}
        <div style={{ maxWidth: "520px" }}>
          <h1 style={{
            fontSize: "42px",
            fontWeight: "500",
            marginBottom: "20px"
          }}>
            Formación para instaladores
          </h1>

          <p style={{
            color: "#5f7a7b",
            lineHeight: "1.7"
          }}>
            Programas diseñados para profesionales del sector energético
            que quieren crecer, captar clientes y gestionar mejor su negocio.
          </p>
        </div>

      </div>

      {/* CATEGORÍAS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "70px",
        paddingBottom: "100px"
      }}>
        {cat("Ventas")}
        {cat("Autoconsumo")}
        {cat("Operativa")}
        {cat("Jurídico")}
      </div>

      {/* PROGRAMAS */}
      <div style={{
        padding: "100px 80px",
        borderTop: "1px solid #e6eeee"
      }}>

        <h2 style={{
          fontSize: "20px",
          marginBottom: "50px",
          color: "#2f4f50"
        }}>
          Programas disponibles
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>

          {prog("Ventas de energía", "Aprende a captar y cerrar contratos")}
          {prog("Autoconsumo", "Fotovoltaica y excedentes")}
          {prog("Operativa", "Altas e incidencias")}
          {prog("Jurídico energético", "Normativa del sector")}

        </div>

      </div>

    </div>
  );
}

/* CATEGORÍAS */
function cat(text: string) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#dfe9ea",
        marginBottom: "12px"
      }} />
      <p style={{ fontSize: "14px", color: "#4b6667" }}>{text}</p>
    </div>
  );
}

/* PROGRAMAS */
function prog(title: string, desc: string) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #e6eeee",
      paddingBottom: "20px"
    }}>
      <div>
        <h3 style={{
          fontWeight: "500",
          marginBottom: "5px"
        }}>
          {title}
        </h3>

        <p style={{
          color: "#6f8a8b",
          fontSize: "14px"
        }}>
          {desc}
        </p>
      </div>

      <button style={{
        border: "1px solid #2f4f50",
        background: "transparent",
        padding: "8px 18px",
        fontSize: "13px",
        cursor: "pointer"
      }}>
        Ver programa
      </button>
    </div>
  );
}
