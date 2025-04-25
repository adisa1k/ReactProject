import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about container">
    <h2>About us</h2>
    <article>
        <div>
            <img src="img/about.jpg" alt=""/>

        </div>
        <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam blanditiis illum consequatur earum nobis vero ex nulla numquam harum ea, at hic qui sit atque quia obcaecati odit, maxime voluptate.

            </p>
           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur provident, voluptate accusamus eligendi in laboriosam nam ab repellendus vitae provident repellendus sequi fuga?
           </p>

           <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem nesciunt facere odio ex, id vel alias dignissimos ratione eaque, esse, quae consequuntur! Voluptatibus maxime esse, quidem molestiae. Natus, quidem.
           </p>
           <hr />
           <div>
                <span>Find us on:</span>
                <span><a href=""><i className="fab fa-facebook"></i></a></span>
                <span><a href=""><i className="fab fa-instagram"></i></a></span>
                <span><a href=""><i className="fab fa-twitter"></i></a></span>
                <span><a href=""><i className="fab fa-pinterest"></i></a></span>
           </div>
        </div>
    </article>
 </section>
  )
}

export default About
