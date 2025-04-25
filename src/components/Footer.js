import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <article className="container">
            <h3>
                <a href="index.html" className='logo'>
                    <i className="fas fa-hiking">
                        </i>Hiking shop</a>
            </h3>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="about" className='active'>About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                    <li><Link to="admin">Admin</Link></li>
                </ul>
            </nav>
            <div class="icons">
                <a href=""><i className="fab fa-facebook-square"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-pinterest"></i></a>
            </div>
        </article>
        <article>
            <p>&copy; Thema - engineering & consulting 2025.</p>
        </article>
      </footer>
  )
}

export default Footer
