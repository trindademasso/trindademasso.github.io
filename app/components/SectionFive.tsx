import Image from "next/image";

export default function SectionFive() {
  return (
  
    <>
      <div id="contact" className="text-center py-20 bg-[#ebebeb]">

        <h4 className="text-2xl font-thin italic mb-4 text-[#CEB19C]">
          Descubra
        </h4>
        <h1 className="text-5xl font-bold mb-15 text-[#494949]">
          Onde Estamos
        </h1>
        <div className="flex justify-center items-center px-10 md:px-20">
        <form className="font-mono w-full max-w-xl bg-white p-6 shadow-md text-left space-y-4">
          <div>
            <input
              placeholder="Nome"
              type="text"
              id="nome"
              name="nome"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]"
              required
            />
          </div>

          <div>
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]"
              required
            />
          </div>

          <div>
            <input
              placeholder="Telefone"
              type="tel"
              id="telefone"
              name="telefone"
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]"
            />
          </div>

          <div>
            <textarea
              placeholder="Assunto"
              id="assunto"
              name="assunto"
              rows={4}
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-sans uppercase bg-[#f1345d] hover:bg-[#c92b4c] text-white py-3 px-8 font-semibold text-xs transition duration-300 w-full"
          >
            Enviar
          </button>
        </form>
        </div>
      </div> 
    </>
        
  );
}
