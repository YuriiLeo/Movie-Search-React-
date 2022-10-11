import { nanoid } from "nanoid";
import { MdOutlineRealEstateAgent, MdOutlineLiveTv  } from "react-icons/md";

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        icon: MdOutlineRealEstateAgent,
    },
    {
        id: nanoid(),
        to: "/movies",
        text: "Movies",
        icon: MdOutlineLiveTv,
    }
]

export default items;