import { SelectedPage } from '../../Types/Types'
import { motion } from 'framer-motion'
import ContactUsGraphic from '../../assets/ContactUsPageGraphic.png'
import Typography from '../../shared/Typography'
import { useForm } from 'react-hook-form'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({ setSelectedPage }: Props) => {
    const { register, trigger, formState: { errors } } = useForm()

    const handleSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }


    }
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-neutral-600 outline-none text-white`
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
                            target='_blank'
                            onSubmit={handleSubmit}
                            method='post'
                            action='https://formsubmit.co/a51e893bb0656265f1949de1c3bcde28'
                        >
                            <input
                                type='text'
                                className={inputStyles}
                                placeholder='NAME'
                                {...register("name", {
                                    required: true,
                                    maxLength: 70
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-red-500'>
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Maximum length of name is 70 characters"}
                                </p>
                            )}
                            <input
                                type='text'
                                className={inputStyles}
                                placeholder='EMAIL'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-red-500'>
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email address"}
                                </p>
                            )}
                            <textarea
                                rows={4}
                                className={`${inputStyles} resize-none`}
                                placeholder='MESSAGE'
                                {...register("message", {
                                    required: true,
                                    maxLength: 1000,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-red-500'>
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "maxLenght" && "Maximum length of this field is 2000 characters"}
                                </p>
                            )}
                            <button
                                className="mt-5 w-full rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 text-white"
                                type='submit'
                            >
                                SUBMIT
                            </button>
                        </form>

                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay : 0.3, duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className='relative mt-16 basis-2/5 md:mt-0'
                    >
                        <div className='md:before:content-evolvetext w-full before:absolute before:-right-10 before:-bottom-20 before:z-[-1]'>
                            <img
                                className='w-4/6 min-w-[350px]'
                                src={ContactUsGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact