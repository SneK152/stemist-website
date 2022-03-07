import Event from "./Event";

export default function Schedule() {
  return (
    <div className="space-y-4">
      <Event description="desc" name="name" time={new Date()} />
      <Event description="desc" name="name" time={new Date()} />
      <Event description="desc" name="name" time={new Date()} />
    </div>
  );
}
