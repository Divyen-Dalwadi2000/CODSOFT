import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import Logo from "../assets/ddj.png"
import { WHATTSAPP_LINK } from "../constants";
import { LINKDIN_LINK } from "../constants";
import { GITHUB_LINK } from "../constants";
import { MAIL_LINK } from "../constants";

const Navbar = () => {
    const trantition = "transition-transform duration-200 hover:scale-150";

    return (
        <>
             <nav className="fixed top-0 right-0 left-0 flex items-center justify-between py-4 px-4"  >
                <div>
                    <h1 className="text-white hover:text-yellow-200 text-sm" id="special-font">Divyen Dalwadi</h1>
                    {/* <img src={Logo} alt="Logo" className="flex flex-shrink-0 items-center w-10" /> */}
                </div>
                <div className="flex space-x-2 ">
                    <a href={LINKDIN_LINK} target="_blank" >
                        <FaLinkedin className={`${trantition} text-cyan-800`} />
                    </a>
                    <a href={GITHUB_LINK} target="_blank" >
                        <FaGithub className={`${trantition}`} />
                    </a>
                    <a href={MAIL_LINK} >
                        <SiGmail className={`${trantition} text-red-700 `} />
                    </a>

                    <a href={WHATTSAPP_LINK} target="_blank" >
                        <FaWhatsapp className={`${trantition} text-green-400`} />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;