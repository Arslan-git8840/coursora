'use client';

import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({ videoId }) {
  useEffect(() => {
    console.log('videoPlayer', videoId);
  }, [videoId]);

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    // <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
    //   <div className="absolute top-0 left-0 w-full h-full">
    //     <YouTube
    //       videoId={videoId}
    //       opts={{ ...opts, width: '100%', height: '100%' }}
    //       className="w-full h-full"
    //     />
    //   </div>
    // </div>
    <YouTube
      videoId={videoId}
      opts={{ ...opts, width: '100%', height: '100%' }}
      className="w-full h-full"
    />
  );
}

export default VideoPlayer;
