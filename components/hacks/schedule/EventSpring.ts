import {useSpring} from 'react-spring'

export default function useEventSpring(state: boolean) {
    let dropped = useSpring({
        opacity: state ? 1 : 0,
        borderTop: state ? "0.05px solid" : "0rem solid",
    });

    let mainContainer = useSpring({
        height: state ? "5rem" : "3rem",
    });

    return {dropped, mainContainer}
}