
const Header = () => {
  return (
    <header className="header flex flex-row w-full ">
        <h3 className="logo font-semibold text-2xl w-1/4 "><span className="text-main_red">Echo</span>Flick</h3>
        <ul className="header-ul flex w-1/2 justify-evenly  mt-2">
            <li key="home"><a>Home</a></li>
            <li key="movies"><a>Movies</a></li>
            <li key="tv"><a>Tv Shows</a></li>
            <li key="lists"><a>My Lists</a></li>
        </ul>
    </header>
  )
}


export default Header