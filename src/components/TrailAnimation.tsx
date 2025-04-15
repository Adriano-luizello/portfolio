import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

interface AnimationParams {
  pointsNumber: number;
  widthFactor: number;
  mouseThreshold: number;
  spring: number;
  friction: number;
}

export function TrailAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const mouseMoved = useRef(false);
  
  const pointer = useRef({
    x: 0,
    y: 0,
  });

  const params: AnimationParams = {
    pointsNumber: 20,
    widthFactor: 0.2,
    mouseThreshold: 0.6,
    spring: 0.6,
    friction: 0.4
  };

  const trail = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setupCanvas = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    const getMousePos = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const initTrail = () => {
      if (!canvas) return;
      pointer.current = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };

      trail.current = Array(params.pointsNumber).fill(null).map(() => ({
        x: pointer.current.x,
        y: pointer.current.y,
        dx: 0,
        dy: 0
      }));
    };

    const update = (t: number) => {
      if (!ctx || !canvas) return;

      if (!mouseMoved.current) {
        pointer.current.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * canvas.width;
        pointer.current.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * canvas.height;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer.current : trail.current[pIdx - 1];
        const spring = pIdx === 0 ? 0.7 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
      ctx.beginPath();
      ctx.moveTo(trail.current[0].x, trail.current[0].y);

      for (let i = 1; i < trail.current.length - 1; i++) {
        const xc = 0.5 * (trail.current[i].x + trail.current[i + 1].x);
        const yc = 0.5 * (trail.current[i].y + trail.current[i + 1].y);
        ctx.quadraticCurveTo(trail.current[i].x, trail.current[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail.current[trail.current.length - 1].x, trail.current[trail.current.length - 1].y);
      ctx.stroke();

      animationFrameRef.current = window.requestAnimationFrame(update);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseMoved.current = true;
      const pos = getMousePos(e);
      pointer.current = pos;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      mouseMoved.current = true;
      const pos = getMousePos(e.touches[0]);
      pointer.current = pos;
    };

    setupCanvas();
    initTrail();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", setupCanvas);

    animationFrameRef.current = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", setupCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
} 