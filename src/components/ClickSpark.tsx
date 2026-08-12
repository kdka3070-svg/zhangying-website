import React, { useEffect, useRef } from 'react';

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor = '#ffffff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(parent);
    resizeCanvas();

    const easeFunc = (t: number) => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case 'ease-out':
        default:
          return t * (2 - t);
      }
    };

    const draw = (timestamp: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const sparks = sparksRef.current;
      const nextSparks: Spark[] = [];

      sparks.forEach((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const eased = easeFunc(progress);

          const distance = eased * sparkRadius * extraScale;
          const lineLength = sparkSize * (1 - progress);

          const x1 = spark.x + Math.cos(spark.angle) * Math.max(0, distance - lineLength);
          const y1 = spark.y + Math.sin(spark.angle) * Math.max(0, distance - lineLength);
          const x2 = spark.x + Math.cos(spark.angle) * distance;
          const y2 = spark.y + Math.sin(spark.angle) * distance;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = sparkColor;
          ctx.lineWidth = 2.5;
          ctx.lineCap = 'round';
          // Dark outline shadow to ensure white sparks stand out clearly on light background
          ctx.shadowColor = 'rgba(45, 52, 54, 0.4)';
          ctx.shadowBlur = 3;
          ctx.stroke();
          ctx.restore();

          nextSparks.push(spark);
        }
      });

      sparksRef.current = nextSparks;

      if (sparksRef.current.length > 0) {
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = performance.now();
      const newSparks: Spark[] = [];

      for (let i = 0; i < sparkCount; i++) {
        const angle = (2 * Math.PI * i) / sparkCount;
        newSparks.push({
          x,
          y,
          angle,
          startTime: now,
        });
      }

      const wasEmpty = sparksRef.current.length === 0;
      sparksRef.current.push(...newSparks);

      if (wasEmpty) {
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    // Attach to window or parent so any click triggers the spark effect
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 w-full h-full"
      />
      {children}
    </div>
  );
};

export default ClickSpark;
