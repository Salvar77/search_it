import { useState } from "react";
import classes from "./Contact.module.scss";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideInWhenVisible = ({ children, from, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const variants = {
    hidden: {
      x: from === "left" ? -100 : 100, // Ustalamy przesunięcie na podstawie kierunku
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: delay, duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessageStatus("success:Wiadomość wysłana pomyślnie!");
        console.log("Wiadomość wysłana: ", data.message);
      } else {
        setMessageStatus("error:Wystąpił błąd przy wysyłaniu wiadomości.");
        console.error("Błąd wysyłania: ", data.error);
      }
      setShowModal(true);
    } catch (error) {
      setMessageStatus("error:Wystąpił błąd przy wysyłaniu wiadomości.");
      console.error("Błąd: ", error);
      setShowModal(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setShowModal(false); // Zamknij modal po kliknięciu
    setMessageStatus(null); // Opcjonalnie wyczyść status wiadomości
  };

  return (
    <>
      <section id="kontakt" className={classes.contactSection}>
        <SlideInWhenVisible from="left" delay={0.2}>
          <div className={classes.contactInfo}>
            <h2>Kontakt</h2>
            <p>Ulica: Wojska Polskiego 1-3/40</p>
            <p>Miasto: Opole</p>
            <p>
              <FaPhoneAlt /> Telefon: 694004530
            </p>
            <p>
              <FaEnvelope /> E-mail: contact@searchit.pl
            </p>
          </div>
        </SlideInWhenVisible>
        <SlideInWhenVisible from="right" delay={0.3}>
          <form className={classes.contactForm} onSubmit={handleSubmit}>
            <h2>Wyślij wiadomość</h2>
            <p>Imię</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <p>Wiadomość</p>
            <textarea
              type="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className={classes.consentWrapper}>
              <input
                type="checkbox"
                id="rodoConsent"
                checked={consent}
                onChange={() => setConsent(!consent)}
                required
              />
              <label htmlFor="rodoConsent">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
                ustawą o ochronie danych osobowych w związku z wysłaniem
                zapytania przez formularz kontaktowy. Podanie danych jest
                dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem
                poinformowany, że przysługuje mi prawo dostępu do swoich danych,
                możliwość ich poprawienia oraz żądanie zaprzestania ich
                przetwarzania. Administratorem danych osobowych jest Łukasz Kuś
                Search IT, ul. Wojska Polskiego 1-3/40.
              </label>
            </div>
            <button href="#" className={classes.uiBtn}>
              <span>Wyślij</span>
            </button>
          </form>
        </SlideInWhenVisible>

        {showModal && (
          <div className={classes.modal} onClick={closeModal}>
            <div className={classes.modalContent}>
              {messageStatus && (
                <p
                  className={
                    messageStatus.startsWith("success:")
                      ? classes.successMessage
                      : classes.errorMessage
                  }
                >
                  {messageStatus.split(":")[1]}
                </p>
              )}
            </div>
          </div>
        )}
        <div className={classes.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.112846281092!2d17.8973408!3d50.6621653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105388a05cb53f%3A0xdcd59a4c8236d86a!2sWojska%20Polskiego%201%2F22%2C%2045-020%20Opole!5e0!3m2!1spl!2spl!4v1706810974937!5m2!1spl!2spl"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <p className={classes.policy}>
        Więcej informacji na temat przetwarzania danych osobowych znajdziesz w
        <Link href="/polityka-prywatnosci" className={classes.policy__link}>
          <span>Polityce Prywatności</span>
        </Link>
      </p>
    </>
  );
};

export default Contact;
