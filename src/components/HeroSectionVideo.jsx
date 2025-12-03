import React, { useEffect, useRef, useState } from "react";
import BSNLVIDEO from "../assets/video/BSNLVIDEO.mp4";

const HeroSectionVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  // Set playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.35;
    }
  }, []);

  // Smooth scroll zoom
  useEffect(() => {
    const handleScroll = () => {
      const box = containerRef.current;
      const vid = videoRef.current;
      if (!box || !vid) return;

      const rect = box.getBoundingClientRect();
      const visible = Math.max(0, Math.min(1, 1 - rect.top / 400));

      vid.style.transform = `scale(${1 + visible * 0.04})`;
      vid.style.opacity = 0.85 + visible * 0.15;
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
        {/* SKELETON SHIMMER */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-sm">
            <div className="w-full h-full shimmer" />
          </div>
        )}

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        {/* VIDEO */}
        <video
          ref={videoRef}
          className={`
            w-full h-full object-cover transition-transform duration-[1200ms]
            ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={BSNLVIDEO} type="video/mp4" />
        </video>
      </div>

      {/* Animation styles */}
      <style>
        {`
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

        /* Shimmer Loading */
        .shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            rgba(255,255,255,0.05) 0%,
            rgba(255,255,255,0.15) 25%,
            rgba(255,255,255,0.05) 50%
          );
          background-size: 200% 100%;
          animation: shimmerMove 1.6s linear infinite;
        }

        @keyframes shimmerMove {
          from { background-position: -200% 0; }
          to { background-position: 200% 0; }
        }
        `}
      </style>
    </div>
  );
};

export default HeroSectionVideo;
