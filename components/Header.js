import Link from 'next/link';

const Header = () => {
  return (
    <div className='relative z-30 w-full'>
    <header className="header flex flex-row w-full">
        <h3 className="logo font-semibold text-2xl w-1/4 "><span className="text-main_red">Echo</span>Flick</h3>
        
        <ul className="header-ul flex w-1/2 justify-evenly  mt-2 ">
            <li key="home"><Link href="/" className='hover:text-main_red '>Home</Link></li>
            <li key="movies"  className='hover:text-main_red  '><Link href="/movie">Movies</Link></li>
            <li key="tv"  className='hover:text-main_red '><Link href="tv">Tv Shows</Link></li>
            <li key="lists"  className='hover:text-main_red '><Link href="/">My Lists</Link></li>
        </ul>
    </header>
    </div>
  )
}


export default Header