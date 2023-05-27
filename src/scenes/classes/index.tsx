import { SelectedPage, ClassType } from '../../Types/Types'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import { motion } from 'framer-motion'
import Typography from '../../shared/Typography'
import ClassComponent from './ClassComponent'
const classes : Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!",
        image : image1
    },
    {
        name: "Yoga Classes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!",
        image : image2
    },
    {
        name: "Ab Core Classes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!",
        image : image3
    },
    {
        name: "Fitness Classes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!",
        image : image4
    },
    {
        name: "Adventure Classes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!",
        image : image5
    },
    {
        name: "Training Classes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!",
        image : image6
    },

]
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id='ourclasses' className='w-full bg-primary-100 py-40'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className='mx-auto w-5/6 '
                >
                    <div className='md:w-3/5'>
                        <Typography>
                            OUR CLASSES
                        </Typography>
                        <p className='py-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas soluta assumenda quaerat facilis earum at fugiat aspernatur ratione aut, reprehenderit deserunt nulla, quo velit dolores ducimus dolorum sed dolorem dolore!
                        </p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item : ClassType, index)=>(
                            <ClassComponent
                                key={index}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses