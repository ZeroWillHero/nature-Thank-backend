
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
        </body>`
        }

        if (subject === "adminReg") {
            htmlContent = `<style>
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    h1{
        text-align: center;
        color: black;
        margin-top: 20px;
    }

    .main-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper {
        width: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    input{
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button{
        padding: 10px;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    .success{
        background-color: green;
    }
    .danger{
        background-color: red;
    }


    
</style>
<body>
    <div class="main-wrapper">
        <div>
            <h1>Confirm admin</h1>
            <div class="wrapper">
                <p>Name : <span>Chameera</span></p>
                <p>email : <span>chameerasandakelum69@gmail.com</span></p>
                <p>role : <span>admin</span></p>

                <p>You can confirm this admin user for your website</p>
                <button class="success">Confirm  &#10004;</button>
                <button class="danger">Decline  &#10006;</button>
            </div>
        </div>
    </div>
</body>
`

            if (htmlContent === "admin") {
                htmlContent = `
                <body>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        p{
            font-size: 20px;
            text-align: center;
            color: #333;
        }
    </style>
    <p>Your admin request is sent to our super admin <br/> after confirming your request you can access your account </p>
</body>
                `
            }
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