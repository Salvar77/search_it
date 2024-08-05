import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },

    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "contact@searchit.pl",
    to: "contact@searchit.pl",
    subject: "Wiadomość z formularza kontaktowego",
    text: `Nowa wiadomość od: ${name} \nEmail: ${email} \nTreść wiadomości: ${message}`,
  };

  // Wysyłanie głównej wiadomości
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        error: "Wystąpił błąd podczas wysyłania wiadomości e-mail.",
      });
    } else {
      console.log("E-mail wysłany: " + info.response);

      // Automatyczne potwierdzenie odbioru dla użytkownika
      const confirmationMailOptions = {
        from: "contact@searchit.pl",
        to: email, // Adres e-mail użytkownika
        subject: "Potwierdzenie otrzymania wiadomości",
        text: `Dziękujemy ${name}. 
        Twoja wiadomość została pomyślnie odebrana. Skontaktujemy się z Tobą wkrótce z odpowiedzią.`,
      };

      transporter.sendMail(
        confirmationMailOptions,
        (confirmationError, confirmationInfo) => {
          if (confirmationError) {
            console.log(confirmationError);
            res.status(500).json({
              error: "Błąd podczas wysyłania potwierdzenia.",
            });
          } else {
            console.log("Potwierdzenie wysłane: " + confirmationInfo.response);
            res.status(200).json({
              message: "Wiadomość i potwierdzenie e-mail zostały wysłane.",
            });
          }
        }
      );
    }
  });
}
