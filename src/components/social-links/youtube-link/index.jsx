export const YoutubeLogo = () => {
  return (
    <a
      className="transition-all duration-100 md:hover:-translate-y-0 translate-y-2"
      href="https://www.youtube.com/@samdenton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        height="40px"
        width="40px"
        className="transition-all duration-75 h-16 w-auto fill-black group hover:scale-110 hover:fill-[#FF0000]"
        alt="youtube-alt"
        viewBox="0 0 49 49"
      >
        <rect
          width="30"
          height="30"
          fill="none"
          strokeWidth={2}
          stroke="black"
          x={9.5}
          y={9.5}
          rx={6}
          className="group-hover:stroke-[#FF0000]"
        />
        <path
          d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229
			c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113
			c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"
        />
      </svg>
    </a>
  );
};

export default YoutubeLogo;
