import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "maxim@villivald.com",
    from: "maxim@villivald.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};
