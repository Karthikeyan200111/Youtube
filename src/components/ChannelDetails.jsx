import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../Utils/fetchFromApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [channelDetails, setChannelDetails] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetchFromApi(`channels?part=snippet&id=${id}`);
      //console.log(response)
   
      setChannelDetails(response?.items[0]);

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);
  return (
    <div className='overflow-y-auto h-[92vh] p-3 pb-3 bg-slate-300'>
      <div>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(185deg, rgba(2,0,36,1) 23%, rgba(213,213,219,1) 76%, rgba(255,255,255,1) 94%)",
            zIndex: 10,
          }}
        />
        <div className="flex items-center justify-center">
        <ChannelCard channelCardDetails={channelDetails} marginTop="-93px" color='black'/>
        </div>
       
      </div>

      <div  >
        <div className="flex items-center justify-center  mx-auto overflow-y-auto ">
        
           <Videos videos={videos} />
        </div>
       
      </div>
    </div>
  );
};

export default ChannelDetails;
