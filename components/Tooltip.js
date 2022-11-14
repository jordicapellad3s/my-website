export default function Tooltip({ children }) {
  return (
    <span className="absolute left-0 px-2 text-sm font-medium transition-opacity delay-200 rounded-md opacity-0 pointer-events-none bg-neutral-800 text-neutral-50 -bottom-5 w-max group-hover:opacity-100">
      {children}
    </span>
  );
}
