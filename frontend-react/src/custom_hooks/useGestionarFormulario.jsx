import { useRef } from "react";
import axios from "axios";
import { toast } from "../toastConfig";

const useGestionarFormulario = (URL_API, amigos, setAmigos) => {
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
      setAmigos([nuevoAmigo, ...amigos]);

      limpiarFormulario();
    } catch (error) {
      console.error("Error al agregar amigo:", error);
    }
  };

  const limpiarFormulario = () => {
    nombreRef.current.value = "";
    emailRef.current.value = "";
    telefonoRef.current.value = "";
    avatarRef.current.value = "";
  };

  return { handleSubmit, nombreRef, emailRef, telefonoRef, avatarRef };
};

export default useGestionarFormulario;
