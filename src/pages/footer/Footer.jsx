import React from "react";
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="container liens">
                <div className="row">
                    <article className="col-md-4">
                        <h3>Clément Masclet</h3>
                        <address>
                            183 Rue du général Bonnier <br />
                            97430 Le Tampon, La Réunion <br />
                            <a href="tel:+262692400232">06.92.40.02.32</a><br />
                            <a href="mailto:masclet.c@gmail.com">masclet.c@gmail.com</a>
                        </address>
                    </article>
                    <article className="col-md-4">
                        <h3>Liens utiles</h3>
                        <Link to="/">Accueil</Link>
                        <Link to="/">Mes réalisations</Link>
                        <Link to="/contact">Me contacter</Link>
                    </article>
                    <article className="col-md-4">
                        <h3>Mes réalisations</h3>
                        <Link to="/">Réalisations</Link>
                        <Link to="/">Réalisations</Link>
                        <Link to="/">Réalisations</Link>
                        <Link to="/">Réalisations</Link>
                    </article>
                </div>
            </div>
            <div className="copyright">
                &copy; Designed by <Link to="/">Clément Masclet</Link>
            </div>
        </footer>
    )
}

export default Footer;