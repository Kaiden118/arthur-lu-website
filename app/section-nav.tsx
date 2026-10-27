'use client'

import { useEffect, useState } from 'react'

type Section = { id: string; label: string }

// Marks the section being read. Without JavaScript the links still work as plain anchors.
export function SectionNav({ sections, observe }: { sections: Section[]; observe: string[] }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // A section is current while it crosses a band just above the middle of the viewport.
      { rootMargin: '-35% 0px -60% 0px' },
    )

    observe.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [observe])

  return (
    <nav className="toc" aria-label="Sections">
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined}>
          {section.label}
        </a>
      ))}
    </nav>
  )
}
