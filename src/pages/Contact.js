import React from 'react'

const Contact = () => {
  return (
    <section className="contact container">
    <h2>Contact us</h2>
    <article>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.4660573108213!2d17.810108639973723!3d43.3463609712385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b430a3b4ba5dd%3A0x9789d24d966764aa!2sMladena%20Balorde%2C%2088000%20Mostar!5e0!3m2!1sen!2sba!4v1732576141567!5m2!1sen!2sba" width="100%" height="500" style={{border: 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        
        <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button>Send message</button>
            <hr />
            <div>
            <span>Find us on:</span>
                <span><a href=""><i className="fab fa-facebook"></i></a></span>
                <span><a href=""><i className="fab fa-instagram"></i></a></span>
                <span><a href=""><i className="fab fa-twitter"></i></a></span>
                <span><a href=""><i className="fab fa-pinterest"></i></a></span>
            </div>

        </form>
        
    </article>
</section>
  )
}

export default Contact
