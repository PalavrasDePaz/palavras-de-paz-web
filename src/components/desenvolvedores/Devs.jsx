import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Devs() {
  return (
    <>
    <div className='titulo-devs'>
      <p>EQUIPE RESPONSÁVEL PELA CRIAÇÃO DO SITE</p>
    </div>
    <container className="primeiro-container">
      <div className='adjust-dev'>

        <Image style={{border: "2px solid #18CA99", borderRadius:"50%"}} src="/static/images/devs/simon.svg" width="248px" height="248px" alt="simon-image" />
        <p>ADRYEL SIMON</p>
        <p>DEV. FRONTEND</p>
        <Link href="https://www.linkedin.com/in/adryelsimon" >Linkedin</Link>
      </div>

      <div className='adjust-dev'>
      <Image src="/static/images/devs/amanda.png" width="248px" height="248px" alt="amanda-image" />
      <p>AMANDA CAROLINA</p>
        <p>UX/UI DESIGNER</p>
        <Link href="https://www.linkedin.com/in/amandacarolinad" >Linkedin</Link>

      </div>

      <div className='adjust-dev'>
      <Image src="/static/images/devs/ana.png" width="248px" height="248px" alt="ana-image" />
      <p>ANA CAROLINE</p>
        <p>UX/UI DESIGNER</p>
        <Link href="https://www.linkedin.com/in/ana-caroline-comuniam-917b09184" >Linkedin</Link>
      </div>

      <div className='adjust-dev'>
      <Image src="/static/images/devs/analaura.png" width="248px" height="248px" alt="analaura-image" />
      <p>ANA LAURA</p>
        <p>DEV. BACKEND</p>
        <Link href="https://www.linkedin.com/in/alaurai" >Linkedin</Link>
      </div>
    </container>

    <container className="segundo-container">
      <div className='adjust-dev'>
        <Image  src="/static/images/devs/enio.png" width="248px" height="248px" alt="enio-image" />
        <p>ENIO SANTINELLI FILHO</p>
        <p>DEV. FRONTEND</p>
        <Link href="https://www.linkedin.com/in/eniosfilho" >Linkedin</Link>
      </div>

      <div className='adjust-dev'>
      <Image src="/static/images/devs/joao.png" width="248px" height="248px" alt="joao-image" />
      <p>JOÃO VITOR</p>
        <p>DEV. BACKEND</p>
        <Link href="https://www.linkedin.com/in/joao-vitor-silva-ramos" >Linkedin</Link>

      </div>

      <div className='adjust-dev'>
      <Image src="/static/images/devs/karen.png" width="248px" height="248px" alt="karen-image" />
      <p>KAREN GARCIA</p>
        <p>PRODUCT OWNER</p>
        <Link href="https://www.linkedin.com/in/karen-nabarrete-garcia-295a8397" >Linkedin</Link>
      </div>

      <div className='adjust-dev'>
      <Image src="/static/images/devs/tais.png" width="248px" height="248px" alt="tais-image" />
      <p>TAIS INGRID</p>
        <p>UX/UI DESIGNER</p>
        <Link href="https://www.linkedin.com/in/tais-aguilar-55a055234" >Linkedin</Link>
      </div>
    </container>

    <div className='button-devs'>
      <Link href="/">Voltar para a Home</Link>
    </div>


    </>
  )
}

export default Devs
