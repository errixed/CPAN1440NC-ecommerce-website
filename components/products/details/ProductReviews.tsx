import { Review } from "@/types";

export default function ProductReviews({ reviews }: { reviews: Review[] }) {
    return (
        <div className="space-y-6">
            <div>
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                    Customer Feedback
                </p>
                <h3 className="text-2xl font-bold text-slate-900">Reviews</h3>
            </div>

            <div className="grid gap-4">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2"
                    >
                        <p className="text-slate-700">
                            Rating: <span className="font-semibold">{review.rating}</span>
                        </p>
                        <p className="text-slate-600 leading-7">
                            Comment: {review.comment}
                        </p>
                        <p className="text-slate-500 text-sm">
                            Reviewer: <span className="font-medium">{review.reviewerName}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}