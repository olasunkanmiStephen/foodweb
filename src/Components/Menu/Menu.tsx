import '../Menu/Menu.css'
import burger from '../assets/buger.jpg'
import pasta from '../assets/pasta.jpg'
import hotdog from '../assets/Hot_dog.jpg'
import Spanchi from '../assets/Spanchi.jpg'
import lasagna from '../assets/lasagna.webp'
import biryani from '../assets/biryani.webp'
import chocodrink from '../assets/chocolate_Drink.jpg'
import chocolate from '../assets/chocolate.jpg'
import pizza from '../assets/pizza.jpg'
import juse from '../assets/juse.jpg'
import ice from '../assets/ice_cream.jpg'
import sandwich from '../assets/sandwich.jpg'

function Menu() {
  return (
    <div>
        <div className="menu">
                <div className="menu-section">
                    <div className="menu" id="Menu">
                        <h1>Our<span>Menu</span></h1>
                
                        <div className="menu_box">
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={burger} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Buger</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                            
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={pasta} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>pasta</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={lasagna} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>lasagna</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={chocodrink} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Drink</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={pizza}/>
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>pizza</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={hotdog} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Hot Dog</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={juse} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Juse</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={biryani} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Biryani</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={chocolate} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Chocolate</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={ice} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Ice Cream</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={Spanchi} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Spanchi</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                
                            </div> 
                
                            <div className="menu_card">
                
                                <div className="menu_image">
                                    <img src={sandwich} />
                                </div>
                
                                <div className="small_card">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                
                                <div className="menu_info">
                                    <h2>Sandwich</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                                    </p>
                                    <h3>$20.00</h3>
                                    <div className="menu_icon">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                    <a href="#" className="menu_btn">Order Now</a>
                                </div>
                            </div> 
                            
                        </div>
                
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Menu