import { useEffect, useState } from "react";
import axios from "axios";

const useApiAmigos = (url) => {
  const [amigos, setAmigos] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerAmigos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setAmigos(response.data);
    } catch (error) {
      console.log("Error al obtener amigos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerAmigos();
  }, [url]);

  return { amigos, setAmigos, loading, obtenerAmigos };
};

export default useApiAmigos;
