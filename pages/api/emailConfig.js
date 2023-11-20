const nodemailer = require('nodemailer');
const nodemailerMailgun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'baa6e2af13a03d589dc892bed0726746-8c9e82ec-2bbfa71f',
    domain: 'sandboxbba788b0b52442b88f18886aae629bd8.mailgun.org',
  },
};

const transporter = nodemailer.createTransport(nodemailerMailgun(auth));
