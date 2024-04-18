import React from "react";
import './Home.css';

const Home = () => {
    return(
        <main>
            <div className="background">
                <div className="welcome">
                    <h1>Bienvenue !</h1>
                    <h2>Vous êtes sur le portfolio de Clément Masclet</h2>
                    <h2>Développeur Web junior</h2> 
                    <button><a href="#about">En savoir plus</a></button>
                </div>
            </div>

            <section className='container about' id="about">
                <div className="row">
                    <article className="col-md-6">
                        <h2 className="titre text-capitalize">à propos</h2>
                        <p>Ancien technicien de laboratoire, c'est en 2022, à l'aube de mes 30 ans, que je prends 
                            de me reconvertir professionellement. <br/> <br />
                            Passionné depuis toujours par l'informatique, et avide de connaissance, c'est ainsi que fin d'année 2023,
                            je me suis lancé dans une formation auprès du CEF pour devenir Développeur Web. <br /> <br />
                            Mon appétance du code et ma curiosité ont été et seront toujours ma plus grande force.
                            Toujours motivé pour repousser mes limites, n'hésitez pas à me contacter dans le cadre d'un stage, un emploi 
                            ou quelqu'autre missions que je mènerais, j'en suis sur, à bien.
                        </p>
                    </article>
                    <article className="col-md-6">
                        <img src="../img/0520.jpg" alt="" srcset="" />
                        <h2>Mes compétences</h2>
                        <p>HTML5 90%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-image " style= {{width: "90%"}}></div>
                            </div><br />
                        <p className="">CSS3 80%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-image" style= {{width: "80%", backgroundColor:"#592B02"}}></div>
                            </div><br />
                        <p>JAVASCRIPT 70%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-image" style= {{width: "70%", backgroundColor:"#592B02"}}></div>
                            </div><br />
                        <p>REACT 50%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-image" style= {{width: "50%", backgroundColor:"#592B02"}}></div>
                            </div><br />
                        <p>Angular 50%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-image" style= {{width: "50%", backgroundColor:"#592B02"}}></div>
                            </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Home;