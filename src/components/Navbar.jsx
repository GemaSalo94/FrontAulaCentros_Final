import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/Button";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Inicio */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700"
            >
              AulaCentros
            </Link>
          </div>

          {/* Navegación */}
          <div className="flex items-center gap-4">
            {isAuthenticated() ? (
              <>
                <Link
                  to="/aulas"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  Aulas
                </Link>
                <Link
                  to="/centros"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  Centros
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {user?.email}
                  </span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleLogout}
                    className="text-xs px-2 py-1 h-auto"
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};
