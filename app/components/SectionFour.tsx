import React from "react";

export default function SectionFour() {
  return (
    <div id="testimonials" className="text-center py-20">
      <h4 className="text-2xl font-thin italic mb-4 text-[#CEB19C]">
        O que nossos clientes dizem
      </h4>
      <h1 className="text-5xl font-bold mb-10 text-[#494949]">
        Depoimentos
      </h1>
      <div className="flex justify-center px-4 md:px-20">
        {/*
          Substitua o 'src' do iframe pelo URL do seu vídeo de depoimento.
          Certifique-se de usar o formato de incorporação do YouTube (ex: https://www.youtube.com/embed/VIDEO_ID).
        */}
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/cEAb78dtDN0?si=Hs8O3L_J4kj6QSDs" // Exemplo: Substitua pelo seu vídeo
          title="Depoimento de Cliente"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-4xl aspect-video" // Garante que o vídeo seja responsivo
        ></iframe>
      </div>
    </div>
  );
}