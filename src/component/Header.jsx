import '../styles/layout.css'

const Header = () =>{
    return(
        <header className='header'>
            <div className='contents'>
                <div>로고</div>

                <nav className='navigation'>
                    <ul>
                        <li>메뉴1</li>
                        <li>메뉴2</li>
                        <li>메뉴3</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header