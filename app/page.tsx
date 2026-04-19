export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f7f9f9",
      color: "#243b3b",
      display: "flex"
    }}>

      {/* SIDEBAR IZQUIERDA */}
      <div style={{
        width: "260px",
        padding: "40px 30px",
        borderRight: "1px solid #e6eeee",
        minHeight: "100vh"
      }}>

        <p style={{ fontSize: "14px", marginBottom: "10px" }}>
          Filtrar programas
        </p>

        <input
          placeholder="Buscar..."
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ddd",
            marginBottom: "30px"
          }}
        />

        <p style={{ fontSize: "13px", color: "#6b8485" }}>
          Categoría
        </p>

        <div style={{ marginTop: "10px", lineHeight: "2" }}>
          <div>Energía</div>
          <div>Autoconsumo</div>
          <div>Ventas</div>
        </div>

      </div>

      {/* CONTENIDO */}
      <div style={{ flex: 1 }}>

        {/* HERO */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "80px",
          padding: "100px"
        }}>

          <div style={{
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "#8faeb1"
          }} />

          <div>
            <h1 style={{
              fontSize: "38px",
              fontWeight: "400",
              marginBottom: "15px"
            }}>
              Academia Inndome
            </h1>

            <p style={{
              fontSize: "15px",
              color: "#5e7374",
              maxWidth: "420px"
            }}>
              Formación para instaladores que quieren crecer
            </p>

            {/* ICONOS */}
            <div style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px"
            }}>
              {cat("Ventas")}
              {cat("Autoconsumo")}
              {cat("Operativa")}
              {cat("Jurídico")}
            </div>

          </div>

        </div>

        {/* LISTADO */}
        <div style={{ padding: "0 100px 80px" }}>

          <p style={{
            fontSize: "13px",
            marginBottom: "20px",
            color: "#5e7374"
          }}>
            Programas disponibles
          </p>

          {prog("Ventas de energía", "Aprende a captar y cerrar contratos")}
          {prog("Autoconsumo", "Fotovoltaica y excedentes")}
          {prog("Operativa", "Altas e incidencias")}
          {prog("Jurídico energético", "Normativa del sector")}

        </div>

      </div>
    </div>
  );
}

function cat(text: string) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#d8e2e3",
        marginBottom: "8px"
      }} />
      <div style={{ fontSize: "12px" }}>{text}</div>
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
      borderTop: "1px solid #e6eeee"
    }}>
      <div>
        <div style={{ fontWeight: "500" }}>{title}</div>
        <div style={{
          fontSize: "13px",
          color: "#6b8485"
        }}>
          {desc}
        </div>
      </div>

      <button style={{
        border: "1px solid #2e4a4b",
        background: "transparent",
        padding: "6px 12px",
        fontSize: "12px"
      }}>
        Ver programa
      </button>
    </div>
  );
}
