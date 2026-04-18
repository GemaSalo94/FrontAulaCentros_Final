import React from "react";

// Recibimos las funciones y estados del padre como argumentos (Props)
export default function FormularioAula({
  crearAula,
  centros,
  centroSeleccionado,
  setCentroSeleccionado,
  numeroAula,
  setNumeroAula,
  comentarios,
  setComentarios,
  esAulaOrdenadores,
  setEsAulaOrdenadores,
}) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Añadir nueva aula</h2>
      <form
        onSubmit={crearAula}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {/* Desplegable de Centros */}
        <div>
          <label style={{ color: "black", fontWeight: "bold" }}>
            Centro Educativo:{" "}
          </label>
          <select
            value={centroSeleccionado}
            onChange={(e) => setCentroSeleccionado(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              color: "black",
              backgroundColor: "white",
            }}
            required
          >
            <option value="">Elige un Centro Educativo</option>
            {centros.map((centro) => (
              <option key={centro.id} value={centro.id}>
                {centro.nombre} ({centro.localidad})
              </option>
            ))}
          </select>
        </div>

        {/* Número de Aula */}
        <div>
          <label style={{ color: "black", fontWeight: "bold" }}>
            Número de Aula:{" "}
          </label>
          <input
            type="number"
            value={numeroAula}
            onChange={(e) => setNumeroAula(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              color: "black",
              backgroundColor: "white",
            }}
          />
        </div>

        {/* Comentarios */}
        <div>
          <label style={{ color: "black", fontWeight: "bold" }}>
            Comentario:{" "}
          </label>
          <input
            type="text"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              color: "black",
              backgroundColor: "white",
            }}
          />
        </div>

        {/* Checkbox */}
        <div>
          <label style={{ color: "black", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={esAulaOrdenadores}
              onChange={(e) => setEsAulaOrdenadores(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            ¿Es aula de ordenadores?
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#2863a7",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1em",
            marginTop: "10px",
          }}
        >
          Crear Aula
        </button>
      </form>
    </div>
  );
}
