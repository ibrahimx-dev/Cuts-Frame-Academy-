import { useEffect, useRef, useState } from "react";
import "./FrameScroll.css";

const frameModules = import.meta.glob("./assets/Frames/frame_*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const frames = Object.entries(frameModules)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, src]) => src);

function FrameScroll() {
  const sectionRef = useRef(null);
  const preloadedFramesRef = useRef(new Map());
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const firstFrame = Math.max(0, frameIndex - 8);
    const lastFrame = Math.min(frames.length - 1, frameIndex + 16);

    for (const [index, image] of preloadedFramesRef.current) {
      if (index < firstFrame || index > lastFrame) {
        preloadedFramesRef.current.delete(index);
      }
    }

    for (let index = firstFrame; index <= lastFrame; index += 1) {
      if (index === frameIndex || preloadedFramesRef.current.has(index)) continue;

      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = "low";
      image.src = frames[index];
      preloadedFramesRef.current.set(index, image);
    }
  }, [frameIndex]);

  useEffect(() => {
    let animationFrame;
    const updateFrame = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section || frames.length < 2) return;

        const bounds = section.getBoundingClientRect();
        const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -bounds.top / scrollableDistance));
        setFrameIndex(Math.round(progress * (frames.length - 1)));
      });
    };

    window.addEventListener("scroll", updateFrame, { passive: true });
    window.addEventListener("resize", updateFrame);
    updateFrame();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", updateFrame);
    };
  }, []);

  return (
    <section className="frame-scroll" ref={sectionRef} aria-label="Cuts and Frames cinematic sequence">
      <div className="frame-scroll__stage">
        <img
          className="frame-scroll__image"
          src={frames[frameIndex]}
          alt="A cinematic frame from the Cuts and Frames Academy reel"
          fetchPriority="high"
          draggable="false"
        />
        <div className="frame-scroll__shade" />
        <div className="frame-scroll__caption">
          <span className="frame-scroll__eyebrow">CUTS &amp; FRAMES ACADEMY</span>
          <h1>Every frame tells a story.</h1>
        </div>
        <div className="frame-scroll__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${frameIndex / (frames.length - 1)})` }} />
        </div>
      </div>
    </section>
  );
}

export default FrameScroll;
