import Image from "next/image";

export default function SectionFour() {
  return (
    <>
      <div id="where" className="text-center py-20">

        <h4 className="text-2xl font-thin italic mb-4 text-[#CEB19C]">
          Descubra
        </h4>
        <h1 className="text-5xl font-bold mb-20 text-[#494949]">
          Onde Estamos
        </h1>
        <div className="md:grid md:grid-cols-1 md:grid-cols-2 gap-20 px-10 md:px-20">
          <div className="text-center">
            <div className="flex justify-center items-center pb-8">
              <Image
                src="/trindade2/mogi.png"
                alt="Ícone da Reidente"
                width={440}
                height={440}
              />
            </div>
            <h5 className="text-2xl font-bold mb-4 text-[#494949]">
              Mogi das Cruzes
            </h5>
            <p className="text-xl mb-4">
            Av. Pedro Machado, 395 - Sala 16 - 1º andar - Vila Mogi Moderno, Mogi das Cruzes - SP, 08717-720
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-8">
              <Image
                src="/trindade2/sp.png"
                alt="Ícone da Reidente"
                width={440}
                height={440}
              />
            </div>
            <h5 className="text-2xl font-bold mb-4 text-[#494949]">
              São Paulo
            </h5>
            <p className="text-xl">
            Alameda Santos, 211 - 1601 - Paraíso, São Paulo - SP, 01419-000
            </p>
          </div>
        </div>
      </div> 
    </>
  );
}
