import React from 'react'

const VideoOne = () => {
  return (
    <video width="100%" height="100%" muted autoPlay loop playsInline>
      <source src="https://res.cloudinary.com/dtjasyr7k/video/upload/v1706134779/Morgans_video_3_xqq85d.mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoOne