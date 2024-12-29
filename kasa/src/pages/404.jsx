import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page-404">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p>
        <Link to="/" className="back-to-home">
          {" "}
          Retourner a la page d'acccueil
        </Link>
      </p>
    </div>
  );
};
export default Page404;
