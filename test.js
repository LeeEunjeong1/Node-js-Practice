const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9972b2dc14c74c",
        pass: "b66dc984126514"
  }
};
const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) =>{
        if(error) {
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from :"tbig1019@gmail.com",
    to : "tbig1019@gmail.com",
    subject : "테스트 메일 입니다. ",
    text : "node js 배우기~!"
}

send(email_data);