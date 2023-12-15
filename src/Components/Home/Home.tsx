import main from '../assets/main_img.png';
import '../Home/Home.css';

function Home() {
  return (
    <section className="a">
      <div className="first-page">
        <div className="brief">
          <div className="tag-b">
            <h1>Get Fresh <span>Food</span> in an Easy Way</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, totam? Omnis quam facilis necessitatibus cum, non molestiae? Quos, nobis possimus, labore unde nemo expedita corporis quisquam amet quo obcaecati laboriosam.</p>
        </div>
        <img src={main} alt="Fresh Food" />
      </div>
      <button>Order Now</button>
    </section>
  );
}

export default Home;
