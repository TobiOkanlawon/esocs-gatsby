/* Copied and edited from ChatGPT */
const formatDate = (date: Date) => {
  const day = date.getDate();
  const ordinalSuffix = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayWithSuffix = `${day}${ordinalSuffix(day)}`;

  const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
    date
  );
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();

  return `${weekday} ${dayWithSuffix} ${month}, ${year}`;
};

export default formatDate;
