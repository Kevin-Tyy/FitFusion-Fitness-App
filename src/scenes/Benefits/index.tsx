import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline"
import { BenefitType, SelectedPage } from "../../Types/Types"
import { motion } from "framer-motion"
import Typography from "../../shared/Typography"
import BenefitComponent from "./BenefitComponent"
import ActionButton from "../../shared/ActionButton"
import BenefitsPageGraphics from '../../assets/BenefitsPageGraphic.png'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: "State Of The Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse sit officia totam sequi inventore corporis ipsa exercitationem quam eaque voluptate"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "100's Of Diverse Classes",
        description: "Aperiam itaque neque atque? Inventore repudiandae alias nam molestias obcaecati temporibus eaque voluptatem numquam, sunt"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: "Expert And Pro Trainers",
        description: "Hic possimus autem ad ipsa et laboriosam itaque harum voluptates minus sapiente, consequatur, aperiam at qui quos consectetur rem "
    },
]
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.4 }
    }
}
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="md:my-5 md:w-3/5">
                    <Typography>MORE THAN JUST A GYM</Typography>
                    <p className="my-5 text-sm">
                        We provide a world class fitness equipment trainers and classes to get you to your ultimate fitness goals with ease.We provide true care for each and evert member
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={container}
                    className="md:flex items-center justify-between gap-8  mt-5">
                    {benefits.map((benefit: BenefitType) => (
                        <BenefitComponent
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                <div className="mt-16 md:gap-28 md:flex items-center justify-between gap-20">
                    <img className="mx-auto "
                        alt="benefits-graphics-images"
                        src={BenefitsPageGraphics}
                    />
                    <div>
                        <div className="relative ">
                            <div className="before:absolute before:-top-20 before:-letf-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ delay: 0.1, duration: 0.7 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -100 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <Typography>
                                        MILLLIONS OF HAPPY MEMBERS GETTING  {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </Typography>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 }
                            }}>
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem esse nostrum quis sunt minus possimus cupiditate exercitationem vero odio similique eius quisquam, illo, consectetur asperiores nam rerum explicabo itaque.
                            </p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit ea perspiciatis iure magnam quae quos rerum quas id omnis?</p>
                        </motion.div>
                        <div className="relative top-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                variants={{
                                    hidden: { opacity: 0, x: -100 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits