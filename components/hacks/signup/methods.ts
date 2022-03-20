import {useState} from "react";
import {useSpring} from "react-spring";

export function useSignup() {

}

export function useHover() {
    let [hovered, setHovered] = useState(false)

    function hoverOn() {
        setHovered(true)
    }

    function hoverOff() {
        setHovered(false)
    }

    return {hovered, hoverOff, hoverOn}
}

export function useInputFieldSpring(state:boolean) {
    let FieldSpring = useSpring({
        borderColor: state ? "green" : "white",
        borderWidth: state ? "5px 5px" : "0px 0px",
    });
    
    let ResponseText = useSpring({
        color: state ? "red" : "black",
        fontSize: state ? "20px" : "0px",
    });

    return {FieldSpring, ResponseText}
}