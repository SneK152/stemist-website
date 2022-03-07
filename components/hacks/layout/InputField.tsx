import { animated, useSpring } from "react-spring";
import { useState } from "react";

interface InputFieldProps {
  name: string;
  error: null | string | undefined;
  formik: any;
}

export default function InputField({ name, error, formik }: InputFieldProps) {
  let [focused, setFocused] = useState(false);

  let FieldSpring = useSpring({
    borderColor: focused ? "green" : "white",
    borderWidth: focused ? "5px 5px" : "0px 0px",
  });

  let ResponseText = useSpring({
    color: true ? "red" : "black",
    fontSize: true ? "20px" : "0px",
  });

  return (
    <div>
      <div className="flex p-3 text-center justify-center w-screen">
        <animated.input
          name={name}
          style={FieldSpring}
          className="px-4 shadow-md py-3 rounded-md w-3/5 border-8 border-black"
          placeholder={`Enter your ${name} here...`}
          {...formik.getFieldProps(name)}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={(e) => {
            setFocused(false);
            formik.handleBlur(e);
          }}
        />
      </div>
      <animated.p style={ResponseText}>{error}</animated.p>
    </div>
  );
}
