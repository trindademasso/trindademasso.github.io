import Image from "next/image";

export default function SectionFive() {
  return (
    <div id="contact" className="text-center py-20 bg-[#ebebeb]">
      <h4 className="text-2xl font-thin italic mb-4 text-[#CEB19C]">Entre em</h4>
      <h1 className="text-5xl font-bold mb-15 text-[#494949]">Contato</h1>
      
      <div className="flex justify-center items-center px-10 md:px-20">
        <form
          action="https://formspree.io/f/mgvkqydk"
          method="POST"
          className="font-mono w-full max-w-xl bg-white p-6 shadow-md text-left space-y-4"
        >
          <input name="nome" type="text" placeholder="Nome*" required className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]" />
          <input name="email" type="email" placeholder="E-mail*" required className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]" />
          <input name="telefone" type="tel" placeholder="Telefone" className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]" />
          <textarea name="assunto" placeholder="Assunto*" required rows={4} className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-[#CEB19C]" />
          
          <button type="submit" className="uppercase bg-[#f1345d] hover:bg-[#c92b4c] text-white py-3 px-8 font-semibold text-xs w-full">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

