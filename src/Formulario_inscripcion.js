import React from "react";

function Formulario_inscripcion(){
    return (
        <div>
            <div class="col-md-4">
                <form>
                    <h1>Formulario inscripcion</h1>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="name" className="form-control" placeholder="Enter name" />
                    </div>

                    <div className="form-group">
                        <label>Surname</label>
                        <input type="surname" className="form-control" placeholder="Enter surname" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Formulario_inscripcion;
