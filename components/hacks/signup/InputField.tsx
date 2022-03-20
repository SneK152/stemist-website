import { animated } from "react-spring";
import {useHover, useInputFieldSpring} from './methods'

interface InputFieldProps {
  name: string;
  error: null | string | undefined;
  formik: any;
}

export default function InputField({ name, error, formik }: InputFieldProps) {
  
  let {hoverOff, hoverOn, hovered} = useHover()
  let {FieldSpring, ResponseText} = useInputFieldSpring(hovered)

  return (
    <div>
      <div className="flex p-3 text-center justify-center w-screen">
        <animated.input
          name={name}
          style={FieldSpring}
          className="px-4 shadow-md py-3 rounded-md w-3/5 border-8 border-black placeholder:text-black placeholder:text-clip"
          placeholder={`Enter your ${name} here...`}
          onFocus={hoverOn}
          onBlur={hoverOff}
        />
      </div>
      <animated.p style={ResponseText}>{error}</animated.p>
    </div>
  );
}
