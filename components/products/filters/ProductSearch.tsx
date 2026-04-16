export default function ProductSearch({
  searchTerm,
  onChange,
}: {
  searchTerm: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by tag or title"
      className="bg-slate-100 border border-slate-300 rounded-full px-4 py-3 outline-none focus:border-orange-400 w-full sm:w-[280px]"
    />
  );
}