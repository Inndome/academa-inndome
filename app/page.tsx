export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>

      {/* SIDEBAR */}
      <aside style={{
        width: "260px",
        padding: "25px",
        borderRight: "1px solid #eee",
        background: "#fafafa"
      }}>
        <h3 style={{ marginBottom: "20px" }}>Filtrar programas</h3>

        <input
          placeholder="Buscar..."
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px"
          }}
        />

        <p style={{ marginTop: "20px" }}>Categoría</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Energía</li>
          <li>Autoconsumo</li>
          <li>Ventas</li>
        </ul>
      </aside>

      {/* CONTENIDO */}
      <main style={{ flex: 1, padding: "50px" }}>

        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Academia Inndome
        </h1>

        <p style={{ color: "#666", marginBottom: "40px" }}>
          Formación para instaladores que quieren crecer
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px"
        }}>

          <div style={card}>
            <h3>Ventas de energía</h3>
            <p>Aprende a captar y cerrar contratos</p>
          </div>

          <div style={card}>
            <h3>Autoconsumo</h3>
            <p>Fotovoltaica, excedentes y batería virtual</p>
          </div>

          <div style={card}>
            <h3>Operativa</h3>
            <p>Altas, incidencias y gestión completa</p>
          </div>

          <div style={card}>
            <h3>Jurídico energético</h3>
            <p>Normativa y contratos del sector</p>
          </div>

        </div>

      </main>
    </div>
  );
}

const card = {
  padding: "20px",
  border: "1px solid #eee",
  borderRadius: "8px",
  background: "#fff"
};
