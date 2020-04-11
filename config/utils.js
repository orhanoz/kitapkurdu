var request = require('ajax-request');
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var process = require('process');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var sha1 = require('sha1');
var md5 = require('md5');

module.exports = {

    domain: "http://localhost", // "https://kitapkurduu.herokuapp.com",

    api_key: "",

    secret: "",

    payload: "kitapkurdu",

    generateRandomInteger: function () {
        return Math.floor(999999 - Math.random() * 899999)
    },

    sendCustomerEmail: function (_email, _fullName, _token) {

        //https://kitapkurduu.herokuapp.com/emailActivation/e65bc9d2e3e29b606970e2ac523a82e3

        var app_dir = process.cwd();
        var url = domain + "/emailActivation/" + _token;
        var email_dir = path.format({ dir: app_dir, base: "views/emailCustomer.ejs" });
        var str = fs.readFileSync(email_dir, 'utf8');
        var rendered = ejs.render(str, { fullName: _fullName, url: url });

        let config = {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "529282e197c63f",
              pass: "a9876c9c8fc6e6"
            }
        } 

        var message = {
            from: 'KitapKurdu <noreply@kitapkurduu.heroku.com>',
            to: _email,
            subject: 'KitapKurdu - Üyelik Aktivasyonu',
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
                    if (error) {
                        console.log('Nodemailer Error occured!');
                        console.log(error.message);
                        return;
                    }
                    console.log('Nodemailer message sent successfully!');
                    //transport.close(); // close the connection pool
                });
            }
        });

    },

    sendCustomerPasswordRenewalEmail(_email, _fullName) {
        var app_dir = process.cwd();
        var url = domain + "/forgotPassword";
        var email_dir = path.format({ dir: app_dir, base: "views/emailCustomerForgotPassword.ejs" });
        var str = fs.readFileSync(email_dir, 'utf8');
        var rendered = ejs.render(str, { fullName: _fullName, url: url });

        let config = {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "529282e197c63f",
              pass: "a9876c9c8fc6e6"
            }
        }

        var message = {
            from: 'KitapKurdu <noreply@kitapkurduu.heroku.com>',
            to: _email,
            subject: 'KitapKurdu - Şifremi Unuttum',
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
                    console.log('Nodemailer message sent successfully!');
                    //transport.close(); // close the connection pool
                    return;
                });
            }
        });
    },

}