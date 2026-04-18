import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated()) {
    navigate("/aulas");
    return null;
  }

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold !text-white mb-8">
          Bienvenid@ a tu portal de gestión de aulas
        </h1>

        <Button variant="green" onClick={handleLogin}>
          Inicia sesión
        </Button>
      </div>
    </div>
  );
};
