import Event from "./Event";

export default function Schedule() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-xl text-center pb-3">
          Note: Hackathon starts at 8:00 PM (Friday, 6/24) and ends at 2PM
          (Sunday, 6/26)
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 bg-black bg-opacity-20 rounded-lg">
        <div className="grid mb-auto">
          <h1 className="text-white py-3 text-xl font-display font-semibold text-center">
            Friday, June 24th
          </h1>
          <Event
            description="Day 1 Opening Ceremony"
            name="Day 1 Opening Ceremony"
            time="8:00 to 9:00 AM"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="9:00 to 10:00 AM"
          />
          <Event
            description="At this time, you may start submitting your project!"
            name="Submissions Open"
            time="10:00 AM"
          />
          <Event
            description="A workshop will be held by Echo3D"
            name="Echo3D Workshop"
            time="10:00 to 11:00 AM"
          />
          <Event
            description="You can use this break to eat lunch and take a break from hacking on your project!"
            name="Lunch Break"
            time="12:00 to 2:00 PM"
          />
          <Event
            description="Feel free to chat with one of our mentors!"
            name="Mentors Open"
            time="2:00 to 6:00 PM"
          />
        </div>
        <div className="grid mb-auto">
          <h1 className="text-white py-3 text-xl font-display font-semibold text-center">
            Saturday, June 25th
          </h1>
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="9:00 to 10:00 AM"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="10:00 to 11:00 AM"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="11:00 AM to 12:00 PM"
          />
          <Event
            description="You can use this break to eat lunch and take a break from hacking on your project!"
            name="Lunch Break"
            time="12:00 to 2:00 PM"
          />
          <Event
            description="Feel free to chat with one of our mentors!"
            name="Mentors Open"
            time="2:00 to 6:00 PM"
          />
        </div>
        <div className="grid mb-auto">
          <h1 className="text-white py-3 text-xl font-display font-semibold text-center">
            Sunday, June 26th
          </h1>
          <Event
            description="Feel free to chat with one of our mentors!"
            name="Mentors Open"
            time="9:00 to 2:00 PM"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="9:00 to 10:00 AM"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="10:00 to 1:00 AM"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            time="11:00 AM to 12:00 PM"
          />
          <Event
            description="You can use this break to eat lunch and take a break from hacking on your project!"
            name="Lunch Break"
            time="12:00 to 2:00 PM"
          />
          <Event
            description="At this time, you may no longer submit your project."
            name="Submissions Closed"
            time="2:00 PM"
          />
          <Event
            description="During this time, we will be judging your projects!"
            name="Judging"
            time="2:30 to 4:30 PM"
          />
          <Event
            description="We will be hosting our awards ceremony!"
            name="Award Ceremony and Thanks"
            time="5:00 PM"
          />
        </div>
      </div>
    </>
  );
}
