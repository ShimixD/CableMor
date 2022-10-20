export default function Canal({ canal }) {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {canal.map(infoCanal => {
                return (
                    <a className="col" href={"/canales" + infoCanal.url} key={infoCanal.nombre}>
                        <div className="card text-bg-dark mb-3 h-100" style={{ backgroundColor: "#161618"}}>
                            <img src={"/images/canales/" + infoCanal.imagen} alt="" className="card-img-top img-fluid"/>

                            <div className="card-body">
                                <h1 className="card-title">{infoCanal.nombre}</h1>
                                <p className="card-text">{infoCanal.descripcion}</p>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}