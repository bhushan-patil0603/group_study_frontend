const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>StudyGroup</h3>
          <p>Making collaborative learning accessible to everyone, everywhere.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="icon-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="icon-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@studygroup.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Learning Street, Education City</p>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StudyGroup. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
