import React from "react";

const DashboardCard = ({ data, onRegenerate, loading }) => {
  if (!data) return null;

  const { rating, reviews, headline } = data;

  return (
    <div className="bg-white shadow-xl border border-blue-100 rounded-2xl p-6 space-y-4">
      <div className="text-4xl font-extrabold text-blue-600">{rating} ★</div>
      <div className="text-blue-600 font-medium">{reviews} reviews</div>
      <div className="italic text-gray-700">{headline}</div>
      <button
        onClick={onRegenerate}
        className="mt-4 w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
      >
        {loading ? "Regenerating…" : "Regenerate SEO Headline"}
      </button>
    </div>
  );
};

export default DashboardCard;
