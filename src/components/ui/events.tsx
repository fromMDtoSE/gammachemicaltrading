import React from "react";

const events = [
  {
    title: "Establishment",
    timeStart: "2023-06-20T17:30",
    timeEnd: "2023-06-20T18:30",
    displayTimeStart: "5:30 PM",
    displayTimeEnd: "6:30 PM",
    description:
      "Settle in, grab some swag, and enjoy a drink with other members of the community before the keynote.",
  },
  {
    title: "Keynote presentation + demos",
    timeStart: "2023-06-20T18:30",
    timeEnd: "2023-06-20T20:00",
    displayTimeStart: "6:30 PM",
    displayTimeEnd: "8:00 PM",
    description:
      "Featuring a keynote presentation from Adam Wathan and live demos from community members like Sam Selikoff.",
  },
  {
    title: "Evening social",
    timeStart: "2023-06-20T20:00",
    timeEnd: "2023-06-20T23:00",
    displayTimeStart: "8:00 PM",
    displayTimeEnd: "11:00 PM",
    description:
      "Spend the rest of the evening making connections with other community members over canapés, snacks, and refreshments.",
  },
    {
        title: "Evening social",
        timeStart: "2023-06-20T20:00",
        timeEnd: "2023-06-20T23:00",
        displayTimeStart: "8:00 PM",
        displayTimeEnd: "11:00 PM",
        description:
            "Spend the rest of the evening making connections with other community members over canapés, snacks, and refreshments.",
    },
    {
        title: "Evening social",
        timeStart: "2023-06-20T20:00",
        timeEnd: "2023-06-20T23:00",
        displayTimeStart: "8:00 PM",
        displayTimeEnd: "11:00 PM",
        description:
            "Spend the rest of the evening making connections with other community members over canapés, snacks, and refreshments.",
    },
    {
        title: "Evening social",
        timeStart: "2023-06-20T20:00",
        timeEnd: "2023-06-20T23:00",
        displayTimeStart: "8:00 PM",
        displayTimeEnd: "11:00 PM",
        description:
            "Spend the rest of the evening making connections with other community members over canapés, snacks, and refreshments.",
    },
];

const formatDate = (date: string, format: "full" | "year" | "month" | "day" = "full"): string => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date string");
  }

  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = String(dateObj.getDate()).padStart(2, '0');

  switch (format) {
      case "year":
          return String(year);
      case "month":
          return month;
      case "day":
          return day;
      case "full":
      default:
          return `${year} ${month} ${day}`;
  }
}

const EventTimeline = () => {
  return (
    <ul role="list" className="m-8 flex flex-col justify-start items-start w-screen h-screen bg-gray-800">
      {events.map((event, index) => (
        <li
          key={index}
          className="group relative flex flex-col pb-8 pl-7 last:pb-0"
        >
          <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
          <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>
          <h3 className="mt-2 text-sm/6 font-semibold text-white">
            {event.title}
          </h3>
          <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-red-700">
            <time dateTime={event.timeStart}>{formatDate(event.timeStart, 'year')}</time>
            &nbsp;-&nbsp;
            <time dateTime={event.timeEnd}>{formatDate(event.timeEnd, 'year')}</time>
          </p>
          <p className="mt-0.5 text-sm/6 text-zinc-400">{event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default EventTimeline;
