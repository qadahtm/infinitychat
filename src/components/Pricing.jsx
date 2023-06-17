import React from 'react'
import styles from "../style";
import {BsCreditCard} from 'react-icons/bs';
import { IoCheckmark } from 'react-icons/io5'
import {PricingTable} from '@aiherrera/react-pricing-table'
// import plans from './constans/index';
import { motion, AnimatePresence  } from 'framer-motion';
import { URL_App } from '../constants/index';

const Pricing = () => {
    const plans = [
        {
            id: 'basic',
            circle: 'B',
            title: 'Basic',
            // subtitle: 'Hobyy',
            price: 'Free',
            // discount: '6,500',
            buttonText: 'Try it',
            popular: false,
            features: (
                <ul>
                    <li className='flex'>
                        <IoCheckmark />
                        <span>Single PDF</span>
                    </li>
                    <li className='flex'>
                        <IoCheckmark />
                        <span>Max data size: 10 MB</span>
                    </li>
                    <li className='flex'>
                        <IoCheckmark />
                        <span>Web-based chat</span>
                    </li>
                </ul>
            )
        },
        {
            id: 'premium',
            circle: 'P',
            title: 'Premium',
            subtitle: 'Optimized',
            price: 'USD $20/mo',
            buttonText: 'Select plan',
            popular: true,
            features: (
            <ul>
                <li className='flex'>
                    <IoCheckmark />
                    <span>Up to 100 PDFs</span>
                </li>
                <li className='flex'>
                    <IoCheckmark />
                    <span>Max data size: 1 GB</span>
                </li>
                <li className='flex'>
                    <IoCheckmark />
                    <span>Priority access to new features</span>
                </li>
                <li className='flex'>
                    <IoCheckmark />
                    <span>Web-based and Telegram </span>
                </li>
            </ul>
            )
        },
        {
            id: 'custom',
            circle: 'C',
            title: 'Custom',
            subtitle: 'Optimized with Support',
            price: 'USD $55/mo',
            buttonText: 'Select plan',
            popular: false,
            features: (
            <ul>
                <li className='flex'>
                    <IoCheckmark />
                    <span>Contact Us</span>
                </li>
            </ul>
            )
        }
    ]

    const main = '#11101d'
    const features = '#A5A5F0'
    const font = '#000'
    const fontInverted = '#fff'
    const background = '#1d1624'
    const popular = 'white'
    const checkMark = '#89ce94'

    const handleClick = (e) => {
        console.log(e);
        if(e === 'basic'){
            window.open(URL_App);
        }
        else if(e === 'standard'){
            alert("coming soon")
        }
        else if(e === 'premium'){
            alert("coming soon")
        }
    }

    return (
        <section id="pricingPlan" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
            <h2 className={styles.heading2}>
                <div className='flex items-center gap-2'>
                    Pricing plans <BsCreditCard />
                </div>
            </h2>
            <AnimatePresence>
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className={`${styles.paragraph} w-[100%] flex-nowrap sm:flex-wrap`}>
                        <div className='flex justify-center mt-3'>
                            <p className={styles.paragraph}> Select the best plan that suite for you.</p>
                        </div>
                            <PricingTable
                                plans={plans}
                                color={{
                                    main,
                                    features,
                                    font,
                                    fontInverted,
                                    background,
                                    popular,
                                    checkMark
                                }}
                                handleClick={handleClick}
                            />
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default Pricing;
