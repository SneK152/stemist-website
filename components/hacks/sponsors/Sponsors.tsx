import AnimatedSponsor from "./SponsorSpring";
import Echo3DLogo from '../assets/images/Echo.png'

export default function Sponsors() {
  return (
    <div className="p-4">
      <div className="flex p-3 space-x-6">
        <AnimatedSponsor name="apple" image={Echo3DLogo} className="" />
        <AnimatedSponsor name="facebook" image={Echo3DLogo} className="" />
        <AnimatedSponsor name="instagram" image={Echo3DLogo} className="" />
        <AnimatedSponsor name="spotify" image={Echo3DLogo} className="" />
      </div>
    </div>
  );
}
