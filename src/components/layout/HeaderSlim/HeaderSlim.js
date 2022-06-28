import React from "react";
import "./HeaderSlim.css";

const HeaderSlim = () => (
  <header className="it-header-slim-wrapper" data-testid="Header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="it-header-slim-wrapper-content">
            <p className="d-none d-lg-block navbar-brand">
              <a
                aria-label="Vai al sito del Dipartimento per la trasformazione digitale"
                href="https://innovazione.gov.it/dipartimento/"
              >
                <u>Dipartimento per la trasformazione digitale</u>
              </a>
              <span> &#38; </span>
              <a
                aria-label="Vai al sito dell'Istat"
                href="https://www.istat.it/"
              >
                <u>Istat</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

HeaderSlim.propTypes = {};

HeaderSlim.defaultProps = {};

export default HeaderSlim;
