import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css';

const Contact = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const content = {
            to_name: "Clément",
            from_name: name,
            from_email: email,
            from_phone: phone,
            from_subject: subject,
            from_message: message,
        }

        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;

        emailjs.send(serviceID, templateID, content, {publicKey: 'NfdjUSFo5PKscQ3Hd'})
        .then((response) => {
            alert('Email envoyé avec succès');
        })
    };


    return(
            <div className="bgContact">
            <form className="pres-contact container p-2" onSubmit={handleSubmit}>
                <div className="bonjour">
                    <h1>Me contacter</h1>
                    <p>Pour me contacter en vue d'un éventuel entretien ou d'une future collaboration, 
                        merci de remplir le formulaire de contact
                    </p>
                </div>
                <section className="container row contact">
                    <article className="col-xl-6 col-md-6 formulaire">
                        <h2>Formulaire de contact</h2>
                            <label For="name"></label>
                            <input type="text" name="name" placeholder='Votre nom' value={name} onChange={(e) => setName(e.target.value)} required/>
                            <label for="mail"></label>
                            <input type='text' name='email' placeholder='Votre adresse email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <label for="phone"></label>
                            <input type="text" name="phone" placeholder='Votre numéro de téléphone' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                            <label for="subject"></label>
                            <input type="text" name='subject' placeholder='Sujet' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                            <label for="message"></label>
                            <textarea type="textarea" name='message' placeholder='Votre message' rows='4' value={message} onChange={(e) => setMessage(e.target.value)} required/>      
                            <div className='formBtn text-center p-4'>                   
                            <button type='submit' className='btn '>Envoyer</button>
                            </div>  

                    </article>
                    <article className="col-xl-6 col-md-6 localisation">
                        <h2>Mes Coordonnées</h2>
                        <address>
                        <i class="fa-solid fa-location-dot fa-lg"></i> 183 Rue du général Bonnier, 97430 Le Tampon <br />
                        <i class="fa-solid fa-phone fa-lg"></i> 06.92.40.02.32 <br />
                        <i class="fa-solid fa-envelope fa-lg"></i> masclet.c@gmail.com
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.46216367524!2d55.532086076020406!3d-21.253165880874082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2178751e1591dec3%3A0x303956db60f803aa!2s183%20Rue%20du%20General%20Bonnier%2C%20Le%20Tampon%2097430%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1713459739980!5m2!1sfr!2sfr" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>
                </section>
            </form>
            </div>
    )
}
export default Contact;



