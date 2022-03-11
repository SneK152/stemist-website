import {useSpring} from "react-spring";
import {white} from "../Colors";

export default function useSponsorSpring(state: boolean, color: string) {
    let containerSpring = useSpring({
        scale: state ? 1.2 : 1,
        background: state ? color : white 
    });
    
    let descriptionSpring = useSpring({
        opacity: state ? 1 : 0,
    });

    return {containerSpring, descriptionSpring}
} 