import { useContext } from 'react';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';

const Products = () => {

    const { products, setProducts } = useContext(ProductsContext);






    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/")
    //       .then((res) => res.json())
    //       .then((prodRes) => setProducts(prodRes))
    //       .catch((err) => console.log(err));
    // }, []);

    //console.log(products);
    
  return (
    <section className="products container">
        <article>
            {products.map((product) => {
                return (
                  <Link to={`/single/${product.id}`} className="item" key={product.id}>
                    <img src={`${product.img}`} alt="" />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </Link>
                );
            })}
            
        {/* <a href="singleGloves.php" className="item">
            <img src="img/gloves.jpg" alt=""/>
            <h3>Gloves</h3>
            <p>$200</p>
        </a>
        <a href="singleJackets.php" className="item">
            <img src="img/jackets.jpg" alt=""/>
            <h3>Jackets</h3>
            <p>$320</p>
        </a>
        <a href="singlePants.php" className="item">
            <img src="img/pants.jpg" alt=""/>
            <h3>Pants</h3>
            <p>$120</p>
        </a>
        <a href="singlePoles.php" className="item">
            <img src="img/poles.jpg" alt=""/>
            <h3>Poles</h3>
            <p>$60</p>
        </a>
        <a href="singleShirts.php" className="item">
            <img src="img/shirts.jpg" alt=""/>
            <h3>Shirts</h3>
            <p>$60</p>
        </a>
        <a href="singleSkirts.php" className="item">
            <img src="img/skirts.jpg" alt=""/>
            <h3>Skirts</h3>
            <p>$40</p>
        </a>
        <a href="singleSocks.php" className="item">
            <img src="img/socks.jpg" alt=""/>
            <h3>Socks</h3>
            <p>$20</p>
        </a> */}

    </article>
</section>
  )
}

export default Products
