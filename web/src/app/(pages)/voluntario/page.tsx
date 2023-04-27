'use client'

import { useState } from "react"

export default function Voluntario() {
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [tel, setTel] = useState<string>('')
  const [sobre, setSobre] = useState<string>('')

  const submitForm = () => {
    console.log(nome, email, tel, sobre)
    alert('Cadastro enviado!. (só que não)')
  }

  return(
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-12">Cadastre para ser um voluntario</h1>

      <form onSubmit={submitForm} className="w-4/5">
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">Nome Completo</label>
          <div className="mt-2">
            <input type="text" onChange={(e) => setNome(e.target.value)} className="block w-full rounded-md border-0 mb-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-md border-0 mb-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
          <div className="mt-2">
            <input type="text" onChange={(e) => setTel(e.target.value)} className="block w-full rounded-md border-0 mb-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="col-span-full mb-3">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Sobre</label>
          <div className="mt-2">
            <textarea rows={3} onChange={(e) => setSobre(e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''}/>
          </div>
          <p className="mt-1 text-sm leading-6 text-gray-600">Escreva um pouco sobre você.</p>
        </div>

        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Enviar currículo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Enviar um arquivo</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">ou arraste e solte</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF até 10MB</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
        </div>
      </form>
    </div>
  )
}
