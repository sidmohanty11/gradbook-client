export default function HeaderIcon(props) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 rounded-xl active:border-b-2 active:border-green-logo group">
      <div className="h-5 text-center sm:h-7 mx-auto">{props.children}</div>
    </div>
  );
}
