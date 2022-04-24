import Event from "./Event";

export default function Schedule() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-xl text-center pb-3">
          Note: Project submission starts at{" "}
          <time dateTime="2022-06-24 10:00-07:00">10AM Friday (6/24)</time> and
          ends at{" "}
          <time dateTime="2022-06-26 14:00-07:00">2PM Sunday (6/26)</time>
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 bg-black bg-opacity-20 rounded-lg">
        <div className="grid mb-auto">
          <h1 className="text-white py-3 text-xl font-display font-semibold text-center">
            <time dateTime="2022-06-24">Friday, June 24th</time>
          </h1>
          <Event
            description="Day 1 Opening Ceremony"
            name="Day 1 Opening Ceremony"
            timeStart="2022-06-24 08:00-07:00"
            timeEnd="2022-06-24 09:00-07:00"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-24 09:00-07:00"
            timeEnd="2022-06-24 10:00-07:00"
          />
          <Event
            description="At this time, you may start submitting your project!"
            name="Submissions Open"
            timeStart="2022-06-24 10:00-07:00"
          />
          <Event
            description="A workshop will be held by Echo3D"
            name="Echo3D Workshop"
            timeStart="2022-06-24 10:00-07:00"
            timeEnd="2022-06-24 11:00-07:00"
          />
          <Event
            description="You can use this break to eat lunch and take a break from hacking on your project!"
            name="Lunch Break"
            timeStart="2022-06-24 12:00-07:00"
            timeEnd="2022-06-24 14:00-07:00"
          />
          <Event
            description="Feel free to chat with one of our mentors!"
            name="Mentors Open"
            timeStart="2022-06-24 14:00-07:00"
            timeEnd="2022-06-24 18:00-07:00"
          />
        </div>
        <div className="grid mb-auto">
          <h1 className="text-white py-3 text-xl font-display font-semibold text-center">
            <time dateTime="2022-06-25">Saturday, June 25th</time>
          </h1>
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-25 09:00-07:00"
            timeEnd="2022-06-25 10:00-07:00"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-25 10:00-07:00"
            timeEnd="2022-06-25 11:00-07:00"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-25 11:00-07:00"
            timeEnd="2022-06-25 12:00-07:00"
          />
          <Event
            description="You can use this break to eat lunch and take a break from hacking on your project!"
            name="Lunch Break"
            timeStart="2022-06-25 12:00-07:00"
            timeEnd="2022-06-25 14:00-07:00"
          />
          <Event
            description="Feel free to chat with one of our mentors!"
            name="Mentors Open"
            timeStart="2022-06-25 14:00-07:00"
            timeEnd="2022-06-25 18:00-07:00"
          />
        </div>
        <div className="grid mb-auto">
          <h1 className="text-white py-3 text-xl font-display font-semibold text-center">
            <time dateTime="2022-06-26">Sunday, June 26th</time>
          </h1>
          <Event
            description="Feel free to chat with one of our mentors!"
            name="Mentors Open"
            timeStart="2022-06-26 09:00-07:00"
            timeEnd="2022-06-26 14:00-07:00"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-26 09:00-07:00"
            timeEnd="2022-06-26 10:00-07:00"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-26 10:00-07:00"
            timeEnd="2022-06-26 13:00-07:00"
          />
          <Event
            description="A workshop will be held"
            name="Workshop / Speaker Talk"
            timeStart="2022-06-26 11:00-07:00"
            timeEnd="2022-06-26 12:00-07:00"
          />
          <Event
            description="You can use this break to eat lunch and take a break from hacking on your project!"
            name="Lunch Break"
            timeStart="2022-06-26 12:00-07:00"
            timeEnd="2022-06-26 14:00-07:00"
          />
          <Event
            description="At this time, you may no longer submit your project."
            name="Submissions Closed"
            timeStart="2022-06-26 14:00-07:00"
          />
          <Event
            description="During this time, we will be judging your projects!"
            name="Judging"
            timeStart="2022-06-26 14:30-07:00"
            timeEnd="2022-06-26 16:30-07:00"
          />
          <Event
            description="We will be hosting our awards ceremony!"
            name="Award Ceremony and Thanks"
            timeStart="2022-06-26 17:00-07:00"
          />
        </div>
      </div>
    </>
  );
}
