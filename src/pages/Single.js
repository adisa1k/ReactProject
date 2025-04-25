import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import CartContext from '../context/CartContext';

const Single = () => {
    const params = useParams();
    // console.log(params); -uhvatili smo id iz linka, dobijemo objekat, treba nam da nesto dohvatimo sa tim id-em
    
    const navigate = useNavigate();

    const { products, setProducts} = useContext(ProductsContext);
    const { cart, setCart } = useContext(CartContext);

    let product = products.filter((prod) => {
        if(prod.id ===Number(params.id)) return prod;
    })[0];

    // console.log(product);

    //Kreiranje option menija u <select> elementu

    let option = [];

    for(let i = 1; i <= product.qty; i++) {
        option.push(
            <option key={i} value={i}>
                {i}
            </option>
        )
    }

    //Kreiranje kategorija za prikaz

    let categoryElement = [];

    let categoryTemp = product.category.split(','); //poslije split-a dobijemo niz

    categoryTemp.forEach((element, idx) => {
        if(categoryTemp.length !== idx +1) {
            categoryElement.push(
                <a key={idx} href='#'>
                    {element.trim()},
                </a>
            )
        } else {
            categoryElement.push(
                <a key={idx} href='#'>
                    {element.trim()}
                </a>
            )
        }
    })


    const addToCart = (event) => {
        event.preventDefault();

        cart.some((item) => {
            return item.id === params.id
        }) //ovo ce da vrati true ili false, ako je ispunjen uslov(da li postoji neki element koji ispunjava zadati uslov - to radi 'some' fja) (ako taj item vec postoji u kolicima(cart) , ovo sve ce biti true). tu sada pravim ternarni operator

        //da pronadjem gdje se nalazi u kolicima

        ? (cart.filter((item) => {
            if (item.id === params.id) {
            return item; }//vratio mi je taj jedan proizvod, tj.to je niz od 1 elementa
        })[0].qty += Number(event.target.selectQty.value))

       : setCart((cart) => [
          ...cart,
          { id: params.id, name: product.name, price: product.price, img: product.img, qty: Number(event.target.selectQty.value) },
        ]); // ovako napisano nije dobro, jer kad dodamo jos jedan proizvod, on sve ispise ponovo, umjesto samo qty da promijeni (duplira se sve ostalo)



    }


    


  return (
    <>
    <section className="single container">
    <h2>single page - One product</h2>
    <article>
        
        <img src={`${product.img}`} alt="image"/>
        
        <div>
            <h3>{product.name}</h3>
            <div className="price">${product.price}</div>
            <p>{product.desc}</p>

            <form onSubmit={addToCart}>
                <label>Quantity: </label>
                <select name='selectQty'>
                    {option}
                    {/* <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option> */}
                </select>
                <button>Order now</button>
            </form>
            <hr/>
            <p className="category">
                Category: 
                {categoryElement}
                {/* <a href="">Men</a>, <a href="">Boots</a>  */}
            </p>
            <hr/>
            <div>
            <span>Share:</span>
                <span><a href=""><i className="fab fa-facebook"></i></a></span>
                <span><a href=""><i className="fab fa-instagram"></i></a></span>
                <span><a href=""><i className="fab fa-twitter"></i></a></span>
                <span><a href=""><i className="fab fa-pinterest"></i></a></span>
            </div>

        </div>
    </article>
</section>
</>
  )
}

export default Single
