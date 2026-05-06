import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/GregoryTrevor" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ohanugo-evangel-186a2b35b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed and built by <a href="https://github.com/GregoryTrevor" target="_blank" rel="noreferrer">Ohanugo Evangel</a> 💜</p>
    </footer>
  );
}

export default Footer;
