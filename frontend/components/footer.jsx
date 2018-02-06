import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const Footer = () => {

  return (
    <div id="footer">
      <a href="https://github.com/queenofdexterity" target="_blank"><FaGithub /></a>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/areejhassan" target="_blank"><FaLinkedin /></a>
    </div>
  );
};

export default Footer;
