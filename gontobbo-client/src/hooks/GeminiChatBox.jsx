import { useState } from "react";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log(GEMINI_API_KEY, "GeminiChatBox.jsx", 4);

const GeminiChatBox = ({
  title = "💬 Ask Gemini",
  placeholder = "Ask anything...",
  buttonText = "Ask",
  className = "",
}) => {
  const [prompt, setPrompt] = useState("");
  console.log(prompt, "GeminiChatBox.jsx", 13);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        },
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setResponse(reply || "No response received.");
    } catch (err) {
      console.error("Gemini API Error:", err);
      setResponse("❌ Failed to get response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full max-w-2xl mx-auto p-6 rounded-xl shadow-md bg-white ${className}`}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <textarea
        className="w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows={4}
        placeholder={placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
      >
        {loading ? "Loading..." : buttonText}
      </button>

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md whitespace-pre-wrap border border-gray-200">
          <strong className="text-gray-700">Gemini Response:</strong>
          <p className="mt-2 text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiChatBox;
