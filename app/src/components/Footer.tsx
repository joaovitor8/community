import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 h-64 text-white mt-5 flex justify-evenly items-center max-md:flex-col">
      <div>
        <p className="mb-2">2023 Comunidade &copy;</p>
        <p className="mb-2">Brasil.</p>
        <p className="mb-2">Contato: contato@comunidade.org</p>
      </div>

      <div>
        <p className="mb-2 text-center">SIGA-NOS NAS REDES SOCIAIS</p>
        <div className="flex">
          <Link href={'#'}><Image src={'/facebook.png'} alt="facebook" width={'40'} height={'40'} className="mx-2"/></Link>
          <Link href={'#'}><Image src={'/instagram.png'} alt="instagram" width={'40'} height={'40'} className="mx-2"/></Link>
          <Link href={'#'}><Image src={'/linkedin.png'} alt="linkedin" width={'40'} height={'40'} className="mx-2"/></Link>
          <Link href={'#'}><Image src={'/twitter.png'} alt="twitter" width={'40'} height={'40'} className="mx-2"/></Link>
          <Link href={'#'}><Image src={'/youtube.png'} alt="youtube" width={'40'} height={'40'} className="mx-2"/></Link>
        </div>
      </div>
    </footer>
  )
}
