const Footer = () => {
  return (
    <footer className="bg-black text-md text-white text-center p-3 py-7">
     
      copyright © {new Date().getFullYear()} — sam denton. powered by{" "}
      <a
        className="underline underline-offset-8"
        href="mailto:nathanielrbowman@gmail.com"
      >
        nathaniel bowman
      </a>
    </footer>
  );
};

export default Footer;
