import React from 'react'
import '../scss/Onepage.scss'
import Imgphone from "../assets/DesktopHeader/desktop-header-phone.png"
import Facebook from "../assets/DesktopHeader/Facebook.png"
import Line from "../assets/DesktopHeader/Line.png"
import Language from "../assets/DesktopHeader/Language.png"
import Logo from "../assets/NavbarHeader/Logo.png"

function onepage() {
    return (
        <div className="Onepage">
            <div className="Desktop-Header">
                <div className="desktop-header">
                    <div className="reactangle1">
                        <div className="desktop-header-text">
                            <p className="desktop-header-txt">โทรวันนี้เพื่อนัดหมายการตรวจสอบ:       00-000-0000</p>
                            <img className="desktop-header-imgphone" src={Imgphone} alt="Imgphone"></img>
                        </div>
                        <div className="desktop-header-image">
                            <img className="desktop-header-facebook" src={Facebook} alt="Facebook"></img>
                            <img className="desktop-header-line" src={Line} alt="Line"></img>
                            <div className="reactangle31"></div>
                            <img className="desktop-header-language" src={Language} alt="Language"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Home">
                <div className="Navbar-Header">
                    <div className="Logo">
                        <img className="logo" src={Logo} alt="Logo"></img>
                    </div>
                    <div className="Group-text-navbar">
                        <a className="navbar-home" href="Home">หน้าแรก</a>
                        <a className="navbar-package" href="package">แพคเกจ</a>
                        <a className="navbar-message" href="messageus">ข่าวสาร</a>
                        <a className="navbar-aboutus" href="aboutus">เกี่ยวกับเรา</a>
                        <a className="navbar-contactus" href="contactus">ติดต่อเรา</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default onepage