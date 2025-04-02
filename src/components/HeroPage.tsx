import { useEffect, useRef } from "preact/hooks"

const HeroPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    if (!canvasRef.current) return;
  }, [])
  return (
    <section className="heropage onscroll">
      <canvas id="heropage-bg" ref={canvasRef} />
      <h2>Manoj Panda</h2>
      <p>
        I'm Manoj Kumar Panda, a BCS student & web dev enthusiast.<br />
        Passionate about web development, machine learning, and gaming.
      </p>
    </section>
  )
}

export default HeroPage
