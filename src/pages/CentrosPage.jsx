import { useEffect, useState } from "react";
import { centroService } from "../services/api";
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

export const CentrosPage = () => {
  const [centros, setCentros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    localidad: "",
  });

  // Cargar centros
  useEffect(() => {
    fetchCentros();
  }, []);

  const fetchCentros = async () => {
    try {
      setLoading(true);
      const data = await centroService.getAll();
      setCentros(data);
      setError("");
    } catch (err) {
      setError("Error al cargar centros: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Abrir modal para crear
  const handleCreateClick = () => {
    setEditingId(null);
    setFormData({ nombre: "", localidad: "" });
    setIsModalOpen(true);
  };

  // Abrir modal para editar
  const handleEditClick = (centro) => {
    setEditingId(centro.id);
    setFormData({
      nombre: centro.nombre || "",
      localidad: centro.localidad || "",
    });
    setIsModalOpen(true);
  };

  // Guardar centro (crear o editar)
  const handleSave = async () => {
    try {
      if (editingId) {
        await centroService.update(editingId, formData);
      } else {
        await centroService.create(formData);
      }
      setIsModalOpen(false);
      fetchCentros();
    } catch (err) {
      setError("Error al guardar: " + err.message);
    }
  };

  // Abrir modal de confirmación para eliminar
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  // Confirmar eliminación
  const handleConfirmDelete = async () => {
    try {
      await centroService.delete(deleteId);
      setIsDeleteModalOpen(false);
      setDeleteId(null);
      fetchCentros();
    } catch (err) {
      setError("Error al eliminar: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Cargando centros...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 gap-24">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Gestión de Centros
        </h1>
        <Button onClick={handleCreateClick}>Nuevo Centro</Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Tabla de centros */}
      <Card>
        <CardHeader>
          <CardTitle>Centros Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          {centros.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No hay centros registrados
              </p>
              <Button onClick={handleCreateClick}>Crear Primer Centro</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Nombre
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Localidad
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {centros.map((centro) => (
                    <tr
                      key={centro.id}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800"
                    >
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline">{centro.nombre}</Badge>
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">
                        {centro.localidad}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditClick(centro)}
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteClick(centro.id)}
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
              {editingId ? "Editar Centro" : "Crear Nuevo Centro"}
            </DialogTitle>
            <DialogDescription>
              {editingId
                ? "Actualiza los datos del centro"
                : "Completa los campos para crear un nuevo centro"}
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
                placeholder="Ej: IES Los Andes"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Localidad
              </label>
              <Input
                value={formData.localidad}
                onChange={(e) =>
                  setFormData({ ...formData, localidad: e.target.value })
                }
                placeholder="Ej: Madrid"
                className="mt-1"
              />
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

      {/* Modal de confirmación para eliminar */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="!text-white dark:!text-white">
              Confirmar Eliminación
            </DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar este centro? Esta acción no
              se puede deshacer.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
