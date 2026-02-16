import "./styles.css";
import { FaInstagram } from "react-icons/fa";


export default function App() {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="inner">
          <div className="hero-text">
            <div className="brand-block">
              <img src="/crk.jpg" alt="CRK Logo" className="top-logo" />

              <h1 className="brand-main">CRK</h1>
              {/* <h2 className="brand-sub">HOMES</h2> */}
              <p className="brand-tagline">
                HOMES | FURNITURES | INTERIORS
              </p>
            </div>


            <p className="subtitle">
              Crafting timeless interiors & elegant living spaces.
            </p>
            <h2 className="launch-heading">
              Digital Showroom is
              <span>Launching Soon!!!</span>
            </h2>
            <div className="actions">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                WhatsApp Inquiry
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.instagram.com/crkhomefurniture?igsh=ZTB6eXJ6dHlqNjdk"
                target="_blank"
                rel="noreferrer"
                className="insta-link"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stores">
        <div className="inner store-grid">
          <div className="card">
            <h3>Anantapur Store</h3>
            <p>
              Shop No: 25/643-24-16, 17 <br />
              Penukonda Road, Anantapur <br />
              Andhra Pradesh - 515001
            </p>
          </div>

          <div className="card">
            <h3>Dharmavaram Store</h3>
            <p>
              Main Road, Opp. Market Yard <br />
              Dharmavaram, Anantapur Dist <br />
              Andhra Pradesh - 515671
            </p>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} CRK Homes Furnitures
      </footer>
    </div>
  );
}
