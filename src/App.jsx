// src/App.jsx
import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import DashboardCard from "./components/DashboardCard";
import { API_BASE_URL } from "./components/APIPATH";
import NavBar from "./components/NavBar";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(null);

  const hit = async (url, opts = {}) => {
    setLoading(true);
    const res = await fetch(url, opts);
    const json = await res.json();
    setLoading(false);
    return json;
  };

  const fetchBusinessData = async (f) => {
    setForm(f);
    const json = await hit(`${API_BASE_URL}/business-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(f),
    });
    setData(json);
  };

  const regenerate = async () => {
    if (!form) return;
    const json = await hit(
      `${API_BASE_URL}/regenerate-headline?name=${form.name}&location=${form.location}`
    );
    setData((prev) => ({ ...prev, headline: json.headline }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* fixed top bar */}
      <NavBar />

      {/* centred main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <BusinessForm onSubmit={fetchBusinessData} loading={loading} />
          <DashboardCard
            data={data}
            onRegenerate={regenerate}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
}
