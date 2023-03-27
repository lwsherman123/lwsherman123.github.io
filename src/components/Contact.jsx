import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container } from 'react-bootstrap';

const Contact = () => {
    const ref = useRef()
    const [success, setSuccess] = useState(null);
  
    const handleSubmit =e=>{
     e.preventDefault()
  
    emailjs.sendForm('service_60k2wqw', 'template_obcgbzq', ref.current, 'CkYaf3ZCbxe52tIRA')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  }

  return (
    <section className='contact' id="connect">
        <Container className='contact-container'>
            <Col sm={6}>
            </Col>
            <Col sm={6}>
                <form ref={ref} onSubmit={handleSubmit}>
                    <h2> Contact Me</h2>
                    <input placeholder="Name" name="name" />
                    <input placeholder="Email" email="email" />
                    <textarea placeholder="Write message here" message="message" rows={10}/>
                    <button type="submit"> Send</button>
                    {success && 
                        "Youre message has been sent. Ill get back to you ASAP"}
                </form>
            </Col>
        </Container>
    </section>
  )
  
}

export default Contact