import { getAuthHeaders, getToken } from "../utils/tokenUtils";

const API_BASE_URL = "http://localhost:8080";

// Funciones de autenticación
export const authService = {
  login: async (email, password) => {
    const url = `${API_BASE_URL}/auth/login`;
    const payload = { email, password };

    console.log("[Login] ===== INICIO LOGIN =====");
    console.log("[Login] URL:", url);
    console.log("[Login] Email enviado:", email);
    console.log("[Login] Password enviado:", password);
    console.log("[Login] Payload completo:", JSON.stringify(payload));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("[Login] Status recibido:", response.status);
    console.log("[Login] Content-Type:", response.headers.get("content-type"));

    // Intentar parsear JSON solo si hay contenido
    let data = null;
    try {
      const text = await response.text();
      console.log("[Login] Respuesta cruda:", text || "(vacía)");
      if (text) {
        data = JSON.parse(text);
        console.log("[Login] Datos parseados:", data);
      }
    } catch (err) {
      console.error("[Login] Error parsing JSON:", err);
      if (!response.ok) {
        throw new Error("Error en el login");
      }
    }

    if (!response.ok) {
      console.error("[Login] ===== ERROR =====");
      console.error("[Login] Status:", response.status);
      console.error("[Login] Data:", data);

      // Mensajes de error específicos por status
      if (response.status === 401) {
        throw new Error("Email o contraseña incorrectos");
      } else if (response.status === 404) {
        throw new Error("El usuario no existe");
      } else if (response.status === 500) {
        throw new Error("Error del servidor. Intenta más tarde");
      }

      throw new Error(data?.error || `Error en el login (${response.status})`);
    }

    console.log("[Login] ===== ÉXITO =====");
    return data;
  },

  register: async (nombre, apellidos, email, password) => {
    const url = `${API_BASE_URL}/auth/register`;
    const payload = { nombre, apellidos, email, password };

    console.log("[Register] ===== INICIO REGISTRO =====");
    console.log("[Register] URL:", url);
    console.log("[Register] Nombre:", nombre);
    console.log("[Register] Apellidos:", apellidos);
    console.log("[Register] Email:", email);
    console.log("[Register] Password:", password);
    console.log("[Register] Payload completo:", JSON.stringify(payload));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("[Register] Status recibido:", response.status);
    console.log(
      "[Register] Content-Type:",
      response.headers.get("content-type"),
    );

    // Intentar parsear JSON solo si hay contenido
    let data = null;
    try {
      const text = await response.text();
      console.log("[Register] Respuesta cruda:", text || "(vacía)");
      if (text) {
        data = JSON.parse(text);
        console.log("[Register] Datos parseados:", data);
      }
    } catch (err) {
      console.error("[Register] Error parsing JSON:", err);
      if (!response.ok) {
        throw new Error("Error en el registro");
      }
    }

    if (!response.ok) {
      console.error("[Register] ===== ERROR =====");
      console.error("[Register] Status:", response.status);
      console.error("[Register] Data:", data);
      throw new Error(
        data?.error || `Error en el registro (${response.status})`,
      );
    }

    console.log("[Register] ===== ÉXITO =====");
    return data;
  },
};

// Funciones para Aulas
export const aulaService = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/aulas`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Error al obtener aulas");
    }

    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/aulas/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Error al obtener aula");
    }

    return await response.json();
  },

  create: async (aulaData) => {
    const response = await fetch(`${API_BASE_URL}/api/aulas`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(aulaData),
    });

    if (!response.ok) {
      throw new Error("Error al crear aula");
    }

    return await response.json();
  },

  update: async (id, aulaData) => {
    const response = await fetch(`${API_BASE_URL}/api/aulas/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(aulaData),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar aula");
    }

    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/aulas/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Error al eliminar aula");
    }

    return await response.json();
  },
};

// Funciones para Centros
export const centroService = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/api/centros`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Error al obtener centros");
    }

    return await response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/centros/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Error al obtener centro");
    }

    return await response.json();
  },

  create: async (centroData) => {
    const response = await fetch(`${API_BASE_URL}/api/centros`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(centroData),
    });

    if (!response.ok) {
      throw new Error("Error al crear centro");
    }

    return await response.json();
  },

  update: async (id, centroData) => {
    const response = await fetch(`${API_BASE_URL}/api/centros/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(centroData),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar centro");
    }

    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/centros/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Error al eliminar centro");
    }

    return await response.json();
  },
};
