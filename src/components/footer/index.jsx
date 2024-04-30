const Footer = () => {
  return (
    <footer
      className={`md:fixed md:bottom-0 md:right-0 bottom-auto text-md 
    bg-transparent text-black text-center md:text-right p-4`}
    >
      <p>
        copyright © {new Date().getFullYear()} — sam denton. powered by{" "}
        <a
          className="underline underline-offset-8"
          href="mailto:nathanielrbowman@gmail.com"
        >
          nathaniel bowman
        </a>
      </p>
    </footer>
  );
};

export default Footer;
