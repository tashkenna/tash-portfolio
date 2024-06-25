import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="flex justify-between items-center p-4 mb-4">
        <Link href="/" className="flex space-x-4">
         <Image 
         src="/NATASHAKENNALOGO-white.jpg"
         width={700}
         height={114.8}
         priority={true}
         alt="Natasha Kenna Logo"
         style={{ height: 'auto', width: '100%' }}/>
         </Link>




        <div className="flex justify-between items-baseline p-4 gap-5" >
        {/* <Link
          href="/projects"
          className="text-[#806D40] antialiased"
        >
          projects
        </Link>
     */}
        <h1 className="text-1xl text-black">꩜ coming soon 𓇼</h1>
{/* 
        <Link 
        href='/about'
        className="text-[#806D40] antialiased">
        about
        </Link> */}

        {/* <h1 className="text-2xl text-[#806D40]">𓇼</h1> */}
{/* 
        <Link
          href="/contact"
          className= "text-[#806D40] antialiased"
        >
          contact
        </Link> */}

        {/* <h1 className="text-2xl text-[#806D40]">𓆝</h1> */}

        </div>
      </div>
    )
}