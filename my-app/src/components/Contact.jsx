import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact()
{
    const form=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_ozopmme','',form.current,''
        )
        .then(()=>{
            alert('Message Sent');
        },(error)=>{
            console.error('FAILED...',error.text);
        })
    }
    return(
        <section className="container p-10" id="contact">
            <div className="box">
                <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
                    <input type="text" name="uname" placeholder="Your Name" required className="p-2 border rounded" />
                    <input type="email" name="uemail" placeholder="Your Email" required className="p-2 border rounded" />
                    <textarea name="message"  rows="5" placeholder="Your Message"/>
                    <button type="submit" className="bg-blue-500 text-white py-2">Send</button>
                </form>
            </div>
        </section>
    )
}