import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      // Interpolation factor for smoothness (lower = slower)
      const ease = 0.02; // ~1s delay in reaching target

      currentPos.current.x += (mousePos.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "500px",
        height: "500px",
        background: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        mixBlendMode: "difference",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
