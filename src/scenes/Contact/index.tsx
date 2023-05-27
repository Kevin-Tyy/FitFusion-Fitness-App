import React from 'react'
import { SelectedPage } from '../../Types/Types'
import { motion } from 'framer-motion'
import ContactUsGraphic from '../../assets/ContactUsPageGraphic.png'
import Typography from '../../shared/Typography'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({ setSelectedPage }: Props) => {
    const handleSubmit = async (e : any ) => {
        
    }
    return (
        <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className='md:w-3/5'
                >
                    <Typography>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </Typography>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut dolores rerum libero, nulla quisquam facilis doloremque cumque, autem nobis neque suscipit ducimus esse quae eum molestias harum consectetur velit.
                    </p>
                </motion.div>
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className='mt-10 basis-3/5  md:mt-0'
                    >
                        <form
                            onSubmit={handleSubmit}
                        >

                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact