import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1];

const CONTACT_INFO = [
  {
    icon: HiOutlineClock,
    label: "Opening Hours",
    lines: [
      "Mon – Fri: 7:30 AM – 10:00 PM",
      "Sat – Sun: 8:00 AM – 11:00 PM",
    ],
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Address",
    lines: ["Casablanca, Morocco"],
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    lines: ["+212 6 00 00 00 00"],
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    lines: ["hello@espressolove.ma"],
  },
];

const WHATSAPP_NUMBER = "212600000000";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ici tu pourras connecter EmailJS ou un backend plus tard.

    setStatus("success");
    setForm(initialForm);

    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__header">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Contact
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Come sit <em>with us</em>
          </motion.h2>
        </div>

        <div className="contact__grid">
          {/* FORM */}
          <motion.form
            className="contact__form glass-panel"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="contact__field-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+212 6 00 00 00 00"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your visit — a reservation, an event, or just a hello."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
            >
              Send Message
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  className="contact__success"
                  role="status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  Thank you — your message has been sent. We'll be in touch
                  shortly.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: 0.1,
            }}
          >
            <ul className="contact__info-list">
              {CONTACT_INFO.map((item) => (
                <li key={item.label}>
                  <span className="contact__info-icon">
                    <item.icon />
                  </span>

                  <div>
                    <h3>{item.label}</h3>

                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {/* MAP */}
            <div className="contact__map">
              <iframe
                title="Espresso Love Location"
                src="https://www.google.com/maps?q=33.5989251,-7.533137&z=16&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href="https://maps.app.goo.gl/bWkdkikoSPUuSHDy5"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-link"
              >
                <HiOutlineLocationMarker />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span
          className="whatsapp-fab__pulse"
          aria-hidden="true"
        ></span>

        <FaWhatsapp />
      </motion.a>
    </section>
  );
}

export default Contact;