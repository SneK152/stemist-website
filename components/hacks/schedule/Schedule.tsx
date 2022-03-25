import Event from "./Event";
import useAos from "@/components/useAos";

export default function Schedule() {
  return (
    <div {...useAos()} className="space-y-4">
      <div className="gap-4 grid sm:grid-cols-2">
        <Event
          description="Day 1 Opening Ceremony"
          name="Day 1 Opening Ceremony"
          time="8:00 to 9:00 AM on Friday, June 24th"
        />
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="9:00 to 10:00 AM on Friday, June 24th"
        />
        <Event
          description="At this time, you may start submitting your project!"
          name="Submissions Open"
          time="10:00 AM on Friday, June 24th"
        />
        <Event
          description="A workshop will be held by Echo3D"
          name="Echo3D Workshop"
          time="10:00 to 11:00 AM on Friday, June 24th"
        />
        <Event
          description="You can use this break to eat lunch and take a break from hacking on your project!"
          name="Lunch Break"
          time="12:00 to 2:00 PM on Friday, June 24th"
        />
        <Event
          description="Feel free to chat with one of our mentors!"
          name="Mentors Open"
          time="2:00 to 6:00 PM on Friday, June 24th"
        />
      </div>
      <hr />
      <div className="gap-4 grid sm:grid-cols-2">
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="9:00 to 10:00 AM on Saturday, June 25th"
        />
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="10:00 to 11:00 AM on Saturday, June 25th"
        />
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="11:00 AM to 12:00 PM on Saturday, June 25th"
        />
        <Event
          description="You can use this break to eat lunch and take a break from hacking on your project!"
          name="Lunch Break"
          time="12:00 to 2:00 PM on Saturday, June 25th"
        />
        <Event
          description="Feel free to chat with one of our mentors!"
          name="Mentors Open"
          time="2:00 to 6:00 PM on Saturday, June 25th"
        />
      </div>
      <hr />
      <div className="gap-4 grid sm:grid-cols-2">
        <Event
          description="Feel free to chat with one of our mentors!"
          name="Mentors Open"
          time="9:00 to 2:00 PM on Sunday, June 26th"
        />
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="9:00 to 10:00 AM on Sunday, June 26th"
        />
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="10:00 to 1:00 AM on Sunday, June 26th"
        />
        <Event
          description="A workshop will be held"
          name="Workshop / Speaker Talk"
          time="11:00 AM to 12:00 PM on Sunday, June 26th"
        />
        <Event
          description="You can use this break to eat lunch and take a break from hacking on your project!"
          name="Lunch Break"
          time="12:00 to 2:00 PM on Sunday, June 26th"
        />
        <Event
          description="At this time, you may no longer submit your project."
          name="Submissions Closed"
          time="2:00 PM on Sunday, June 26th"
        />
        <Event
          description="During this time, we will be judging your projects!"
          name="Judging"
          time="2:30 to 4:30 PM on Sunday, June 26th"
        />
        <Event
          description="We will be hosting our awards ceremony!"
          name="Award Ceremony and Thanks"
          time="5:00 PM on Sunday, June 26th"
        />
      </div>
    </div>
  );
}
