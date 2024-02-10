import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Videos } from "../components";
import { fetchFromApi } from "../Utils/fetchFromApi";

const SearchResults = () => {
  const [videos, setVideos] = useState(null);
  const { serachTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromApi(`search?part=snippet&q=${serachTerm}`);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [serachTerm]);
  return (
    <div>
      
        <div className="w-full h-[90vh] overflow-y-auto bg-slate-400 ">
          <p className="text-red-600 text-xl font-bold mx-4">
          Search Results for
            {serachTerm} <span className="text-white">Videos</span>
          </p>
          <div>
          <Videos videos={videos} />
          </div>
         
        </div>
    
    </div>
  );
};

export default SearchResults;
