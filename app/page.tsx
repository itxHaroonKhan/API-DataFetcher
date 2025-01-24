"use client"; // Add this line at the top

import axios from "axios";
import { useState } from "react";


export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list');
      console.log(response.data); // Log the data to the console
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
    }
  };
  

  return (
    <div className="p-10">

<h1 className="text-3xl font-bold text-center text-teal-700 mb-6">
        WAITING FOR API DATA
      </h1>
      <button
        onClick={getData}
        className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90 mb-4"
      >
        Get Data
      </button>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item:any, idx) => (
          <div key={idx} className="bg-gray-50 rounded shadow p-4 text-center">
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-auto rounded mb-2"
            />
            <p className="text-gray-700">{item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
