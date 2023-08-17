import Link from "next/link"

const HomePage = () => {
  return (
    <div className="header">
      <h2>Next App</h2>
      <ul className="navbar">
        <li><Link href="/portfolio">PortFolio</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/clients">Clients</Link></li>
      </ul>
    </div>
  )
}

export default HomePage