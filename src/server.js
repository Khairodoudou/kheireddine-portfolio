const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour envoyer le formulaire
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Créer un transporteur avec vos configurations d'email
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Exemple avec Gmail, vous pouvez utiliser un autre service
    auth: {
      user: 'kheireddinedebz@gmail.com', // Remplacez par votre email
      pass: 'fspi sckm sxra inkk'      // Remplacez par votre mot de passe ou un mot de passe d'application
    }
  });

  // Options de l'email
  let mailOptions = {
    from: email,
    to: 'kheireddinedebz@gmail.com', // L'email auquel vous voulez envoyer le message
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    html: `<p><strong>Nom:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong></p><p>${message}</p>`
  };

  try {
    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
});

// Lancer le serveur
app.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000');
});
