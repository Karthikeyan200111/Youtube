import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'JS Mastery', icon: <CodeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

export const timeAgo=(timestamp)=> {
  const previous = new Date(timestamp);
  const current = new Date();
  
  const timeDiff = current - previous;
  
  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  
  if (timeDiff < minute) {
      return Math.floor(timeDiff / 1000) + " seconds ago";
  } else if (timeDiff < hour) {
      return Math.floor(timeDiff / minute) + " minutes ago";
  } else if (timeDiff < day) {
      return Math.floor(timeDiff / hour) + " hours ago";
  } else if (timeDiff < month) {
      return Math.floor(timeDiff / day) + " days ago";
  } else if (timeDiff < year) {
      return Math.floor(timeDiff / month) + " months ago";
  } else {
      return Math.floor(timeDiff / year) + " years ago";
  }
}
