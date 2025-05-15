'use client'
import React, { useEffect } from 'react'
import YouTube from 'react-youtube'

function VideoPlayer({ videoId }) {
  console.log('videoPlayer', videoId)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
  useEffect(() => {
    console.log(videoId)
  }, [videoId]);

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={opts}
      >
      </YouTube>
    </div>
  )
}

export default VideoPlayer