export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>

      {/* SIDEBAR */}
      <aside style={{
        width: "260px",
        padding: "25px",
        borderRight: "1px solid #eee",
        background: "#fafafa"
      }}>
        <h3 style={{ marginBottom: "20px", color: "#0f3d3e" }}>Filtrar programas</h3>

        <input
          placeholder="Buscar..."
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "25px"
          }}
        />

        <div>
          <p style={{ color: "#999", fontSize: "13px" }}>Categoría</p>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            <li style={item}>Energía</li>
            <li style={item}>Autoconsumo</li>
            <li style={item}>Ventas</li>
          </ul>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main style={{ flex: 1, padding: "50px" }}>

        <h1 style={{
          fontSize: "42px",
          marginBottom: "10px",
          color: "#0f3d3e"
        }}>
          Academia Inndome
        </h1>

        <p style={{
          color: "#666",
          marginBottom: "40px",
          fontSize: "18px"
        }}>
          Formación para instaladores que quieren crecer
        </p>

        {/* GRID TARJETAS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px"
        }}>

          {card("Ventas de energía", "Aprende a captar y cerrar contratos")}
          {card("Autoconsumo", "Fotovoltaica, excedentes y batería virtual")}
          {card("Operativa", "Altas, incidencias y gestión completa")}
          {card("Jurídico energético", "Normativa y contratos del sector")}

        </div>

      </main>
    </div>
  );
}

/* ESTILO ITEMS SIDEBAR */
const item = {
  padding: "8px 0",
  cursor: "pointer",
  color: "#333"
};

/* COMPONENTE TARJETA */
function card(title: string, desc: string) {
  return (
    <div style={{
      padding: "25px",
      border: "1px solid #eee",
      borderRadius: "10px",
      background: "white",
      transition: "0.2s",
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      cursor: "pointer"
    }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.03)";
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#0f3d3e" }}>{title}</h3>
      <p style={{ color: "#666", lineHeight: "1.5" }}>{desc}</p>
    </div>
  );
}
