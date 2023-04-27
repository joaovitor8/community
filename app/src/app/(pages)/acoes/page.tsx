/* eslint-disable @next/next/no-img-element */
import { Dados, Api } from "@/app/api/api"
//import Image from "next/image"
import Link from "next/link"

export default async function Acoes() {
  const api = await Dados()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-12">Ações Sociais da Comunidade</h1>

      {api.map((e: Api, chave: number|string ) =>
        <div key={chave} className="w-4/5 mb-10 flex items-center   max-md:flex-col">

          <div className="text-center mr-2">
            <h2 className="text-2xl mb-2">{e.name}</h2>
            <img src={e.image} alt="img" />
            {/* <Image src={e.image} alt="img" width={'200'} height={'200'}/> */}
          </div>

          <div className="h-40 flex flex-col justify-around items-start   max-md:h-20 max-md:justify-normal">
            <p className="text-1xl   max-md:mb-3">{e.description}</p>
            <button className="bg-teal-500 rounded-xl px-3 py-1"> <Link href={'/detalhes'}>Saiba mais</Link> </button>
          </div>

        </div>
      )}

      <div>
        <p>Faça parte dessa Comunidade doando ou sendo voluntario</p>
        <div className="flex justify-evenly mt-3">
          <button className="bg-teal-500 rounded-xl px-3 py-1"><Link href={'/doacao'}>Faça uma Doação</Link></button>
          <button className="bg-teal-500 rounded-xl px-3 py-1"><Link href={'/voluntario'}>Seja Voluntario</Link></button>
        </div>
      </div>

    </div>
  )
}
