import { useEffect, useRef, useState } from 'react';

// Frame geometry as CSS variables (canvas px); crop as percentages of the frame
// so the media stays framed identically when the frame is resized on mobile.
const frameVars = (x, y, w, h, delay) => ({ '--x': x, '--y': y, '--w': w, '--h': h, '--delay': `${delay}ms` });
const cropStyle = (crop, w, h) => ({
  left: `${(crop.x / w) * 100}%`,
  top: `${(crop.y / h) * 100}%`,
  width: `${(crop.w / w) * 100}%`,
  height: `${(crop.h / h) * 100}%`,
});

/**
 * Frame + crop: the frame is the visible box, `crop` places the full media
 * inside it ({ x, y, w, h } relative to the frame, usually negative offsets).
 * `variant`: 'full' spans the column on mobile, 'bg' stays a full-bleed background.
 */
export function Picture({ x, y, w, h, crop, src, alt = '', opacity, variant, delay = 0 }) {
  return (
    <div
      className={`frame reveal${variant ? ` frame--${variant}` : ''}`}
      style={{ ...frameVars(x, y, w, h, delay), opacity }}
    >
      <img src={src} alt={alt} draggable={false} style={cropStyle(crop, w, h)} />
    </div>
  );
}

/** Muted looping reel that plays while on screen; click toggles sound. */
export function Reel({ x, y, w, h, crop, src, poster, label, delay = 0 }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(frameRef.current);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <div
      ref={frameRef}
      className={`frame frame--video reveal${muted ? '' : ' is-unmuted'}`}
      style={frameVars(x, y, w, h, delay)}
      onClick={toggleSound}
      role="button"
      tabIndex={0}
      aria-label={`${label}${muted ? ' — play with sound' : ' — mute'}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggleSound())}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        style={cropStyle(crop, w, h)}
      />
      <span className="sound-toggle" aria-hidden="true">
        {muted ? <MutedIcon /> : <SoundIcon />}
      </span>
    </div>
  );
}

/** Circular brand logo; crop is in the 64x64 units Canva uses for the circle. */
export function Logo({ x, y, size = 141, crop, src, alt, delay = 0 }) {
  return (
    <div className="logo reveal" style={frameVars(x, y, size, size, delay)}>
      <img src={src} alt={alt} draggable={false} style={cropStyle(crop, 64, 64)} />
    </div>
  );
}

export function Line({ x, y, w, color = '#000', align = 'start', delay = 0 }) {
  return (
    <div
      className={`line reveal line--${align}`}
      style={{ '--x': x, '--y': y, '--w': w, '--delay': `${delay}ms`, background: color }}
    />
  );
}

const MutedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 5 6 9H2v6h4l5 4V5Z" fill="currentColor" />
    <path d="m22 9-6 6M16 9l6 6" />
  </svg>
);

const SoundIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 5 6 9H2v6h4l5 4V5Z" fill="currentColor" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
  </svg>
);
