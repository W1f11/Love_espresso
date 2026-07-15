import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PiMagnifyingGlassPlusBold } from 'react-icons/pi'
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { galleryItems } from '../data/gallery'

const EASE = [0.16, 1, 0.3, 1]

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length),
    [],
  )
  const showNext = useCallback(() => setActiveIndex((i) => (i + 1) % galleryItems.length), [])

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, showPrev, showNext])

  const active = isOpen ? galleryItems[activeIndex] : null

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="gallery__header">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Gallery
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Moments, brewed <em>and shared</em>
          </motion.h2>
        </div>

        <div className="gallery__masonry">
          {galleryItems.map((item, i) => (
            <motion.button
              type="button"
              key={item.id}
              className={`gallery__item ${item.tall ? 'gallery__item--tall' : ''}`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
              aria-label={`View larger image: ${item.caption}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery__overlay">
                <PiMagnifyingGlassPlusBold />
                <span>{item.caption}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            onClick={close}
          >
            <button type="button" className="lightbox__close" onClick={close} aria-label="Close lightbox">
              <HiOutlineX />
            </button>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Previous image"
            >
              <HiOutlineChevronLeft />
            </button>

            <motion.figure
              key={active.id}
              className="lightbox__figure"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.alt} />
              <figcaption>{active.caption}</figcaption>
            </motion.figure>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Next image"
            >
              <HiOutlineChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
