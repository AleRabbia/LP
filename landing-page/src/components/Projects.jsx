import "./Projects.css";

function Projects() {
  return (
    <section className="container my-5" id="projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-title">Proyecto 1</h3>
            <p className="card-text">Descripción breve del proyecto...</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h3 className="card-title">Proyecto 2</h3>
            <p className="card-text">Descripción breve del proyecto...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
