const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex  flex-wrap gap-5 justify-center items-center">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
           <a
              className="flex items-center justify-center w-full h-full"
              href="https://github.com/koukabel"
              target="_blank"
              rel="noreferrer">
          <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        
        <div className="social-icon">

          <a
            className="flex items-center justify-center w-full h-full"
            href="https://www.linkedin.com/in/khouloud-belkhir/"
            target="_blank"
            rel="noreferrer">
          <img src="assets/icons/linkedin.png" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Khouloud Belkhir. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
