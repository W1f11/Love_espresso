import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PiCoffeeBeanFill } from 'react-icons/pi'
import { HiOutlineArrowDown } from 'react-icons/hi'
import heroPoster from '../assets/images/about.jpg'
import heroVideo from '../assets/videos/video.mp4'

const EASE = [0.16, 1, 0.3, 1]

const BEANS = [
  { top: '18%', left: '10%', size: 22, duration: 8, delay: 0 },
  { top: '68%', left: '6%', size: 16, duration: 6.5, delay: 1.2 },
  { top: '28%', left: '90%', size: 18, duration: 7.5, delay: 0.6 },
  { top: '72%', left: '88%', size: 24, duration: 9, delay: 1.8 },
  { top: '50%', left: '4%', size: 12, duration: 5.5, delay: 2.4 },
]

const STEAMS = [
  { left: '46%', height: 70, delay: 0 },
  { left: '50%', height: 90, delay: 0.8 },
  { left: '54%', height: 65, delay: 1.6 },
]

function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '55%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <motion.div className="hero__media" style={{ y: videoY }}>
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </motion.div>

      <div className="hero__ambient" aria-hidden="true">
        {STEAMS.map((s, i) => (
          <span
            key={i}
            className="steam-wisp"
            style={{
              left: s.left,
              height: `${s.height}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        {BEANS.map((b, i) => (
          <PiCoffeeBeanFill
            key={i}
            className="floating-bean hero__bean"
            style={{
              top: b.top,
              left: b.left,
              fontSize: `${b.size}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.span
          className="eyebrow eyebrow--light"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          Espresso Love
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        >
          Crafted Coffee.
          <br />
          <em>Made With Passion.</em>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
        >
          Discover handcrafted coffee, irresistible desserts and unforgettable breakfasts in an
          elegant atmosphere.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
        >
          <a href="#menu" className="btn btn-primary">
            Explore Menu
          </a>
          <a href="#contact" className="btn btn-outline">
            Book a Table
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll</span>
        <motion.span
          className="hero__scroll-icon"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiOutlineArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
