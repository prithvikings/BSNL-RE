import React, { useEffect, useRef } from "react";
import BSNLVIDEO from "../assets/video/BSNLVIDEO.mp4";

const HeroSectionVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Set playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.35;
    }
  }, []);

  // Linear-style scroll zoom
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const video = videoRef.current;
      if (!container || !video) return;

      const rect = container.getBoundingClientRect();
      const visible = Math.max(0, Math.min(1, 1 - rect.top / 400));

      video.style.transform = `scale(${1 + visible * 0.04})`;
      video.style.opacity = 0.85 + visible * 0.15;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 pb-10 px-4">
      <div
        className="
          relative w-full rounded-3xl overflow-hidden
          bg-neutral-900/80 backdrop-blur-xl
          ring-1 ring-white/10
          shadow-[0_20px_60px_-10px_rgba(0,0,0,0.45)]
          animate-smoothReveal
        "
      >
        {/* Subtle Highlight Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BSNLVIDEO} type="video/mp4" />
        </video>
      </div>

      <style>
        {`
          /* Smooth, Linear-style reveal */
          .animate-smoothReveal {
            animation: smoothReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes smoothReveal {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.985);
              filter: blur(6px);
            }
            60% {
              opacity: 1;
              filter: blur(2px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSectionVideo;
