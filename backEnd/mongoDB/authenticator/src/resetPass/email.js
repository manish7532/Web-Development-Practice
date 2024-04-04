const nodemailer = require('nodemailer')

const sendEmail = (mailOptions) => {

    //crrate transporter
    const transporter = nodemailer.createTransport({
        // service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mjyt127532@gmail.com',
            pass: 'brgj yavg ygay nbzs'
        }
    })


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail; 