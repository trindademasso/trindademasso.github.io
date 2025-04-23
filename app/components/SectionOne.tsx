export default function SectionOne() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(home2.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex justify-center items-center w-full h-full text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
          Saúde, equilíbrio e bem-estar em cada detalhe
          </h1>
          <p className="text-xl mb-8 max-w-xl mx-auto">
            Cuidamos de você com técnicas modernas e atenção personalizada.
            Fisioterapia, estética, bem-estar e equilíbrio em um só lugar.
          </p>
          <a
            href="#servicos"
            className="font-sans uppercase bg-[#f1345d] hover:bg-[#c92b4c] text-white py-3 px-8 font-semibold text-xs transition duration-300"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </div>
  );
}
