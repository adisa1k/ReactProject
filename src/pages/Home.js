import React from 'react'

const Home = () => {
  return (
    <div>
     <section className="one">
        <article className="container">
        <div>
            <h1>Online outdoor shop, buy online outdoor clothing & trekking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est reiciendis quas asperiores, harum, corrupti consequuntur cupiditate quod quis facere totam. Aut suscipit magnam, perspiciatis voluptatem blanditiis molestiae nobis officiis, assumenda vel nulla totam consequatur, dignissimos voluptate doloremque. Facilis, quos?</p>
            <button>Order now</button>
        </div>
        </article>
</section>


 <section className="featuredItems container">
    <h2>Featured Items</h2>
    <article className="owl-carousel owl-theme">
    <a href="singleBoots.html" className="item">
            <img src="img/boots.jpg" alt=""/>
            <h3>Boots</h3>
            <p>$220</p>
        </a>
        <a href="singleGloves.html" className="item">
            <img src="img/gloves.jpg" alt=""/>
            <h3>Gloves</h3>
            <p>$200</p>
        </a>
        <a href="singleJackets.html" className="item">
            <img src="img/jackets.jpg" alt=""/>
            <h3>Jackets</h3>
            <p>$320</p>
        </a>
        <a href="singlePants.html" className="item">
            <img src="img/pants.jpg" alt=""/>
            <h3>Pants</h3>
            <p>$120</p>
        </a>
        <a href="singlePoles.html" className="item">
            <img src="img/poles.jpg" alt=""/>
            <h3>Poles</h3>
            <p>$60</p>
        </a>
        <a href="singleShirts.html" className="item">
            <img src="img/shirts.jpg" alt=""/>
            <h3>Shirts</h3>
            <p>$60</p>
        </a>
        <a href="singleSkirts.html" className="item">
            <img src="img/skirts.jpg" alt=""/>
            <h3>Skirts</h3>
            <p>$40</p>
        </a>
        <a href="singleSocks.html" className="item">
            <img src="img/socks.jpg" alt=""/>
            <h3>Socks</h3>
            <p>$20</p>
        </a>
      
    </article>
 </section>
 <section class="subscribe">
        <article class="container">
            <h1>Subscribe on Hiking shop now!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro iure deleniti dolorum amet nulla. <br/>Accusamus obcaecati iusto ipsa recusandae dolorem placeat impedit laudantium soluta maiores!</p>
            <form>
                <input type="text" placeholder="Your email..."/>
                <input type="submit" value="Subscribe"/>
            </form>

        </article>

     </section>
    </div>
  )
}

export default Home
