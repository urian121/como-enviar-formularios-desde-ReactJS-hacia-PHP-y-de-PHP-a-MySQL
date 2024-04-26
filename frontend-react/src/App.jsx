import "./assets/styles/App.css";
import Formulario from "./components/Formulario";
import ListaDeAmigos from "./components/ListaDeAmigos";
import Loader from "./components/Loader";
import Titulo from "./components/Titulo";

import { ToastContainer } from "./toastConfig";

// Mis custom hooks
import useObtenerAmigos from "./custom_hooks/useObtenerAmigos";
import useGestionarFormulario from "./custom_hooks/useGestionarFormulario";

function App() {
  const URL_API =
    "http://localhost/como-enviar-formularios-desde-ReactJS-hacia-PHP-y-de-PHP-a-MySQL/backend-php/";

  const { amigos, setAmigos, loading } = useObtenerAmigos(URL_API);
  const { handleSubmit, nombreRef, emailRef, telefonoRef, avatarRef } =
    useGestionarFormulario(URL_API, amigos, setAmigos);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer />
      <div className="row justify-content-md-center">
        <Titulo />
        <div className="col-md-5 mb-5">
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
