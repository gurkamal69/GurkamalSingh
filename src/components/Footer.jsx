import React from 'react';
import '../styles/footer.css';
const handleEmail = () => {
  const emailInput = document.getElementById('userEmail');
  const userEmail = emailInput.value.trim();

  if (!userEmail || !userEmail.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  const subject = encodeURIComponent('Hi, I visited your portfolio and I want to get in touch');
  const body = encodeURIComponent(`Hello Gurkamal,\n\nI visited your portfolio and would love to connect.\nHere is my email: ${userEmail}`);

  window.location.href = `mailto:gurkamalin@gmail.com?subject=${subject}&body=${body}`;
};

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-left">
        <h2>GURKAMAL SINGH</h2>
        <nav className="footer-nav">
  <a href="#hero">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
</nav>

      </div>

      <div className="footer-right">
        <h3>Get In Touch</h3>
        <div className="email-touch">

<input
  type="email"
  id="userEmail"
  placeholder="abc@gmail.com"
  required
/>
<button onClick={handleEmail}>Touch</button>

</div>

        <div className="footer-or">OR</div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/gurkamal69" target="_blank"><img src="/Icons/whiteIcons/mdi--linkedinwhite.svg" alt="LinkedIn" /></a>
          <a href="https://github.com/gurkamal69" target="_blank"><img src="/Icons/whiteIcons/mdi--githubwhite.svg" alt="GitHub" /></a>
          <a href="https://www.instagram.com/_gur.kamal/" target="_blank"><img src="/Icons/whiteIcons/lets-icons--instawhite.svg" alt="Instagram" /></a>
          <a href="https://wa.me/917710261904"  target="_blank" rel="noopener noreferrer"><img src="/Icons/whiteIcons/ic--outline-whatsappwhite.svg" alt="WhatsApp" /></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
