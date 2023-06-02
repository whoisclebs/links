import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link'
export default function Home() {
  return (
  <section className="min-h-screen flex flex-col justify-center items-center p-16">
    <main className="py-8 max-w-[450px] border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-1 hover:shadow transition duration-200 bg-white flex-shrink-0">
      <img className="w-24 h-24 rounded-full mx-auto bg-slate-400" src="/avatar.png" alt="Clebson Avatar"/>
      <div className="text-gray-700 text-xs pt-4 text-center">
        <h1 className="text-slate-900 text-3xl">@whoisclebs</h1>
        <h2 className="pt-4 text-xl">Clebson Augusto Fonseca</h2>
        <p className="pt-2 text-justify text-sm">
          🚀 Engenheiro de software, professor, palestrante e criador de conteúdo. Atualmente sou professor particular e meu foco tem sido distribuir conhecimento e contribuir no open source.
        </p>
        <ul className="underline ">
          <li className="pt-2 text-sm">
              <Link href="https://www.amazon.com/dp/B0C39PLQMQ?ref_=pe_3052080_276849420">
                <button type="button" className="relative px-6 py-2 group w-full">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black " />
                  <span className="relative text-black ">Compre meu livro em pre-venda(versão em inglês)</span>
                </button>
              </Link>
          </li>
          <li className="pt-2 text-sm">
              <Link href="https://www.buymeacoffee.com/whoisclebs">
                <button type="button" className="relative px-6 py-2 group w-full">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black " />
                  <span className="relative text-black ">Buy me a ☕</span>
                </button>
              </Link>
          </li>
          <li className="pt-2 text-sm">
              <Link href="https://whoisclebs.space">
                <button type="button" className="relative px-6 py-2 group w-full">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" />
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black " />
                  <span className="relative text-black ">Acesse meu site</span>
                </button>
              </Link>
          </li>
        </ul>
        <div className="flex pt-4 space-x-6 justify-center">
          <a href="https://github.com/whoisclebs" className="text-gray-500 hover:text-gray-900">
            <FaGithub size={25}/>
          </a>
          <a href="https://dev.to/whoisclebs" className="text-gray-500 hover:text-gray-900">
            <FaDev size={25}/>
          </a>
          <a href="https://twitter.com/whoisclebs" className="text-gray-500 hover:text-gray-900">
            <FaTwitter size={25}/>
          </a>
          <a href="https://medium.com/@clebson" className="text-gray-500 hover:text-gray-900">
            <FaMedium size={25}/>
          </a>
          <a href="https://www.instagram.com/whoisclebs/" className="text-gray-500 hover:text-gray-900">
            <FaInstagram size={25}/>
          </a>
          <a href="https://www.youtube.com/@whoisclebs" className="text-gray-500 hover:text-gray-900">
            <FaYoutube size={25}/>
          </a>
          <a href="https://www.linkedin.com/in/whoisclebs/" className="text-gray-500 hover:text-gray-900">
            <FaLinkedin size={25}/>
          </a>
        </div>
      </div>
    </main>
  </section>
  )
}
