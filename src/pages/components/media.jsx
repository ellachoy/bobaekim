import React from 'react'
import YouTube from 'react-youtube'

export default function Media() {
  return (
    <YouTube
      className='media'
      videoId='aMzSLeAgIKs'
      opts={{
        width: '0',
        height: '0',
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          showinfo: 0,
          mute: 0,
          loop: 1,
          playlist: 'aMzSLeAgIKs',
        },
      }}
    />
  )
}
