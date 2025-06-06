/* eslint-disable react/prop-types */
function GroupInput(props) {
  return (
    <div className="md:w-[400px] w-full flex flex-col justify-center mb-2">
      <p className="text-white text-xl">{props.title}</p>
      <div className="bg-amber-100 p-2 md:py-3 md:px-1 rounded ">{props.children}</div>
    </div>
  );
}

export default GroupInput;

