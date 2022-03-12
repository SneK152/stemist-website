import AnimatedSponsor from "./SponsorSpring";
import colors from "tailwindcss/colors";

export default function Sponsors() {
  return (
    <div className="p-4">
      <div className="flex p-3 space-x-6">
        <AnimatedSponsor
          color={colors.blue[500]}
          url="https://www.echo3d.co/"
          name="Echo3D"
          image="echo3d.png"
          className=""
        />
        <AnimatedSponsor
          color={colors.blue[500]}
          url="https://certopus.com/"
          name="Certopus"
          image="certopus.png"
          className=""
        />
        <AnimatedSponsor
          color={colors.blue[500]}
          url="https://www.desmos.com/"
          name="Desmos"
          image="desmos.png"
          className=""
        />
        <AnimatedSponsor
          color={colors.blue[500]}
          url="https://www.taskade.com/"
          name="Taskade"
          image="taskade.png"
          className=""
        />
      </div>
    </div>
  );
}
