import { parseISO, format } from "date-fns";

export default function Date({ dateString, type }) {
  const date = parseISO(dateString);
  return (
    <>
      {type === "long" ? (
        <time className="text-[#a1a1aa] text-sm" dateTime={dateString}>
          {format(date, "LLLL d, yyyy")}
        </time>
      ) : (
        <time className="text-[#a1a1aa] text-sm" dateTime={dateString}>
          {format(date, "LLL d, yyyy")}
        </time>
      )}
    </>
  );
}
