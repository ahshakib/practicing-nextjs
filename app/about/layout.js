import Navbar from "../components/Navbar"


function AboutLayout({children}) {
  return (
    <div className="flex min-h-screen">
      <Navbar/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

export default AboutLayout