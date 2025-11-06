function Card(props) {
  return (
    <div className="bg-zinc-600 text-white w-full max-w-[250px] rounded-lg shadow-lg overflow-hidden">

      <img
        src={props.img}
        alt={props.name}
        className="w-full h-[160px] sm:h-[180px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <p className="text-sm text-gray-300">{props.role}</p>

        <div className="mt-3 space-y-1">
          <p className="text-sm">{props.location}</p>
          <p className="text-sm">{props.designation}</p>

          <button className="mt-3 bg-amber-500 hover:bg-amber-600 px-3 py-1 rounded-lg text-sm w-fit">
            View Profile
          </button>
        </div>
      </div>

    </div>
  );
}

export default Card;
