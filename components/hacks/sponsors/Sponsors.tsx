import AnimatedSponsor from "./SponsorSpring";

export default function Sponsors() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <AnimatedSponsor
          color={"#002d64"}
          url="https://www.echo3d.co/"
          name="Echo3D"
          image="echo3d.png"
          className=""
        />
        <AnimatedSponsor
          color={"#2d363e"}
          url="https://certopus.com/"
          name="Certopus"
          image="certopus.png"
          className=""
        />
        <AnimatedSponsor
          color={"#55e0ca"}
          url="https://www.desmos.com/"
          name="Desmos"
          image="desmos.png"
          className=""
        />
        <AnimatedSponsor
          color={"#000000"}
          url="https://www.taskade.com/"
          name="Taskade"
          image="taskade.png"
          className=""
        />
      </div>
    </div>
  );
}
