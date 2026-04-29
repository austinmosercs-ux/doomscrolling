import { useEffect, useRef } from 'react'
import './ScrollBackdrop.css'

// these are the floating shapes in the background.
// speed = how fast the shape moves while scrolling
// (positive = slower than scroll, negative = it moves the other way)
const shapes = [
  { id: 'a', kind: 'ring',   top: '6%',  left:  '6%',   size: 220, speed:  0.35 },
  { id: 'b', kind: 'disc',   top: '14%', right: '12%',  size: 90,  speed: -0.25 },
  { id: 'c', kind: 'square', top: '22%', left:  '38%',  size: 110, speed:  0.15 },
  { id: 'd', kind: 'ring',   top: '32%', right: '4%',   size: 280, speed:  0.4 },
  { id: 'e', kind: 'block',  top: '40%', left:  '18%',  size: 80,  speed: -0.3 },
  { id: 'f', kind: 'square', top: '50%', left:  '60%',  size: 140, speed:  0.22 },
  { id: 'g', kind: 'disc',   top: '58%', left:  '6%',   size: 130, speed:  0.18 },
  { id: 'h', kind: 'block',  top: '66%', right: '24%',  size: 60,  speed: -0.2 },
  { id: 'i', kind: 'disc',   top: '74%', right: '8%',   size: 200, speed:  0.32 },
  { id: 'k', kind: 'square', top: '88%', left:  '12%',  size: 100, speed:  0.25 },
  { id: 'l', kind: 'block',  top: '94%', right: '34%',  size: 90,  speed:  0.12 }
]

export default function ScrollBackdrop() {
  const rootRef = useRef(null)

  useEffect(function () {
    var root = rootRef.current
    if (!root) return

    // grab all the shape elements one time
    var els = root.querySelectorAll('.backdrop-shape')

    // every time the page scrolls move each shape based on its speed
    function handleScroll() {
      var y = window.scrollY
      for (let i = 0; i < els.length; i++) {
        var speed = parseFloat(els[i].dataset.speed)
        if (!speed) speed = 0
        // translate3d so it uses the gpu (read this on stackoverflow)
        els[i].style.transform = "translate3d(0, " + (y * speed) + "px, 0)"
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return function () {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="scroll-backdrop" ref={rootRef} aria-hidden="true">
      {shapes.map(function (s) {
        return (
          <span
            key={s.id}
            className={"backdrop-shape backdrop-" + s.kind}
            data-speed={s.speed}
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              width: s.size,
              height: s.size
            }}
          />
        )
      })}
    </div>
  )
}
