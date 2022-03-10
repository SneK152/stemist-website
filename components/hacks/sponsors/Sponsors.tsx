import AnimatedSponsor from "./SponsorSpring";
import Echo3DLogo from '../assets/images/Echo.png'
import colors from 'tailwindcss/colors'

export default function Sponsors() {
  return (
    <div className="p-4">
      <div className="flex p-3 space-x-6">
        <AnimatedSponsor color={colors.blue[500]} url="" name="apple" image={Echo3DLogo} className="" />
        <AnimatedSponsor color={colors.blue[500]} url="" name="facebook" image={Echo3DLogo} className="" />
        <AnimatedSponsor color={colors.blue[500]} url="" name="instagram" image={Echo3DLogo} className="" />
        <AnimatedSponsor color={colors.blue[500]} url="" name="spotify" image={Echo3DLogo} className="" />
      </div>
    </div>
  );
}
