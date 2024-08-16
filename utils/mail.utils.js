const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user:'sumukhasureban@gmail.com',
            pass:'dpvsbawwjycwiirs'
        }
    }
);

// const sendEmail = async function(to){
//     transporter.sendMail({
//         to:to,
//         subject:'signup testing',
//         html: `<h1>Ram Ram</h1>`
//     });

//     console.log('Email sent');
// }

const sendEmail =  function(to) {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            to: to,
            subject: 'signup testing',
            html: `<h1>Jai Siya Ram</h1>`
        }, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return reject(error);  // Reject the promise with the error
            }
            console.log('Email sent:', info.response);
            resolve(info.response);  // Resolve the promise with the response
        });
    });
}


// sendEmail('sumukhasureban2002@gmail.com');
// 2xbbMNVl3OcWXlem
module.exports = sendEmail;

