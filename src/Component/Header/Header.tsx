import logo from '../../img/logo.png'
import sprite from '../../img/icons/icons.svg'
import {NavLink} from 'react-router-dom'
import {LinkToPage} from "./LinkToPage";
import {useState} from "react";
import {mainPath} from '../../CONST/pathConst';
import Swal from "sweetalert2";

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


// const MiddleHeading = () => {
//     return (
//         <div id="middle_heading">  
//            <Link to="https://www.facebook.com/">
//              <FontAwesomeIcon icon={faFacebookF} width="50" height="30"/>          
//            </Link> 
//         </div>
//     );
// };
// export default MiddleHeading;

export const Header = () => {
    const [open, setOpen] = useState(false)
    const openMenu = () => {
        setOpen(!open)
    }
    const onShowPhone = () => {
        Swal.fire('Зателефонувати нам', "<a style='color: #1e88e5; font-size: 1.5rem'  href=\"tel:+0977550966\">" +
            "+38 097 755 09 66</a>")
    }
    const onShowEmail = () => {
        Swal.fire('Написати нам', "<a style='color: #1e88e5; font-size: 1.5rem' " +
            "href=\"mailto:projektmaket@gmail.com\">projektmaket@gmail.com</a>")
    }
    const opShowMap = () => {
        Swal.fire('Мы знаходимося', "" + "<a style='color: #1e88e5; font-size: 1.5rem' " +
            "href=\"adress\">м. Вишневе, вул. Залізнична 92</a>" +
            "<iframe\n" +
            "src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8076.933186982056!2d30.352162856793615!3d50.383805813513376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca24d93d4597%3A0x8ef078bd7f4d39e2!2z0LLRg9C70LjRhtGPINCX0LDQu9GW0LfQvdC40YfQvdCwLCA5Miwg0JLQuNGI0L3QtdCy0LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC7Liwg0KPQutGA0LDRl9C90LAsIDA4MTMy!5e0!3m2!1suk!2spl!4v1626549872839!5m2!1suk!2spl\n" +
            "width=\"100%\" height=\"450\"  loading=\"lazy\"></iframe>")
    }
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-nav-container">
                    <NavLink to={mainPath}>
                        <img src={logo} alt="логотип" width="60"/>
                    </NavLink>
                    <div className={open ? "menu_btn open" : "menu_btn"} onClick={openMenu}>
                        <div className="menu_btn_burger"></div>
                    </div>
                </div>
                <ul className={open ? "nav-container open" : "nav-container"}>
                    <li>
                        <ul className="nav" onClick={openMenu}>
                            <LinkToPage  label={'Головна'} to={mainPath} activeOnlyWhenExact={true}/>
                            <LinkToPage label={'Послуги'} to={'/services'}/>
                            <LinkToPage label={'Галерея'} to={'/gallery'}/>
                            <LinkToPage label={'Контакти'} to={'/contacts'}/>
                        </ul>
                    </li>
                    
                    <li>
                        <ul className="nav-item_contact_list">
                        <a href="https://www.facebook.com/groups/2210893679232354" className="fa fa-2x fa-facebook-square " ></a>
                        {/* <a href="https://mail.google.com" className="fa fa-2x fa-google " ></a> */}
                        {/* <a href="https://www.instagram.com/" className="fa fa-2x fa-instagram  " ></a> */}
                        {/* <a href="https://www.youtube.com/" className="fa fa-2x fa-youtube " ></a> */}
                            
                            <li>
                                <button onClick={onShowPhone}>
                                    <svg className="icon_tel" width="50" height="30">
                                        <use href={sprite + "#smartphone"}/>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button onClick={onShowEmail}>
                                    <svg className="icon_email" width="50" height="30">
                                        <use href={sprite + "#mail"}/>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button onClick={opShowMap}>
                                    <svg className="icon_map" width="50" height="30">
                                        <use href={sprite + "#placeholder"}/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}