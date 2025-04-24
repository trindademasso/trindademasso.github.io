import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <nav className="w-full z-50 bg-white/90 text-[#494949] font-mono font-thin text-xs backdrop-blur-md shadow-md">
      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto px-4 py-3">
        
        {/* Grupo esquerdo alinhado à direita */}
        <div className="absolute left-0 flex gap-8 justify-end w-1/3">
          <p>Copyright Trindade, 2025</p>
        </div>

        {/* Logo centralizado */}
        <div className="flex justify-center w-1/3">
          <Link href="/trindade">
            <Image
              src="/trindadeicone.png"
              alt="Site logo"
              width={50}
              height={34}
              priority
            />
          </Link>
        </div>

        {/* Grupo direito alinhado à esquerda */}
        <div className="absolute right-0 flex gap-8 justify-start w-1/3">
          Todos os direitos reservados
        </div>
      </div>
    </nav>
  );
}
