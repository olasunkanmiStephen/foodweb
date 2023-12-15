import '../Gallery/Gallery.css'
import one from '../assets/gallary_1.jpg'
import two from '../assets/gallary_2.jpg'
import three from '../assets/gallary_3.jpg'
import four from '../assets/gallary_4.jpg'
import five from '../assets/gallary_5.jpg'
import six from '../assets/gallary_6.jpg'



function Gallery() {
  return (
    <div>
        <div className="gallery">
                <div className="gallary" id="Gallary">
                    <h1>Our<span>Gallary</span></h1>
            
                    <div className="gallary_image_box">
                        <div className="gallary_image">
                            <img src={one} />
            
                            <h3>Food</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                            </p>
                            <a href="#" className="gallary_btn">Order Now</a>
                        </div>
            
                        <div className="gallary_image">
                            <img src={two} />
            
                            <h3>Food</h3>
                            <p className="wi">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                            </p>
                            <a href="#" className="gallary_btn">Order Now</a>
                        </div>
            
                        <div className="gallary_image">
                            <img src={three} />
            
                            <h3>Food</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                            </p>
                            <a href="#" className="gallary_btn">Order Now</a>
                        </div>
            
                        <div className="gallary_image">
                            <img src={four} />
            
                            <h3>Food</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                            </p>
                            <a href="#" className="gallary_btn">Order Now</a>
                        </div>
                        
                        <div className="gallary_image">
                            <img src={five} />
            
                            <h3>Food</h3>
                            <p className="wi">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                            </p>
                            <a href="#" className="gallary_btn">Order Now</a>
                        </div>
                        
            
                        <div className="gallary_image">
                            <img src={six} />
            
                            <h3>Food</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sint eveniet laboriosam 
                            </p>
                            <a href="#" className="gallary_btn">Order Now</a>
                        </div>
            
                    </div>
            
                </div>
            </div>
    </div>
  )
}

export default Gallery