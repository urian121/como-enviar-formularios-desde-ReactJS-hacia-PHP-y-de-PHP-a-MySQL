const Formulario = ({
  handleSubmit,
  nombreRef,
  emailRef,
  telefonoRef,
  avatarRef,
}) => {
  return (
    <>
      <h3>
        Registrar amigo <hr />
      </h3>
      <form
        className="px-5"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            ref={nombreRef}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" ref={emailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Télefono</label>
          <input type="number" ref={telefonoRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileSm" className="form-label">
            Avatar
          </label>
          <input
            className="form-control form-control-sm"
            id="formFileSm"
            type="file"
            ref={avatarRef}
            required
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button type="submit" className="btn btn-primary">
            Registrar Amigo
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
