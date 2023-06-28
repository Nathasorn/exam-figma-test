import React from 'react'
import '../scss/Onepage.scss'
//Desktop/Header
import Imgphone from "../assets/DesktopHeader/desktop-header-phone.png"
import Facebook from "../assets/DesktopHeader/Facebook.png"
import Line from "../assets/DesktopHeader/Line.png"
import Language from "../assets/DesktopHeader/Language.png"
//Navbar-Header
import Logo from "../assets/NavbarHeader/Logo.png"
//Home
import Bghome from "../assets/Home/Home-Background.png"
import Image225 from "../assets/Home/image225.png"
import Image227 from "../assets/Home/image227.png"

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
            <div className="Navbar">
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
                    <div className="button-login">
                        <div className="button-login-base">
                            <a className="button-login-text">เข้าสู่ระบบ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Home">
                <div className="reactangle26"></div>
                <div className="reactangle27"></div>
                <a className="reactangle27-text">NEW</a>
                <a className="reactangle26-text">ตรวจสอบประวัติผ่านระบบ K-ETC</a>
                <div className="home-group-header-text">
                    <a className="home-group-header-text-detail">บริการยื่น ตรวจสอบประวัติอาชญากรรม สำหรับ องค์กร และบุคคลทั่วไป</a>
                </div>
                <div className="group1000003687">
                <a className="image225-text">ไม่ต้องรอคิว</a>
                </div>
                <div className="home-image">
                    <img className="home-background" src={Bghome} alt="Home-Background"></img>
                    <img className="image225" src={Image225} alt="Image225"></img>
                    <img className="image227" src={Image227} alt="Image227"></img>
                </div>
            </div>
        </div>
    )
}

export default onepage