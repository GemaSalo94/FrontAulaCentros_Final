import { useEffect, useState } from "react";
import { aulaService, centroService } from "../services/api";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/Dialog";
import { Input } from "../components/ui/Input";
import { Trash2, Edit2, Plus } from "lucide-react";

export const AulasPage = () => {
  const [aulas, setAulas] = useState([]);
  const [centros, setCentros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    numeroAula: "",
    esAulaOrdenadores: false,
    centro: null,
  });

  // Cargar aulas y centros
  useEffect(() => {
    fetchAulas();
    fetchCentros();
  }, []);

  const fetchCentros = async () => {
    try {
      const data = await centroService.getAll();
      setCentros(data);
    } catch (err) {
      console.error("Error al cargar centros:", err);
    }
  };

  const fetchAulas = async () => {
    try {
      setLoading(true);
      const data = await aulaService.getAll();
      setAulas(data);
      setError("");
    } catch (err) {
      setError("Error al cargar aulas: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Abrir modal para crear
  const handleCreateClick = () => {
    setEditingId(null);
    setFormData({
      nombre: "",
      numeroAula: "",
      esAulaOrdenadores: false,
      centro: null,
    });
    setIsModalOpen(true);
  };

  // Abrir modal para editar
  const handleEditClick = (aula) => {
    setEditingId(aula.id);
    setFormData({
      nombre: aula.nombre || "",
      numeroAula: aula.numeroAula || "",
      esAulaOrdenadores: aula.esAulaOrdenadores || false,
      centro: aula.centro || null,
    });
    setIsModalOpen(true);
  };

  // Guardar aula (crear o editar)
  const handleSave = async () => {
    try {
      if (editingId) {
        await aulaService.update(editingId, formData);
      } else {
        await aulaService.create(formData);
      }
      setIsModalOpen(false);
      fetchAulas();
    } catch (err) {
      setError("Error al guardar: " + err.message);
    }
  };

  // Eliminar aula con confirmación
  const handleDeleteClick = async (id) => {
    if (
      window.confirm(
        "¿Estás seguro de que deseas eliminar esta aula? Esta acción no se puede deshacer.",
      )
    ) {
      try {
        await aulaService.delete(id);
        fetchAulas();
      } catch (err) {
        setError("Error al eliminar: " + err.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Cargando aulas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Gestión de Aulas
        </h1>
        <Button onClick={handleCreateClick}>Nueva Aula</Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Tabla de aulas */}
      <Card>
        <CardHeader>
          <CardTitle>Aulas Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          {aulas.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No hay aulas registradas
              </p>
              <Button onClick={handleCreateClick}>Crear Primera Aula</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Nombre
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Número Aula
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      🖥️
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Centro
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aulas.map((aula) => (
                    <tr
                      key={aula.id}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800"
                    >
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline">{aula.nombre}</Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                        {aula.numeroAula}
                      </td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                        {aula.esAulaOrdenadores ? "Sí" : "No"}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">
                        {aula.centro?.nombre || "-"}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditClick(aula)}
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteClick(aula.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal para crear/editar */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="!text-white dark:!text-white">
              {editingId ? "Editar Aula" : "Crear Nueva Aula"}
            </DialogTitle>
            <DialogDescription>
              {editingId
                ? "Actualiza los datos del aula"
                : "Completa los campos para crear una nueva aula"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre
              </label>
              <Input
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                placeholder="Ej: Aula de Informática"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Número Aula
              </label>
              <Input
                value={formData.numeroAula}
                onChange={(e) =>
                  setFormData({ ...formData, numeroAula: e.target.value })
                }
                placeholder="Ej: 101"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.esAulaOrdenadores}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      esAulaOrdenadores: e.target.checked,
                    })
                  }
                  className="w-4 h-4"
                />
                Es Aula de Ordenadores
              </label>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Centro
              </label>
              <select
                value={formData.centro?.id || ""}
                onChange={(e) => {
                  const selectedCentro = centros.find(
                    (c) => c.id === parseInt(e.target.value),
                  );
                  setFormData({ ...formData, centro: selectedCentro || null });
                }}
                className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
              >
                <option value="">Selecciona un centro</option>
                {centros.map((centro) => (
                  <option key={centro.id} value={centro.id}>
                    {centro.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>
              {editingId ? "Actualizar" : "Crear"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
