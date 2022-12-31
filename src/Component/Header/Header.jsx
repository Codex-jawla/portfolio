import HeaderCss from './Header.css';
import ME from '../../assets/me1.png';
import CTA from './CTA';
import Social from './Social';
const Header=()=>{
    return (
        <header>
            <div className="container header_container">
                <h3>Hey, I'm </h3>
                <h1>Himanshu Jawla</h1>
                <h5 className='text-light'>Backend-developer </h5>
                <CTA />
                <div className="me">
                    <div className="hello"> <h1>Hello From India</h1></div>
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll_down'>Scroll down</a>
                <Social/>

            </div>
        </header>
    )
}
export default Header;