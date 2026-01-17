import "./App.css";

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo">🍀 Foodi</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Services</a>
          <a href="#">Offers</a>
        </nav>
        <button className="btn">Contact</button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Dive into Delights <br />
            Of Delectable <span>Food</span>
          </h1>
          <p>
            Where each plate weaves a story of culinary mastery and passionate
            craftsmanship.
          </p>
          <div className="hero-buttons">
            <button className="btn">Order Now</button>
            <button className="video-btn">▶ Watch Video</button>
          </div>
        </div>

        <div className="hero-img">
          <img src="https://avatars.mds.yandex.net/get-shedevrum/11511289/b5266a1cd79b11ee80e3aa8321cbabb8/orig" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h4>Customer Favorites</h4>
        <h2>Popular Categories</h2>

        <div className="category-list">
          <div className="category">🍔 Main Dish</div>
          <div className="category">🍳 Breakfast</div>
          <div className="category">🍰 Dessert</div>
          <div className="category">📋 Browse All</div>
        </div>
      </section>

      {/* MENU */}
      <section className="menu">
        <h4>Special Dishes</h4>
        <h2>Standout Dishes From Our Menu</h2>

        <div className="menu-list">
          <div className="card">
            <img src="https://thehappyfoodie.co.uk/wp-content/uploads/2017/09/253_Fatoush_Salad_-scaled.jpg" />
            <h4>Fattoush Salad</h4>
            <p>$24.00 ⭐ 4.9</p>
          </div>

          <div className="card">
            <img src="https://i.pinimg.com/474x/85/86/c8/8586c81af4f1474838d86b7bc73ac7b8.jpg?nii=t" />
            <h4>Vegetable Salad</h4>
            <p>$26.00 ⭐ 4.6</p>
          </div>

          <div className="card">
            <img src="https://i.pinimg.com/736x/33/76/14/33761412ac08829b5ecf251fc9257501.jpg" />
            <h4>Egg Vegi Salad</h4>
            <p>$23.00 ⭐ 4.5</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <div className="chef">
          <img src="https://avatars.mds.yandex.net/get-shedevrum/15170076/img_8a309fbefc1411efafccea18383b5847/orig" />
        </div>

        <div className="testimonial-text">
          <h4>Testimonials</h4>
          <h2>What Our Customers Say About Us</h2>
          <p>
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
          <strong>⭐ 4.9 (18.6k Reviews)</strong>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-left">
          <h4>OUR STORY & SERVICES</h4>
          <h2>Our Culinary Journey And Services</h2>
          <p>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services.
          </p>
          <button className="btn">Explore</button>
        </div>

        <div className="services-right">
          <div className="service-card">
            🍽
            <h3>Catering</h3>
            <p>Delight your guests with our flavors</p>
          </div>

          <div className="service-card">
            ⏱<h3>Fast Delivery</h3>
            <p>Prompt delivery to your doorstep</p>
          </div>

          <div className="service-card">
            🛒
            <h3>Online Ordering</h3>
            <p>Easy and fast online ordering</p>
          </div>

          <div className="service-card">
            🎁
            <h3>Gift Cards</h3>
            <p>Perfect gifts for your loved ones</p>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="footer-full">
        <div className="footer-columns">
          <div>
            <h3>🍀 Foodi</h3>
            <p>
              Savor the artistry where every dish is a culinary masterpiece.
            </p>
          </div>

          <div>
            <h4>Useful links</h4>
            <br />
            <p>About us</p>
            <br />
            <p>Events</p>
            <br />
            <p>Blogs</p>
            <br />
            <p>FAQ</p>
          </div>

          <div>
            <h4>Main Menu</h4>
            <br />
            <p>Home</p>
            <br />
            <p>Offers</p>
            <br />
            <p>Menus</p>
            <br />
            <p>Reservation</p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <br />
            <p>example@email.com</p>
            <br />
            <p>+64 958 248 966</p>
            <br />
            <p>Social media</p>
          </div>
        </div>

        <div className="footer-bottom">
          Copyright 2023 Dscode | All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
