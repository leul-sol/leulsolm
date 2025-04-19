"use client";

import { useEffect, useRef } from "react";

export default function GeometricFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const curvePointsRef = useRef<Array<{ x: number; y: number; cy: number }>>(
    []
  );
  const frameRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize curve points
    const initCurvePoints = () => {
      curvePointsRef.current = Array.from({ length: 5 }, (_, i) => ({
        x: 0,
        y: canvas.height * (0.3 + i * 0.1),
        cy: canvas.height * (0.3 + i * 0.1),
      }));
    };

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCurvePoints();
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update time
      timeRef.current += 0.01;

      // Update and draw curves
      curvePointsRef.current.forEach((point, index) => {
        // Update point positions with wave-like motion
        point.y = point.cy + Math.sin(timeRef.current + index * 0.5) * 50;

        // Create multiple parallel curves
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          ctx.moveTo(0, point.y + j * 20);

          // Create control points for the curve
          const cp1x = canvas.width * 0.25;
          const cp1y =
            point.y + Math.sin(timeRef.current + 1 + index * 0.5) * 50 + j * 20;
          const cp2x = canvas.width * 0.75;
          const cp2y =
            point.y + Math.sin(timeRef.current + 2 + index * 0.5) * 50 + j * 20;

          // Draw the curve
          ctx.bezierCurveTo(
            cp1x,
            cp1y,
            cp2x,
            cp2y,
            canvas.width,
            point.y + j * 20
          );

          // Style the curve with purple color (text-purple-600)
          ctx.strokeStyle = `rgba(147, 51, 234, ${
            0.1 - j * 0.02 - index * 0.01
          })`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 bg-transparent"
    />
  );
}
