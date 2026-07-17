import HomeButton from "./homeComponents/HomeButton";
import HomeNavbar from "./homeComponents/HomeNavbar";
//import { useNavigate } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <HomeNavbar/>
            <HomeButton/>
        </div>
    )
}