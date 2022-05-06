import AnimatedSponsor from "./SponsorSpring";
import useAos from "@/components/useAos";

export default function Sponsors() {
  return (
    <div className="p-4">
      <div
        {...useAos()}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatedSponsor
          color={"#000000"}
          url="https://www.taskade.com/"
          name="Taskade"
        />
        <AnimatedSponsor
          color="#4687ff"
          url="https://nordvpn.com"
          name="NordVPN"
          className="bg-green-400"
        />
        <AnimatedSponsor
          color="#ef222a"
          url="https://wolfram.com"
          name="Wolfram"
        />
        <AnimatedSponsor
          color={"#002d64"}
          url="https://www.echo3d.co/"
          name="Echo3D"
        />
        <AnimatedSponsor
          color={"#55e0ca"}
          url="https://www.desmos.com/"
          name="Desmos"
        />
        <AnimatedSponsor
          color={"#2d363e"}
          url="https://certopus.com/"
          name="Certopus"
        />
        <AnimatedSponsor
          color={"#434285"}
          url="https://www.sashido.io/"
          name="Sashido"
        />
        <AnimatedSponsor
          color={"#eff1f3"}
          url="https://www.axure.com/"
          name="axure"
          icon={false}
          className="grid content-center"
        />
        <AnimatedSponsor
          color={"#ffffff"}
          url="https://artofproblemsolving.com/"
          name="AOPS"
          textClassName="mx-auto w-3/4"
        />
      </div>
    </div>
  );
}
