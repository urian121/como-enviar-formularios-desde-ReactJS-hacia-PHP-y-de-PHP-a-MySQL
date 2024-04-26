import "../assets/styles/lista_amigos.css";

const ListaDeAmigos = ({ amigos, URL_API }) => {
  return (
    <>
      <h3>
        Lista de amigos <hr />
      </h3>
      <>
        <ul className="user-list contenedor_amigos">
          {amigos &&
            amigos.map((amigo) => (
              <li key={amigo.id} className="user-item">
                <img
                  src={`${URL_API}fotos_amigos/${amigo.avatar}`}
                  alt={amigo.nombre}
                  className="user-avatar"
                />
                <div className="user-details">
                  <p className="user-details__name float-start">{amigo.nombre}</p>
                  <p className="user-details__email">{amigo.email}</p>
                </div>
              </li>
            ))}
        </ul>
      </>
    </>
  );
};

export default ListaDeAmigos;
