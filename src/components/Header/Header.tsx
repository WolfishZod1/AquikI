import { AboutUs } from "./AboutUs";
import { Logo } from "./Logo";
import { Settings } from "./Settings";
import "./header.css"
 

export default function Header() {
    return (
        <div className="headerBox">
            <Logo />
            <AboutUs />
            <Settings />
        </div>
    )
}

