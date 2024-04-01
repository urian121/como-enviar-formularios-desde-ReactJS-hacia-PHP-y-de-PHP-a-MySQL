import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "./toastConfig";

import "./assets/styles/App.css";
import Formulario from "./components/Formulario";
import ListaDeAmigos from "./components/ListaDeAmigos";
import Titulo from "./components/Titulo";

function App() {
  const [amigos, setAmigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL_API =
    "http://localhost/como-enviar-un-formulario-desde-reactjs-hacia-php/backend-php/";

  const nombreRef = useRef(null);
  const emailRef = useRef(null);
  const telefonoRef = useRef(null);
  const avatarRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nombre: nombreRef.current.value,
      email: emailRef.current.value,
      telefono: telefonoRef.current.value,
      avatar: avatarRef.current.files[0],
    };

    try {
      const response = await axios.post(URL_API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Amigo registrado correctamente.");

      const nuevoAmigo = response.data;
      console.log("Nuevo amigo:", nuevoAmigo);

      // Agregamos el nuevo amigo a la lista de amigos
      // setAmigos([...amigos, nuevoAmigo]);
      // Para mostrar el nuvo registro al inicio de la lista de amigos
      setAmigos([nuevoAmigo, ...amigos]);

      limpiarFormulario();
    } catch (error) {
      console.error("Error al agregar amigo:", error);
    }
  };

  /**
   * Funcion para limpiar el formulario
   */
  const limpiarFormulario = () => {
    nombreRef.current.value = "";
    emailRef.current.value = "";
    telefonoRef.current.value = "";
    avatarRef.current.value = "";
  };

  /**
   * Lista de amigos
   */
  useEffect(() => {
    const obtenerAmigos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(URL_API);
        setAmigos(response.data);
      } catch (error) {
        console.log("Error al obtener amigos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerAmigos();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">Cargando...</div>
      </div>
    );
  }
  return (
    <>
      <ToastContainer />
      <div className="row justify-content-md-center">
        <Titulo />
        <div className="col-md-5">
          <Formulario
            handleSubmit={handleSubmit}
            nombreRef={nombreRef}
            emailRef={emailRef}
            telefonoRef={telefonoRef}
            avatarRef={avatarRef}
          />
        </div>
        <div className="col-md-7">
          {amigos.length > 0 ? (
            <ListaDeAmigos amigos={amigos} URL_API={URL_API} />
          ) : (
            <p>No hay amigos registrados.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
