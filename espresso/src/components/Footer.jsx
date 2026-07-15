import { PiCoffeeBeanFill } from 'react-icons/pi'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <PiCoffeeBeanFill aria-hidden="true" />
            <span>
              Espresso <em>Love</em>
            </span>
          </a>
          <p className="footer__tagline">Enjoy Your Coffee Time.</p>
          <ul className="footer__socials">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul className="footer__contact">
            <li>
              <HiOutlineLocationMarker />
              <span>Casablanca, Morocco</span>
            </li>
            <li>
              <HiOutlinePhone />
              <span>+212 6 00 00 00 00</span>
            </li>
            <li>
              <HiOutlineMail />
              <span>hello@espressolove.ma</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Espresso Love. All rights reserved.</p>
          <p className="footer__credit">Crafted with care, cup by cup.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
