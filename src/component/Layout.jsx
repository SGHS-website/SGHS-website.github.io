import Footer from "./Footer"
import Header from "./Header"
import "../styles/layout.css"

const Layout = (props) =>{
    return(
        <div className="layout">
            <Header/>
            <main className="main">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout