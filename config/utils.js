var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var process = require('process');
var nodemailer = require('nodemailer');
var crypto = require('crypto');


module.exports = {

    domain: "https://kitapkurduu.herokuapp.com", // "http://localhost:3000", // 

    api_key: "",

    secret: "",

    payload: "kitapkurdu",

    generateRandomInteger: function () {
        return Math.floor(999999 - Math.random() * 899999)
    },
    
    sendPasswordResetEmail(email, fullName, token) {
        var app_dir = process.cwd();
        var url = `${this.domain}/reset-password?token=${token}`
        var email_dir = path.format({ dir: app_dir, base: "views/email/forgotPassword.ejs" });
        var str = fs.readFileSync(email_dir, 'utf8');
        var rendered = ejs.render(str, { fullName: fullName, url: url });

        
        let config = {
            host: 'smtp.mailgun.org',
            port: 587,
            auth: {
              user: "postmaster@sandbox07ce63149880425685364917a53accb1.mailgun.org	",
              pass: "740c6c331de876d44544e2eff0177634-7fba8a4e-4c82bb03",
            }
        } 

        var message = {
            from: 'KitapKurdu <kitapkurduuuuu@yandex.com>',
            to: email,
            subject: 'KitapKurdu - Sifremi Unuttum',
            html: rendered
        };

        var transport = nodemailer.createTransport(config);
        transport.verify(function (error, success) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Server is ready to take our messages');
                transport.sendMail(message, function (error) {
                    if(error){
                        console.log('Nodemailer message FAILED!');
                        console.log(`Nodemailer - ERROR: ${error}`);
                    }
                    console.log('Nodemailer message sent successfully!');
                    //transport.close(); // close the connection pool
                    return;
                });
            }
        });
    },

    checkSession(req, res, next) {
        if (req.session && req.session.user && req.cookies.user_sid) {
            next();
        } else {
            res.redirect('/');
        }    
    },

    encrypt(text){
        var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
        var key = 'kitapkurdu';
        var cipher = crypto.createCipher(algorithm, key);  
        var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
        return encrypted;
    },

    decrypt(encrypted){
        var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
        var key = 'kitapkurdu'; 
        var decipher = crypto.createDecipher(algorithm, key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
        return decrypted;
    }

}