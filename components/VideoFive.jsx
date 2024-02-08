import React from 'react'

const VideoOne = () => {
  return (
    <video width="100%" height="100%" muted autoPlay loop playsInline>
      <source src="https://res.cloudinary.com/dtjasyr7k/video/upload/v1707419859/vid-5_vjufpi.mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoOne