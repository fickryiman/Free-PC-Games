import React from 'react';
import me from '../assets/me.png';

const AboutMe = () => (
  <div className="aboutme-container">
    <h2>Hello, My Name is Fickry Bil Iman</h2>
    <br />
    <img src={me} alt="fickrybiliman" className="my-foto" />
    <br />
    <p className="aboutme-text">
      Free-PC-Games is a Single Page Application that shows the current trending
      free games for the PC Platform (data source is taken from FreeToGame API);
      This application retrieves game data and displays it to the user for
      informative purposes in a well-structured and interactive UI.
    </p>
  </div>
);

export default AboutMe;
