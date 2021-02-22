import Product from './Product'
import './Home.css'

function Home(){
    return(
        <div className="home">
          <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/1500x600_Hero-Tall_NP._CB660702447_.jpg"
          alt="" />

          <div className="home__row">
            <Product 
            id="121314"
            title="Logitech G PRO Hero Gaming Mouse - Black"
            price={500}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31ACyIDOCXL.jpg"
            />
            <Product 
            id="121316"
            title="Cordless drill set, 20V Brushless Drill Driver Kit"
            price={5000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81AbYAsd85L._AC_SL1500_.jpg"
            />
              <Product 
            id="121318"
            title="Samsung Galaxy A31-128GB / 4GB - A315G"
            price={50000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61A3UNuWO9L._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
            id="121320"
            title="The Epico Charger: can charge anything"
            price={500}
            rating={5}
            image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
            />
            <Product 
            id="121322"
            title="Cordless Drill, 20V Drill Driver 2x2000mAh Batteries"
            price={5000}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+dACuXCUL._AC_UL320_.jpg"
            />
            <Product 
            id="121324"
            title="TracFone Samsung Galaxy A01 4G LTE Prepaid Smartphone"
            price={50000}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ff+rZThyL._AC_UY218_.jpg"
            />
            <Product 
            id="121326"
            title="iphone11 pro max"
            price={50000}
            rating={3}
            image="https://m.media-amazon.com/images/I/81j2j9x-KWL._FMwebp__.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
            id="121328"
            title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
            price={5000}
            rating={4}
            image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product 
            id="121330"
            title="Elgato HD60 S Capture Card 1080p 60 Capture, Zero-Lag Passthrough, Ultra-Low Latency, PS5, PS4, Xbox Series X/S, Xbox One, Nintendo Switch, USB 3.0"
            price={50000}
            rating={4}
            image="https://m.media-amazon.com/images/I/51O6n4bQbUL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </div>
        </div>
    )
}

export default Home
