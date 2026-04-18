import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

export const Page404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-12">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Página no encontrada
          </p>
          <p className="text-gray-500 dark:text-gray-500 mb-8">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link to="/">
            <Button className="w-full">Volver al Inicio</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
