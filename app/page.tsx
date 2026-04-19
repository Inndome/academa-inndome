export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* SIDEBAR */}
      <aside style={{
        width: "260px",
        borderRight: "1px solid #eee",
        padding: "40px"
      }}>
        <h3 style={{ color: "#003B4F", marginBottom: "20px" }}>
          Filtrar programas
        </h3>

        <input 
          placeholder="Buscar..." 
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "30px",
            border: "1px solid #ddd"
          }}
        />

        <p style={{ color: "#999", fontSize: "12px" }}>Categoría</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Energía</li>
          <li>Autoconsumo</li>
          <li>Ventas</li>
        </ul>
      </aside>

      {/* MAIN */}
      <main style={{ padding: "60px", flex: 1 }}>
        <h1 style={{ color: "#003B4F", fontSize: "36px" }}>
          Academia Inndome
        </h1>

        <p style={{ color: "#666", marginBottom: "40px" }}>
          Formación para instaladores que quieren crecer
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px"
        }}>
          
          <div>
            <h3>Ventas de energía</h3>
            <p>Aprende a captar y cerrar contratos</p>
          </div>

          <div>
            <h3>Autoconsumo</h3>
            <p>Fotovoltaica, excedentes y batería virtual</p>
          </div>

          <div>
            <h3>Operativa</h3>
            <p>Altas, incidencias y gestión completa</p>
          </div>

          <div>
            <h3>Jurídico energético</h3>
            <p>Normativa y contratos del sector</p>
          </div>

        </div>
      </main>

    </div>
  );
}
