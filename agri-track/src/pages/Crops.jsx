import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Crops() {
  const [crops, setCrops] = useLocalStorage("crops", []);
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  const addCrop = (e) => {
    e.preventDefault();
    if (!name.trim() || !area.trim()) return;

    const newCrop = {
      id: Date.now(),
      name,
      area,
    };

    setCrops([...crops, newCrop]);
    setName("");
    setArea("");
  };

  const deleteCrop = (id) => {
    setCrops(crops.filter((crop) => crop.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌱 Crop Management</h2>

      {/* ADD FORM */}
      <form onSubmit={addCrop} className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Crop Name (e.g., Maize)"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Area (e.g., 2 Acres)"
            className="border p-2 rounded"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Crop
        </button>
      </form>

      {/* LIST DISPLAY */}
      <div className="space-y-3">
        {crops.length === 0 && <p className="text-gray-600">No crops added yet.</p>}

        {crops.map((crop) => (
          <div key={crop.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{crop.name}</p>
              <p className="text-sm text-gray-600">Area: {crop.area}</p>
            </div>
            <button
              onClick={() => deleteCrop(crop.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
