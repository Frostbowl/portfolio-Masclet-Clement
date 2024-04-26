import React from "react";
import './creation.css';

const Creation = () => {
    return(
        <div className="creations">
            <div className="accordion " id="accordionExample">
            <h1>Découvrez mes créations HTML/CSS/JavaScript</h1>
                <div className="accordion-item border border-0">
                    <h2 className="accordion-header">
                        <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Mes créations HTML5 / CSS3
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <article>
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <h3>Mon CV en ligne</h3>
                                            <img src="../img/CV.png" class="d-block w-100" alt="CV Clément Masclet"/>
                                        </div>
                                        <div class="carousel-item">
                                            <h3>Les déserts du monde</h3>
                                            <img src="../img/desert-du-monde.png" class="d-block w-100" alt="Désert du monde"/>
                                        </div>
                                        <div class="carousel-item">
                                            <h3>Site web My Home Space</h3>
                                            <img src="../img/homespace.png" class="d-block w-100" alt="My HomeSpace"/>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="textBtn">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                            <span class="textBtn">Next</span>
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="accordion-item border border-0">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Mes créations JavaScript
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <article>
                                <div id="carouselExample" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <h3>Projet d'espace commentaire </h3>
                                            <img src="../img/projet-js-commentary-space.png" class="d-block w-100" alt="projet espace commentaire"/>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            <h1>Mes créations CMS</h1>
            <div className="accordion-item border border-0">
                    <h2 className="accordion-header">
                        <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Mes créations WordPress
                        </button>
                    </h2> 
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <article>
                                <div id="carouselExample2" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <h3>La vie des plantes / Accueil</h3>
                                            <img src="../img/accueil1.png" class="d-block w-100" alt="accueil1 LVDP"/>
                                        </div>
                                        <div className="carousel-item">
                                            <h3>La vie des plantes / Accueil</h3>
                                            <img src="../img/accueil2.png" class="d-block w-100" alt="accueil2 LVDP"/>
                                        </div>
                                        <div className="carousel-item">
                                            <h3>La vie des plantes / Accueil</h3>
                                            <img src="../img/accueil3.png" class="d-block w-100" alt="accueil3 LVDP"/>
                                        </div>
                                        <div className="carousel-item">
                                            <h3>La vie des plantes / Boutique</h3>
                                            <img src="../img/boutique1.png" class="d-block w-100" alt="boutique1 LVDP"/>
                                        </div>
                                        <div className="carousel-item">
                                            <h3>La vie des plantes / à propos</h3>
                                            <img src="../img/about.png" class="d-block w-100" alt="about LVDP"/>                                            
                                        </div>
                                        <div className="carousel-item">
                                            <h3>La vie des plantes / contact</h3>
                                            <img src="../img/contact.png" class="d-block w-100" alt="contact LVDP"/>                                            
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="textBtn">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                                            <span class="textBtn">Next</span>
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <h1>Mes créations FrameWorks</h1>
                <div className="accordion-item border border-0">
                    <h2 className="accordion-header">
                        <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Mes créations Vue.js
                        </button>
                    </h2> 
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <article>
                                <div id="carouselExample3" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <h3>Portfolio / Accueil</h3>
                                            <img src="../img/homeVue.png" class="d-block w-100" alt="home vue"/>
                                        </div>
                                        <div class="carousel-item ">
                                            <h3>Portfolio / Modal dynamique</h3>
                                            <img src="../img/modalVue.png" class="d-block w-100" alt="modale vue"/>
                                        </div>
                                        <div class="carousel-item ">
                                            <h3>Portfolio / Modal ouvert</h3>
                                            <img src="../img/openModal.png" class="d-block w-100" alt="modale vue ouvert"/>
                                        </div>
                                        <div class="carousel-item ">
                                            <h3>Portfolio / Contacte</h3>
                                            <img src="../img/contactVue.png" class="d-block w-100" alt="contact vue"/>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="textBtn">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                            <span class="textBtn">Next</span>
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="accordion-item border border-0">
                    <h2 className="accordion-header">
                        <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Mes créations Angular.js
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <article>
                                <div id="carouselExample4" class="carousel slide">
                                    <div className="carousel-inner">
                                        <div class="carousel-item active">
                                            <h3>Au Petit Village / Accueil</h3>
                                            <img src="../img/anguHome.png" class="d-block w-100" alt="angu Home"/>
                                        </div>
                                        <div class="carousel-item">
                                            <h3>Au Petit Village / Page main</h3>
                                            <img src="../img/anguMain.png" class="d-block w-100" alt="angu main"/>
                                        </div>
                                        <div class="carousel-item">
                                            <h3>Au Petit Village / Page produit</h3>
                                            <img src="../img/anguProduct.png" class="d-block w-100" alt="anguProduct"/>
                                        </div>
                                        <div class="carousel-item">
                                            <h3>Au Petit Village / Page à propos</h3>
                                            <img src="../img/anguAbout.png" class="d-block w-100" alt="angu about"/>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="textBtn">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
                                            <span class="textBtn">Next</span>
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Creation;