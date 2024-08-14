import { useState, useEffect, useRef } from "react";
import classes from "./Contact.module.scss";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState({
    contactInfo: "contact__hidden",
    contactForm: "contact__hidden",
  });
  const sectionRef = useRef(null);

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
    setShowModal(false);
    setMessageStatus(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setAnimationClass({
            contactInfo: "contact__boxOT--fromLeft",
            contactForm: "contact__boxOT--fromRight",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (observer && currentSection) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <section id="kontakt" className={classes.contactSection} ref={sectionRef}>
        <div
          className={`${classes.contactInfo} ${
            classes[animationClass.contactInfo]
          }`}
        >
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

        <form
          className={`${classes.contactForm} ${
            classes[animationClass.contactForm]
          }`}
          onSubmit={handleSubmit}
        >
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
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
              przysługuje mi prawo dostępu do swoich danych, możliwość ich
              poprawienia oraz żądanie zaprzestania ich przetwarzania.
              Administratorem danych osobowych jest Łukasz Kuś Search IT, ul.
              Wojska Polskiego 1-3/40.
            </label>
          </div>
          <button href="#" className={classes.uiBtn}>
            <span>Wyślij</span>
          </button>
        </form>

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.1326566424623!2d17.892470193570723!3d50.66216619896289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710538ba6e9ea87%3A0xf140850aa2ecff86!2sSearch%20IT!5e1!3m2!1spl!2spl!4v1723646595080!5m2!1spl!2spl"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
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
