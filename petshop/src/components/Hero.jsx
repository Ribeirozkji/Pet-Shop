const Hero = ({ titulo, subtitulo }) => {
  return (
    <div className="bg-blue-600 text-white py-20 px-6 text-center rounded-b-[3rem] shadow-lg">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
        {titulo}
      </h1>
      <p className="text-xl opacity-90 font-light">
        {subtitulo}
      </p>
    </div>
  );
};

export default Hero;