import { useState } from "react";
import classes from "./Contact.module.scss";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        setMessageStatus("Wiadomość wysłana pomyślnie!");
        console.log("Wiadomość wysłana: ", data.message);
      } else {
        setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
        console.error("Błąd wysyłania: ", data.error);
      }
      setShowModal(true); // Dodaj tę linię, aby wyświetlić modal
    } catch (error) {
      setMessageStatus("Wystąpił błąd przy wysyłaniu wiadomości.");
      console.error("Błąd: ", error);
      setShowModal(true); // Dodaj tę linię, aby wyświetlić modal również w przypadku błędu
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
    <section id="kontakt" className={classes.contactSection}>
      <div className={classes.contactInfo}>
        <h2>Kontakt</h2>
        <p>Ulica: Wojska Polskiego 1-3/40</p>
        <p>Miasto: Opole</p>
        <p>Telefon: 694004530</p>
        <p>E-mail: lukaszkus77@gmail.com</p>
      </div>
      <form className={classes.contactForm} onSubmit={handleSubmit}>
        <h2>Wyślij wiadomość</h2>
        <p>Twoje imię</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <p>Twój email</p>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <p>Twoja wiadomość</p>
        <textarea
          type="messsage"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button href="#" className={classes.uiBtn}>
          <span>Wyślij</span>
        </button>
      </form>

      {showModal && (
        <div className={classes.modal} onClick={closeModal}>
          <div className={classes.modalContent}>
            {messageStatus && <p>{messageStatus}</p>}
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
  );
};

export default Contact;
