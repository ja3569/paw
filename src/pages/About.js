import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

const About = () => {
  const descriptionBarRef = useRef();

  useEffect(() => {
    const descriptionBar = descriptionBarRef.current;
    const words = descriptionBar.textContent.split(' ');
  
    descriptionBar.textContent = '';  // Clear the initial content
  
    // helper function to change color and font size of a word
    function changeWordStyle(word) {
      word.style.color = 'orange';
    }
  
    // add mouseover event listener to each word
    words.forEach(word => {
      const newSpan = document.createElement('span');
      newSpan.innerHTML = word + ' ';
      newSpan.addEventListener('mouseover', () => {
        changeWordStyle(newSpan);
      });
      newSpan.addEventListener('mouseout', () => {
        newSpan.style.color = 'black';
        newSpan.style.fontSize = '1em';
      });
      descriptionBar.appendChild(newSpan);
    });
  }, []);
  

  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="../sources/front.mp4" type="video/mp4" />
        </video>
        <div className="video-text">PAW PAW</div>
      </div>

      <div className="description-bar" ref={descriptionBarRef}>
        <span>PawPaw </span><span>is dedicated to connecting college students with therapy cats</span>, <span>whether they need a furry companion for a short-term therapy session </span><span>or are looking to adopt a long-term therapy cat</span>.<span> <br/>Our mission is to promote mental health and happiness </span><span>by providing students with the opportunity to request or adopt a loving feline friend. 🐾</span>
      </div>  

      <div className="content-container">
        <div className="card">
          <img src="../sources/cat1.png" alt="" />
          <div className="card-title">Latest News</div>
          <p>Want to stay in the know about the latest and greatest news on therapy cats in your area? Click here to stay on top of the freshest updates with our news that's refreshed every second!</p>
          <Link to="/articles" className="btn">PAW</Link>
        </div>
        <div className="card">
          <img src="../sources/cat2.png" alt="" />
          <div className="card-title">Request Therapy Cat</div>
          <p>Get stress from your college workload? Need a therapy cat for a short-term session? PawPaw is here to help! Simply fill out a request form and we'll connect you with a loving therapy cat in your area.</p>
          <Link to="/request" className="btn">PAW</Link>
        </div>
        <div className="card">
          <img src="../sources/cat3.png" alt="" />
          <div className="card-title">Adopt Cat</div>
          <p>Want to experience the joy of having a furry friend by your side at all times? Adopt a therapy cat and give them a loving forever home. Your feline friends are ready to provide emotional support.</p>
          <Link to="/adopt" className="btn">PAW</Link>
        </div>
      </div>

      <div className="footer">
        <span>Designed by Ari An🐾</span>
      </div>
    </>
  );
};

export default About;
