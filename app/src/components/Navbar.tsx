import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="h-20 px-5 mb-5 flex justify-between items-center border-b-2 max-md:h-auto max-md:flex-col">
      <h1 className="text-teal-700 text-3xl font-bold max-md:mt-2 max-md:mb-3"><Link href={'/'}>&lt;Comunidade/&gt;</Link></h1>

      <nav className="h-10 w-2/4 flex items-center max-md:my-3 max-md:w-4/5">
        <ul className="w-full flex justify-evenly">
          <li className="text-teal-700 font-medium max-md:mb-1"><Link href={'/'}>HOME</Link></li>
          <li className="text-teal-700 font-medium max-md:mb-1"><Link href={'/acoes'}>AÇÕES</Link></li>
          <li className="text-teal-700 font-medium max-md:mb-1"><Link href={'/detalhes'}>DETALHES</Link></li>
          <li className="text-teal-700 font-medium max-md:mb-1"><Link href={'/sobre'}>SOBRE</Link></li>
        </ul>
      </nav>
    </header>
  )
}
