import Image from "next/image";

export default function SectionTwo() {
  return (
<>
      <div id="about" className="text-center py-20">

      <div className="flex justify-center items-center pb-4">
          <Image
            src="/icone.png"
            alt="Logomarca Trindade Fisioterapia e Pilates"
            width={50}
            height={34}
          />
        </div>

        <h4 className="text-2xl font-thin italic mb-4 text-[#CEB19C]">
          Bem-vindos à
        </h4>

        <h1 className="text-5xl font-bold mb-4 text-[#494949]">
          Trindade Fisioterapia e Pilates
        </h1>

        <p className="text-xl mb-4 px-5 lg:px-100">
          Cuidar do corpo é também cuidar da mente. Aqui você encontra um espaço acolhedor,
          profissionais capacitados e práticas que promovem equilíbrio, saúde e bem-estar.
        </p>

        <p className="text-xl lg:px-100">
          Movimento com propósito. Cuidado com excelência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 pt-15 px-5 lg:px-20">
          <div>
            <p className="text-xl px-1 lg:px-20">
              Pilates fortalece o corpo com suavidade e consciência, melhorando a postura, a flexibilidade e a respiração. Ideal para quem busca prevenir lesões e manter a saúde do corpo em dia.
              <br/> Fisioterapia trata e previne disfunções do movimento. Com técnicas personalizadas, auxiliamos na reabilitação de lesões, alívio de dores crônicas e recuperação funcional, devolvendo liberdade e qualidade de vida.
              <br/>Massoterapia é um convite ao relaxamento profundo. Reduz o estresse, alivia tensões musculares e melhora a circulação. Um cuidado que acolhe corpo e mente.
              <br/>Estética com propósito: nossa abordagem valoriza sua beleza natural, com tratamentos que cuidam da pele, combatem o inchaço e promovem bem-estar e autoestima.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-8">
              <Image
                src="/sectiontwo.jpg"
                alt="Ícone da Reidente"
                width={440}
                height={440}
              />
            </div>
            
          </div>
        </div>
      </div> 
    </>

    
  );
}
