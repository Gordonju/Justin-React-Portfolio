
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* You can add a logo or brand name here */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Gordonju" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <FaGithub />
                </a>
                <a href="https://drive.google.com/file/d/1O_YBTAgeLXqjCAr32BEmlM8F4zHcPpxf/view?usp=drive_link" className="text-white hover:text-green-500">
                    <MdContactPage />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
