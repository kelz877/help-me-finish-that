const nodemailer = reauire('nodemailer')

// new Email(user, url).sendMessage();

module.exports = class Email {
    constructor(user, url) {
        this.to = user.email_address;
        this.firstName = user.full_name.split(' ')[0];
        this.url = url;
        this.from =  "Admin Kelly <kelly@test.com>"
    }
    createTransport() {
        return nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    }
    send(template, subject){
        //send teh actual email
        //1 render html based on (pug template?)

        //2 define email options
        const MailOptions = {
            from: "Admin Kelly <kelly@test.com>",
            to: options.email,
            subject: options.subject,
            text: options.message,
    
        }
        //3 create a transport and send email
    }
    sendWelcome() {
        this.send('welcome', "Someone wants to help you finish a product!")
    }
}

const sendEmail = async options => {
    //1. create a transporter
    // const transporter = nodemailer.createTransport({
    //     host: process.env.EMAIL_HOST,
    //     port: process.env.EMAIL_PORT,
    //     auth: {
    //         user: process.env.EMAIL_USERNAME,
    //         pass: process.env.EMAIL_PASSWORD
    //     }
    // })
    //2. define the mail options
    const MailOptions = {
        from: "Admin Kelly <kelly@test.com>",
        to: options.email,
        subject: options.subject,
        text: options.message,

    }
    //3, send teh email with nodemailer
    await transporter.sendMail(MailOptions);
} 

