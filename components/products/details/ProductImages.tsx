import Image from "next/image";

export default function ProductImages({
    images,
    title,
}: {
    images: string[];
    title: string;
}) {
    return (
        <div className="space-y-6">
            <div>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                    Gallery
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Images</h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-slate-100 rounded-3xl p-4 flex items-center justify-center"
                    >
                        <Image
                            src={image}
                            alt={`${title} image ${index + 1}`}
                            width={220}
                            height={220}
                            className="h-[220px] w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}