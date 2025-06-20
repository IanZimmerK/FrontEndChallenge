import "./styles/Footer.css";

// Footer with payment methods, socials, links and Trustpilot ratingS
export default function Footer() {
  return (
    <footer className="footer">
     {/* Payment methods row */}
        <div className="footer-payments">
          <img src="/payments/visa.svg" alt="Visa" />
          <img src="/payments/mastercard.svg" alt="Mastercard" />
          <img src="/payments/amex.svg" alt="Amex" />
          <img src="/payments/skrill.svg" alt="Skrill" />
          <img src="/payments/bitcoin.svg" alt="Bitcoin" />
          <img src="/payments/ethereum.svg" alt="Ethereum" />
          <p>and +50 more</p>
        </div>
        
      {/* Main content area */}
      <div className="footer-main">
       {/* Social media icons */}
        <div className="footer-socials">
          <a href="#"><img src="/socials/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/socials/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/socials/twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="/socials/discord.svg" alt="Discord" /></a>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Footer columns */}
        <div className="footer-columns">
          <div className="footer-brand">
            <img src="/chicks-logo-large-hovered.svg" alt="Chicks Gold" className="footer-logo" />
            <span className="footer-email">support@chicksgold.com</span>
          </div>

          {/* Links sections */}
          <div className="footer-group">
            <h4>Chicks Gold</h4>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Sitemap</a>
          </div>

          <div className="footer-group">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">Live Chat</a>
          </div>

          <div className="footer-group">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>

          <div className="footer-trust">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="/trustpilot.svg"
                alt={`Trustpilot ${i + 1}`}
                className="trustpilot-icon"
               />
              ))}
             <span>Trustpilot Reviews</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          © 2017 - 2025 Chicksgold.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
