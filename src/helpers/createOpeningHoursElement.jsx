const createOpeningHoursElement = (openingHours) => {
  // get current day of the week to highlight today's opening hours
  const now = new Date();

  // use Intl.DateTimeFormat to get the day of the week in English (UK), with time zone set to London to ensure it works correctly regardless of user's local time zone
  const dayOfTheWeek = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: "Europe/London",
  }).format(now);

  // map over openingHours array to create list of opening hours, highlighting today's hours
  const openingHoursList = openingHours.map(
    ({ day, isClosed, open, close }) => {
      const isToday = day === dayOfTheWeek;

      return (
        <div className={`flex justify-between ${isToday ? "font-bold" : ""}`}>
          <div className="">{day}</div>
          <div>{isClosed ? "Closed" : `${open} - ${close}`}</div>
        </div>
      );
    },
  );
  return openingHoursList;
};

export default createOpeningHoursElement;
