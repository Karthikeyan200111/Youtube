import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../Utils/constant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { timeAgo } from "../Utils/constant";

const VideoCard = ({width,
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const timeStamp = timeAgo(snippet?.publishTime);

  return (
    <div className=" my-2 p-4 hover:shadow-2xl hover:-translate-y-10 hover:transition-all ease-in-out   " >
      <div className="rounded-lg bg-black p-4 md:w-80 w-64" >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <img
            src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title || demoVideoTitle}
            className="md:w-80"
          />
        </Link>
        <div className="bg-black h-32 md:w-84 w-60 p-2" style={{width}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <p className="text-white text-sm">
              {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </p>
            <p className="text-white">{timeStamp}</p>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet.channelId}`
                : demoChannelUrl
            }
          >
            <p className="text-white my-3  inline-block">
              {snippet?.channelTitle || demoChannelTitle}
            </p>
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
