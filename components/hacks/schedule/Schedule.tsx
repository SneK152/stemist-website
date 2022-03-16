import Event from "./Event";
import useAos from "@/components/useAos";

export default function Schedule() {
  return (
    <div {...useAos()} className="space-y-4">
      <Event
        description="desc"
        name="name"
        time={new Date(2022, 6, 24, 8, 30)}
      />
      <Event
        description="desc"
        name="name"
        time={new Date(2022, 6, 25, 8, 30)}
      />
      <Event
        description="desc"
        name="name"
        time={new Date(2022, 6, 26, 8, 30)}
      />
    </div>
  );
}
