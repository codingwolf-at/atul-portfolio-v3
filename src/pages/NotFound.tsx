import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center not-found-page">
      <div className="text-center">
        <img src="/skull.png" alt="404" className="w-60 h-60 animate-float mx-auto" />
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl mb-4 text-white">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Atul's Portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
