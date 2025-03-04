import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useState, useEffect } from 'react'
import '../styles/Banner.css'


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "AI Engineer", "Data Engineer", "Full-Stack Developer"]
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta /2.5)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>{`Hi, I'm Luke`} <span className="wrap"> {text} </span></h1>
            <p> Scroll down to take a look at a bit about me, my skills and projects</p>
            <a href="#connect">
             <button onClick={() => console.log('connect')}> Lets connect <ArrowRightCircle size={25}/></button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
