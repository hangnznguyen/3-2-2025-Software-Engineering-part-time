import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // 1. Create the ref

  function handleClick() {
    // 3. Use the ref to call DOM functions
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying); // toggle play/pause state
  }

  return (
    <div className="VideoPlayer componentBox">
      {/* button to play or pause the video */}
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* 2. Attach the ref to the video element */}
      <video ref={videoRef} width="250">
        <source
          type="video/mp4"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </video>
    </div>
  );
}

// Note: The video source URL is a placeholder and may not work in all environments.