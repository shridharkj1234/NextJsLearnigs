import Link from "next/link"
const HomePage = () => {
  return (
    <div>
      HomePage from Next Js
      <ul>
        <li><Link href="/portfolio">PortFolio</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/clients">Clients</Link></li>
      </ul>
    </div>
  )
}

export default HomePage