import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import intro from '../assets/pexels-tima-miroshnichenko-5319099.mp4'

const Video = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();
  
    return (
      <div className="relative h-full ">
        <video
        className="h-full w-screen  bg-cover"
          ref={vidRef}
          src={intro}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div className="absolute inset-0 flex justify-center items-center video">
          <div
            className="circle flex justify-center items-center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    );
}

export default Video