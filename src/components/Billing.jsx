import React from 'react'

import {apple,bill,google} from '../assets'
import styles,{layout} from '../style'
 

const Billing = () => (
<section id="product" className={layout.sectionReverse}> 

<div className={layout.sectionImgReverse}>
<img src={bill} className="w-[100%] h-[100%] relative z-[5]"/>

<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>

<div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
</div>

<div className={layout.sectionInfo}>
<h2 className={styles.heading2}> Easily Control Your <br className="sm:block hidden" /> Billing & Invoicing
</h2>

<p className={`${styles.paragraph} max-w-[520px] mt-5`}>
Introducing our comprehensive billing services designed to streamline financial transactions and enhance user experience on our banking website. Our billing services offer a seamless and secure platform for managing payments, invoices, and billing activities.
</p>

<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
<img src={apple} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
<img src={google} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
</div>

</div>
</section>
)
 
 

export default Billing