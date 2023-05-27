import { SelectedPage } from '../../Types/Types'
import ActionButton from '../../shared/ActionButton'
import useMediaQuery from '../../Hooks/useMediaQuery'
import HomePageText from '../../assets/HomePageText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import SponsorRedBull from '../../assets/SponsorRedBull.png'
import SPonsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width : 1060px)')
    return (
        <section
            id='home'
            className='gap-16 bg-gray-20 py-10 md:h-full'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                className='md:flex mx-auto w-5/6 items-center md:h-5/6'>
                <div className='z-10 mt-32 md:basis-3/5'>
                    <motion.div 
                        initial= "hidden"
                        whileInView="visible"
                        viewport={{once: false , amount : 0.5}}
                        transition={{ duration : 0.7}}
                        variants={{
                            hidden : {opacity: 0 , x: -100},
                            visible : {opacity: 1 , x: 0}
                        }}
                        className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt='home-page-text' />
                            </div>
                        </div>
                        <p className='mt-8 text-sm'>
                            Unrivaled gym. Unparallel training Fitness Classes.World class Studios to get the Body Shape That you dream of... Get your dream body now
                        </p>
                    </motion.div>
                    <motion.div 
                         initial= "hidden"
                         whileInView="visible"
                         viewport={{once: false , amount : 0.5}}
                         transition={{ delay: 0.3 , duration : 0.7}}
                         variants={{
                             hidden : {opacity: 0 , x: -100},
                             visible : {opacity: 1 , x: 0}
                         }}
                         className='mt-8 flex items-center gap-8'>
                        <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500  underline hover:text-secondary-500 '
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn more</p>
                        </AnchorLink>

                    </motion.div>
                </div>
                <div className='flex basis-3/5 z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                    <img alt="homePageGraphic.png" src={HomePageGraphic} />
                </div>
            </motion.div>
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10 '>
                    <div className='flex justify-center'>
                        <div className='flex w-3/5 items-center justify-between  gap-8'>
                            <img alt="redbull" src={SponsorRedBull} />
                            <img alt="forbed" src={SPonsorForbes} />
                            <img alt="fortune" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default index