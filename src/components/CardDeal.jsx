import React from 'react'
import {card} from '../assets'
import styles,{layout} from '../style'
import Button from './Button' 

const CardDeal = () => (
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Find a Better Card Deal <br className="sm:block hidden" /> in a Few Easy Steps.
  </h2>

  <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
  Discover exciting card deals and unlock a world of savings with our banking website's exclusive offers. Whether you're looking for discounts on dining, shopping, travel, or entertainment, our card deals program has you covered.
</p>
<Button styles="mt-10" />
  </div>

  <div className={layout.sectionImg}>
  <img src={card}  className="w-[100%] h-[100%]"/>
  </div>
  </section>
)

export default CardDeal