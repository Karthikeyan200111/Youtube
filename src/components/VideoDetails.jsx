import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../Utils/fetchFromApi";
import Videos from "./Videos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RingLoader from "react-spinners/RingLoader";

const VideoDetails = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetails, setVideoDetials] = useState("");

  const { id } = useParams();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFromApi(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetials(response?.items[0]);

      const VideoDetails = await fetchFromApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      setVideos(VideoDetails?.items);
    };
    fetchData();
  }, [id]);

  if (!videoDetails?.snippet) {
  return (
    <div className='mt-20 md:mt-40'>
          <RingLoader
        color='#FF0000'
        loading='true'
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>)
  }

  const {
    snippet: { title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <div className="flex md:flex-row flex-col h-[90vh] bg-slate-400 overflow-y-auto gap-40 md:gap-0 ">
      <div className="p-4 md:w-3/5 w-full h-2/4 md:h-3/4  md:sticky">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          width="100%"
          height="100%"
          controls
        />
 
        <div className=" w-full  h-40  p-4 md:flex md:flex-col flex-row  gap-3  justify-center  bg-black  align-baseline">
          
            <div className="w-full">
              <p className="font-bold text-sm md:text-xl text-white ">{title}</p>
            </div>
            <div className="flex gap-4 place-content-between">
              <div className="md:flex">
                <p className="font-semibold mt-3 text-sm md:text-lg text-white ">
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </p>
              </div>

              <div className="flex  flex-col items-center justify-center">
                <p className="font-bold flex gap-1 text-sm md:text-lg text-white">
                  {" "}
                  {parseInt(viewCount).toLocaleString()}{" "}
                  <span className="font-semibold">Views</span>
                </p>
                <p className="font-bold flex gap-1 text-sm md:text-lg text-white">
                  {parseInt(likeCount).toLocaleString()}{" "}
                  <span className="font-semibold">Likes</span>
                </p>
              </div>
            </div>
          
        </div>
      </div>

      <div className="w-3/5 h-[90vh] mx-auto md:overflow-y-auto ">
        <Videos videos={videos}  width='100%'/>
      </div>
    </div>
  );
};

export default VideoDetails;
