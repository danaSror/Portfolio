import { NextApiRequest, NextApiResponse } from "next";
import transporter from "./emailConfig"; // Import the configured email transporter

export default async (req , res ) => {
  if (req.method === "POST") {
    const mailOptions = {
      from: "dana.sror123@gmail.com",
      to: "dana.sror123@gmail.com",
      subject: "Notification Email",
      text: "This is the content of the notification email.",
    };

    try {
      console.log("blaaaaaaaaaa")
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      res.status(500).send("Email could not be sent");
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
