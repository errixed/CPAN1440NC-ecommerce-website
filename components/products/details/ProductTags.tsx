export default function ProductTags({ tags }: { tags: string[] }) {
    return (
        <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-slate-500">
                Tags
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm border border-slate-200 capitalize"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}