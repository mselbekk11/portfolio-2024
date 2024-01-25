import React from 'react'

const VideoOne = () => {
  return (
    <video width="100%" height="100%" muted autoPlay playsInline>
      <source src="/vid-1.mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoOne