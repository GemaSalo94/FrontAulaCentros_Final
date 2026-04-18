import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AulasPage } from "./pages/AulasPage";
import { CentrosPage } from "./pages/CentrosPage";
import { Page404 } from "./pages/Page404";
import "./App.css";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas protegidas */}
          <Route
            path="/aulas"
            element={
              <ProtectedRoute>
                <AulasPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/centros"
            element={
              <ProtectedRoute>
                <CentrosPage />
              </ProtectedRoute>
            }
          />

          {/* Ruta 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
