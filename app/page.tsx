export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <aside style={{ width: "250px", padding: "20px", borderRight: "1px solid #eee" }}>
        <h3>Filtrar programas</h3>

        <input
          placeholder="Buscar..."
          style={{ width: "100%", padding: "8px", marginTop: "10px" }}
        />

        <p style={{ marginTop: "20px" }}>Categoría</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Energía</li>
          <li>Autoconsumo</li>
          <li>Ventas</li>
        </ul>
      </aside>

      <main style={{ padding: "40px", flex: 1 }}>
        <h1>Academia Inndome</h1>
        <p>Formación para instaladores que quieren crecer</p>

        <div style={{ marginTop: "30px" }}>
          <h3>Ventas de energía</h3>
          <p>Aprende a captar y cerrar contratos</p>

          <h3>Autoconsumo</h3>
          <p>Fotovoltaica, excedentes y batería virtual</p>

          <h3>Operativa</h3>
          <p>Altas, incidencias y gestión completa</p>

          <h3>Jurídico energético</h3>
          <p>Normativa y contratos del sector</p>
        </div>
      </main>

    </div>
  );
}
