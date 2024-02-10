import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utils/constant';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({channelCardDetails,marginTop,backgroundColor,color}) => {
    
  return (
    <div className='mt-4 rounded-md md:w-80 md:h-96 md:p-8 ' style={{marginTop,backgroundColor}}>
        <Link to={`/channel/${channelCardDetails?.id?.channelId}`}>
            <div className='flex flex-col items-center justify-center w-64 p-3'>
                <img src={channelCardDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                alt={channelCardDetails?.snippet?.title} 
                className='w-48 rounded-full'
                />
                <p className='text-white mt-3 font-bold' style={{color}}>{channelCardDetails?.snippet?.title}<CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} /></p>
                {channelCardDetails?.statistics?.subscriberCount && (
          <p className='text-white'>
            {parseInt(channelCardDetails?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </p>
        )}
            </div>

        </Link>
    </div>
  )
}

export default ChannelCard