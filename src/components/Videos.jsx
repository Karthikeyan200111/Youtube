import React from 'react';
import { VideoCard, ChannelCard } from './';
import RingLoader from "react-spinners/RingLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",

};



const Videos = ({ videos,width }) => {
  
  // Check if the 'videos' array is not falsy (null, undefined, etc.)
 
  if (!videos || !Array.isArray(videos)) {
    return(<div className='mt-20 md:mt-40'>
          <RingLoader
        color='#FF0000'
        loading='true'
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>)  // or some other loading indicator
  }

  return (
    <div className='flex flex-wrap gap-2 my-1 mx-1 items-center justify-center ' >
      {videos.map((videos,index) => (
        <div key={index} >
          {videos?.id?.videoId && <VideoCard video={videos} width={width}/>} 
          {videos?.id?.channelId && <ChannelCard channelCardDetails={videos} backgroundColor='black'  />} 
        </div>
      ))}
      
    </div>
  );
};

export default Videos;
