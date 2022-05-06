import { Fragment, FunctionComponent } from "react";

let formToEmbed: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSdPbxLj32YvUdPLnmtlYhhRXFiGwPCPuHK7Vf7e89DMAFsdew/viewform";

const SignupForm: FunctionComponent<{ className: string }> = ({
  className,
}) => (
  <Fragment>
    <iframe
      src={formToEmbed}
      className={`h-full w-screen ${className.toString()}`}
    />
  </Fragment>
);

export default SignupForm;
