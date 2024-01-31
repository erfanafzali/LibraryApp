function SideCard({ data }) {
  return (
    <div className="w-full bg-slate-700 rounded-lg px-2 py-2 flex justify-between gap-x-4 items-center mb-2">
      <img src={data.image} alt={data.title} className="w-10"/>
      <h2 className="pr-2 text-base font-bold text-slate-400">{data.title}</h2>
    </div>
  );
}

export default SideCard;
