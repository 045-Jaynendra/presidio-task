import nodemailer from  'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thehindujay@gmail.com',
      pass: 'cctllsqkhdwlfarj'
    }
  });

  const sendEmail = async (to,data) => {
    try {
      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: 'thehindujay@gmail.com',
        to:to,
        subject: "Real Estate Property Dealing ",
        html:data,
      });
  
      console.log('Email sent: %s', info.messageId);
      return info.messageId;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  export {sendEmail}
  