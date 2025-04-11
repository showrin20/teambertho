import React from "react";


interface VideoProps {
  src: string;
  title: string;
}

interface WatchProps {
  videos: VideoProps[];
}

const Watch: React.FC<WatchProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 justify-center">
      {videos.map((video, index) => (
        <iframe
          key={index}
          width="560"
          height="315"
          src={video.src}
          title={video.title}
          className="rounded-lg shadow-lg w-full"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default Watch;
