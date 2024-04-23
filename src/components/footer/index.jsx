const Footer = () => {
  return (
    <footer className="text-md text-black text-center md:text-right p-3 py-7">
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
