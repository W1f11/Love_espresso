import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PiCoffeeBeanFill, PiHeart, PiHeartFill } from 'react-icons/pi'
import { menuCategories, menuItems } from '../data/menu'

const EASE = [0.16, 1, 0.3, 1]

const formatPrice = (price) => `${price.toFixed(2)} DH`

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
  const [favorites, setFavorites] = useState(() => new Set())

  const items = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="menu__header">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Menu
          </motion.span>
          <motion.h2
            className="section-heading menu__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <PiCoffeeBeanFill aria-hidden="true" />
            Crafted for every craving
          </motion.h2>
          <motion.p
            className="section-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            From a tight single-shot espresso to a slow iced V60 — every drink on our board is
            made to order, priced simply, no surprises.
          </motion.p>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu__tab ${activeCategory === cat.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={activeCategory}
            className="menu__list"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {items.map((item, i) => {
              const isFav = favorites.has(item.id)
              return (
                <motion.li
                  key={item.id}
                  className="menu__row"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: Math.min(i, 10) * 0.035 }}
                >
                  <button
                    type="button"
                    className={`menu__fav ${isFav ? 'menu__fav--active' : ''}`}
                    onClick={() => toggleFavorite(item.id)}
                    aria-label={isFav ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
                    aria-pressed={isFav}
                  >
                    {isFav ? <PiHeartFill /> : <PiHeart />}
                  </button>
                  <span className="menu__row-name">{item.name}</span>
                  <span className="menu__row-leader" aria-hidden="true" />
                  <span className="menu__row-price">{formatPrice(item.price)}</span>
                </motion.li>
              )
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Menu
