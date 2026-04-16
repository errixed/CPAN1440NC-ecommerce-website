export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="bg-slate-100 border border-slate-300 rounded-full px-4 py-3 text-slate-800 capitalize outline-none focus:border-orange-400 min-w-[180px]"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}