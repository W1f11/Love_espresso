import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { GiCoffeeBeans, GiFruitBowl, GiCupcake, GiSofa } from 'react-icons/gi'
import { PiHandHeartFill } from 'react-icons/pi'

const EASE = [0.16, 1, 0.3, 1]

const FEATURES = [
  {
    icon: GiCoffeeBeans,
    title: 'Premium Handcrafted Coffee',
    text: 'Small-batch beans, roasted for depth and pulled to order by hand.',
  },
  {
    icon: GiFruitBowl,
    title: 'Fresh Ingredients',
    text: 'Sourced daily, chosen for flavor first — nothing sits in storage.',
  },
  {
    icon: GiCupcake,
    title: 'Homemade Desserts',
    text: 'Baked in-house every morning, from crepes to classic pastries.',
  },
  {
    icon: GiSofa,
    title: 'Relaxing Atmosphere',
    text: 'Warm light, soft seating and quiet corners built for lingering.',
  },
  {
    icon: PiHandHeartFill,
    title: 'Friendly Staff',
    text: 'A team that remembers your order — and asks about your day.',
  },
]

const STATS = [
  { value: 10000, suffix: 'K+', display: (v) => `${Math.round(v / 1000)}K+`, label: 'Customers' },
  { value: 150, suffix: '+', display: (v) => `${Math.round(v)}+`, label: 'Recipes' },
  { value: 20, suffix: '+', display: (v) => `${Math.round(v)}+`, label: 'Coffee Varieties' },
  { value: 5, suffix: '★', display: (v) => `${v.toFixed(1)}★`, label: 'Rating' },
]

function Counter({ target, display }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <span ref={ref} className="about__stat-value">
      {display(value)}
    </span>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          className="about__media"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <img
            src="/src/assets/images/about.jpg"
            alt="Barista carefully pouring latte art at Espresso Love"
          />
          <div className="about__media-frame" aria-hidden="true" />
        </motion.div>

        <div className="about__content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            About Us
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            Where every cup <em>tells a story</em>
          </motion.h2>

          <motion.p
            className="section-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            At Espresso Love, every detail is considered — from the bean to the cup, the
            ingredient to the plate, the seat to the welcome. It's a place built for slowing down.
          </motion.p>

          <ul className="about__features">
            {FEATURES.map((feature, i) => (
              <motion.li
                key={feature.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.08 * i }}
              >
                <span className="about__feature-icon">
                  <feature.icon />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about__divider" aria-hidden="true">
        <div className="coffee-ring" />
      </div>

      <div className="container">
        <div className="about__stats">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 * i }}
            >
              <Counter target={stat.value} display={stat.display} />
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
