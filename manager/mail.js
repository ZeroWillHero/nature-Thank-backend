const nodemailer = require('nodemailer');

const sendMail = async (email, subject, token) => {

    try {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        let htmlContent = ""; // Initialize htmlContent

        if (subject === "register") {
            htmlContent = `
        <body>
            <style>
                body {
                    background-color: #f1f1f1;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .button {
                    background-color: #4CAF50;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    border-radius: 10px;
                }
            </style>
            <h1>Account Confirmation</h1>
            <a href="${process.env.HOST}/api/user/verify/${token}"><button class="button">Confirm</button></a>
        </body>`;
        }


        if (subject === "forgetPassword") {
            htmlContent = `
        <body>
            <style>
                body {
                    background-color: #f1f1f1;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .button {
                    background-color: #4CAF50;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    border-radius: 10px;
                }

            </style>
            <h1>Reset Password</h1>
            <a href="${process.env.HOST}/api/user/changepassword/${token}"><button class="button">Reset</button></a>
        </body>
        
            `
        }

        console.log(htmlContent); // Log the HTML content

        const mailOptions = {
            from: process.env.EMAIL_ADDRESS, // Corrected from field
            to: email,
            subject,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions).then(info => {
            console.log('Email sent: ' + info.response);
        }).catch(error => {
            console.log('Error sending email: ' + error);
        });
    } catch (error) {
        console.log(error);
    }



}

module.exports = sendMail;