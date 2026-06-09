import { social_links } from '@/assets/assets.js'
import { LoaderCircleIcon, Send } from 'lucide-react'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from 'react-hot-toast';

const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const Contact = ({isDarkMode}) => {


  const form = useRef();

  const [sending, setSending] = useState(false);



  const [NewUserData, setNewUserData] = useState({
    name: "",
    email: "",
    message: ""
  })



  const SendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = NewUserData;

    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(service_id, template_id, form.current, public_key)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully");

          setNewUserData({
            name: "",
            email: "",
            message: ""
          });

          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message");
          setSending(false);
        }
      );
  };



  return (
    <div id='contact' className="py-24 px-4 overflow-hidden">




      <div className="max-w-6xl mx-auto">


        <div className="mb-14 text-left" style={{ opacity: 1, transform: 'none' }}>
          <h2 className={`text-4xl sm:text-5xl font-ovo ${isDarkMode ? "text-gray-300" : "text-gray-900"} mb-3`}>Contact Me</h2>
          <div className="w-20 h-1.5 bg-blue-400 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          <div className="lg:col-span-2 space-y-6 flex flex-col" style={{ opacity: 1, transform: 'none' }}>

            <div>
              <h3 className={ `text-3xl font-ovo ${isDarkMode ? "text-gray-300" : "text-gray-900"} mb-3`}>Let's Connect</h3>

              <p className="text-[15px] font-ovo sm:text-base text-gray-500 leading-relaxed mb-4">I'm always excited to work on new projects and collaborate with amazing people. Let's discuss how we can bring your ideas to life!</p>
            </div>


            <div className="grid gap-3 flex-grow">
              {social_links.map((eachone, index) => (
                <a key={index} href={eachone.links} target='_blank' rel="noopener noreferrer" className={`${isDarkMode ? 'bg-gray-800 border-gray-500/30 hover:border-gray-200/40 ' :  'bg-white border-gray-400/30 hover:border-red/50' } flex items-center gap-4 p-4 bg-card rounded-2xl border  transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer font-ovo`} style={{ opacity: 1, transform: 'none' }}>
                  {eachone.social_logo}
                  <div >
                    <p className={ `font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} text-[16px]`}>{eachone.social_name}</p>
                    <p className= {`text-[14px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-text-primary transition-colors`}>{eachone.social_links_me_name}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>



          <div className="lg:col-span-3 flex flex-col gap-6">

            <div className={`${isDarkMode ? 'bg-gray-800  border-gray-500/30 hover:shadow-md' : 'bg-white  border-gray-200 hover:shadow-xl'} hover:shadow-blue-400/20 rounded-3xl border  p-6 sm:p-8 relative overflow-hidden group  shadow-md    transition-all duration-500`}>

              <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <h3 className={`text-3xl font-ovo ${isDarkMode ? "text-gray-300" : "text-gray-900"} mb-6`}>Drop A Message <span className="text-accent animate-pulse">❤️</span></h3>



              <form ref={form} onSubmit={SendEmail} className="space-y-5 relative z-10">

                <div className="grid sm:grid-cols-2 gap-5">

                  <div style={{ opacity: 1, transform: 'none' }}>
                    <label htmlFor="name" className={`block text-[13px] font-bold ${ isDarkMode ? 'text-gray-400' : 'text-gray-900' } mb-1.5 ml-1`}>Name</label>
                    <input type="text" id="name" value={NewUserData.name}  onChange={(e) => setNewUserData({ ...NewUserData, name: e.target.value })} required ="" className={`w-full px-4 py-3 rounded-2xl bg-background border border-b-4   placeholder:text-text-secondary/40 font-ovo ${isDarkMode ? "text-gray-300 placeholder:text-gray-100/40 focus:border-gray-100 border-gray-500" : "text-gray-900 placeholder:text-gray-400 focus:border-gray-400 border-gray-300 "}  text-[15px] focus:outline-none  transition-all duration-300 hover:border-text-secondary/30 disabled:opacity-50`} placeholder="John Doe" name="name" ></input>
                  </div>


                  <div style={{ opacity: 1, transform: 'none' }}>
                    <label htmlFor="email" className={`block text-[13px] font-bold ${ isDarkMode ? 'text-gray-400' : 'text-gray-900' } mb-1.5 ml-1`}>Email</label>
                    <input type="email" id="email" value={NewUserData.email} onChange={(e) => setNewUserData({ ...NewUserData, email: e.target.value })} required="" className={`w-full px-4 py-3 rounded-2xl bg-background border border-b-4 font-ovo ${isDarkMode ? "text-gray-300 placeholder:text-gray-100/40 focus:border-gray-100 border-gray-500" : "text-gray-900 placeholder:text-gray-400 focus:border-gray-400 border-gray-300 "}  text-[15px] focus:outline-none  transition-all duration-300 hover:border-text-secondary/30 disabled:opacity-50`} placeholder="john.doe@example.com" name="email"></input>
                  </div>
                </div>


                <div style={{ opacity: 1, transform: 'none' }}>
                  <label htmlFor="message" className={`block text-[13px] font-bold ${ isDarkMode ? 'text-gray-400' : 'text-gray-900' } mb-1.5 ml-1`}>Message</label>
                  <textarea type="text" id="message" value={NewUserData.message} onChange={(e) => setNewUserData({ ...NewUserData, message: e.target.value })} name="message" rows="4" required="" className={`w-full px-4 py-3 rounded-2xl bg-background border border-b-4 font-ovo ${isDarkMode ? "text-gray-300 placeholder:text-gray-100/40 focus:border-gray-100 border-gray-500" : "text-gray-900 placeholder:text-gray-400 focus:border-gray-400 border-gray-300 "}  text-[15px] focus:outline-none  transition-all duration-300 hover:border-text-secondary/30 resize-none disabled:opacity-50`} spellCheck={false} placeholder="tell me about your project or just say hi..."></textarea>

                </div>


                <button
                  type="submit" disabled={sending}
                  className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2
                       px-6 py-2 bg-blue-600 text-white font-ovo text-[15px] rounded-2xl
                      transition-all duration-300
                      hover:bg-blue-700
                      shadow-sm hover:shadow-xl hover:shadow-blue-400/20
                      disabled:opacity-70 disabled:cursor-not-allowed
                      before:absolute before:top-0 before:left-[-140%] before:w-[120%] before:h-full
                      before:bg-white/5 before:skew-x-12
                      before:transition-all before:duration-700
                      hover:before:left-[120%]"
                >



                  {sending ? (

                    <>
                      <div className='py-1.5'>
                        <LoaderCircleIcon className="animate-spin text-white w-5 h-5" />

                      </div>

                    </>) : (<>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )
                  }
                </button>


              </form>




            </div>

            <div className={`${isDarkMode ? 'bg-gray-800  border-gray-500/30 hover:shadow-md hover:shadow-gray-400/10' : 'bg-white  hover:shadow-gray-400/20 border-gray-200 hover:shadow-md'}  rounded-3xl border  p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl   transition-all duration-500`} style={{ opacity: 1, transform: 'none' }}>
           
              <div className="relative flex items-center justify-center w-8 h-8 mb-7 mt-2 ">

                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-100" style={{ animationDuration: "2s" }}></div>

                <div className="w-5 h-5 bg-green-400 rounded-full z-10 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>

              </div>

              <h3 className="text-2xl font-ovo text-green-600 dark:text-green-500 mb-2 tracking-wide">Available for Work</h3>
              <p className= {`font-ovo text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-5`}>Open to new opportunities and exciting projects</p>
              <div className="px-4 py-1.5 border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 font-semibold text-xs rounded-full cursor-default hover:bg-green-500/20 transition-colors">Accepting Projects</div>

            </div>

          </div>

        </div >

      </div>

    </div >
  )
}

export default Contact
