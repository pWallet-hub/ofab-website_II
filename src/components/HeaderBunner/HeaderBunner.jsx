import "./HeaderBunner.css"
import ofab from "../../assets/ofab.jpg"
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


function HeaderBunner() {
  return (
    <div className="header-container">
        <div>
            <img src={ofab} alt="ofab" className="header-log"/>
        </div>
        <div className="header-contact">
            <span>
                <IoIosPhonePortrait className="icon" /> +250 785 855 080
            </span>
            <span>
                <IoIosGlobe />
                ofabrwanda@ofabrwanda.info
            </span>
            <span>
                <FaLocationDot />RUBIRIZI,KIGALI
            </span>
        </div>
    </div>
  )
}

export default HeaderBunner