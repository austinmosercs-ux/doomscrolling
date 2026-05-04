import { useEffect, useRef } from 'react'
import './ScrollBackdrop.css'

export default function ScrollBackdrop() {
  const wrapperRef = useRef(null)

  useEffect(() => {
    // grab all the shape elements so we can move them
    const shapeEls = wrapperRef.current.querySelectorAll('.backdrop-shape')

    function handleScroll() {
      const scrollY = window.scrollY

      shapeEls.forEach(el => {
        const speed = Number.parseFloat(el.dataset.speed)
        el.style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    // run once so shapes start in the right spot
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-backdrop" ref={wrapperRef} aria-hidden="true">
      <span className="backdrop-shape backdrop-ring   shape-a" data-speed={0.35} />
      <span className="backdrop-shape backdrop-disc   shape-b" data-speed={-0.25} />
      <span className="backdrop-shape backdrop-square shape-c" data-speed={0.15} />
      <span className="backdrop-shape backdrop-ring   shape-d" data-speed={0.4} />
      <span className="backdrop-shape backdrop-block  shape-e" data-speed={-0.3} />
      <span className="backdrop-shape backdrop-square shape-f" data-speed={0.22} />
      <span className="backdrop-shape backdrop-disc   shape-g" data-speed={0.18} />
      <span className="backdrop-shape backdrop-block  shape-h" data-speed={-0.2} />
      <span className="backdrop-shape backdrop-disc   shape-i" data-speed={0.32} />
      <span className="backdrop-shape backdrop-square shape-k" data-speed={0.25} />
      <span className="backdrop-shape backdrop-block  shape-l" data-speed={0.12} />
    </div>
  )
}
