import Image from "next/image";

export default function SectionThree() {
  return (
    <>
      <div id="services" className="text-center py-20 bg-[#ebebeb]">
        <h4 className="text-2xl font-thin italic mb-4 text-[#CEB19C]">
          Conheça nossos
        </h4>
        <h1 className="text-5xl font-bold mb-4 text-[#494949]">
          Serviços
        </h1>
      </div>

      <div className="lg:grid lg:grid-cols-6 gap-20 px-20 pb-30 bg-[#ebebeb]">
        <div className="text-center col-start-1 col-end-3">
          <div className="flex justify-center items-center pb-8">
            <Image
              src="/trindade/icone.png"
              alt="Ícone Fisioterapia"
              width={50}
              height={34}
            />
          </div>
          <h5 className="text-2xl font-bold mb-4 text-[#494949]">
            Fisioterapia & Pilates
          </h5>
          <p className="text-xl mb-8">
            Fisioterapia geral e aulas de Pilates adulto, infantil e idoso. Atendimento personalizado e focado no seu bem-estar.
          </p>
        </div>

        <div className="text-center col-start-3 col-end-5">
          <div className="flex justify-center items-center pb-8">
            <Image
              src="/trindade/icone.png"
              alt="Ícone Massagem"
              width={50}
              height={34}
            />
          </div>
          <h5 className="text-2xl font-bold mb-4 text-[#494949]">
            Terapias Manuais
          </h5>
          <p className="text-xl mb-8">
            Agulhamento a seco, ventosaterapia, massagem relaxante, com pedras quentes e drenagem linfática para aliviar dores e tensões.
          </p>
        </div>

        <div className="text-center col-start-5 col-end-7">
          <div className="flex justify-center items-center pb-8">
            <Image
              src="/trindade/icone.png"
              alt="Ícone Estética"
              width={50}
              height={34}
            />
          </div>
          <h5 className="text-2xl font-bold mb-4 text-[#494949]">
            Estética & Pós-operatório
          </h5>
          <p className="text-xl mb-8">
            Tratamentos faciais, corporais e cuidados no pós-operatório com técnicas modernas como laserterapia e técnica ILIB.
          </p>
        </div>

        <div className="text-center col-start-2 col-end-4">
          <div className="flex justify-center items-center pb-8">
            <Image
              src="/trindade/icone.png"
              alt="Ícone Terapias"
              width={50}
              height={34}
            />
          </div>
          <h5 className="text-2xl font-bold mb-4 text-[#494949]">
            Terapias Complementares
          </h5>
          <p className="text-xl mb-8">
            Sessões de auriculoterapia à laser e outras abordagens integrativas para apoiar seu equilíbrio físico e emocional.
          </p>
        </div>

        <div className="text-center col-start-4 col-end-6">
          <div className="flex justify-center items-center pb-8">
            <Image
              src="/trindade/icone.png"
              alt="Ícone Aula de Pilates"
              width={50}
              height={34}
            />
          </div>
          <h5 className="text-2xl font-bold mb-4 text-[#494949]">
            Aulas de Pilates Clínico
          </h5>
          <p className="text-xl mb-8">
            Aulas individuais ou em grupo, adaptadas às suas necessidades, com planos mensais, trimestrais, semestrais e anuais.
          </p>
        </div>
      </div>
    </>
  );
}
