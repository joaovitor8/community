/* eslint-disable @next/next/no-img-element */
import { Dados, Api } from "@/app/api/api"
//import Image from "next/image"

export default async function Detalhes() {
  const api = await Dados()

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-12">Detalhes do programa social</h1>

      {api.map((e: Api, chave: number|string ) =>
        <div key={chave} className="w-4/5 mb-10 flex max-md:flex-col max-md:items-center">

          <div className="text-center mr-2">
            <h2 className="text-2xl mb-2">{e.name}</h2>
            <img src={e.image} alt="img"/>
            {/* <Image src={e.image} alt="img" width={'200'} height={'200'}/> */}
          </div>

          <div className="flex flex-col justify-end">
            <p className="mt-6"> <span className="font-bold">Descrição:</span>  {e.description}</p>
            <p className="mt-6"> <span className="font-bold">Metas:</span> {e.goals}</p>
            <p className="mt-6"> <span className="font-bold">Impacto:</span> {e.impact}</p>
          </div>

        </div>
      )}
    </div>
  )
}
