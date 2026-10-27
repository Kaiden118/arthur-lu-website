'use client'

import { useEffect, useRef, useState } from 'react'

type Section = { id: string; label: string }

// How far down the viewport a section's top must pass to count as the one being read.
const readingLine = 0.35

// Marks the section being read. Without JavaScript the links still work as plain anchors.
export function SectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string | null>(null)
  // While a jump from a click or a link with a hash is scrolling, keep the chosen section marked.
  const pinned = useRef(false)
  const pinTimer = useRef<number | undefined>(undefined)

  const pin = (id: string) => {
    setActive(id)
    pinned.current = true
    window.clearTimeout(pinTimer.current)
    // Released once scrolling stops; this covers a jump that does not scroll at all.
    pinTimer.current = window.setTimeout(() => (pinned.current = false), 1000)
  }

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const page = document.documentElement
      // The last sections are too short to reach the reading line, so the page bottom marks the last one.
      if (window.innerHeight + window.scrollY >= page.scrollHeight - 2) {
        setActive(sections[sections.length - 1].id)
        return
      }
      let current: string | null = null
      for (const { id } of sections) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= window.innerHeight * readingLine) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (pinned.current) {
        window.clearTimeout(pinTimer.current)
        pinTimer.current = window.setTimeout(() => (pinned.current = false), 150)
        return
      }
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    const hash = window.location.hash.slice(1)
    if (sections.some(({ id }) => id === hash)) pin(hash)
    else update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.cancelAnimationFrame(frame)
      window.clearTimeout(pinTimer.current)
    }
  }, [sections])

  return (
    <nav className="toc" aria-label="Sections">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? 'location' : undefined}
          onClick={() => pin(section.id)}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}
