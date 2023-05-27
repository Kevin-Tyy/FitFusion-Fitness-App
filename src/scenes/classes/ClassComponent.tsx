
type Props = {
    name : string
    description : string
    image : string
}


const ClassComponent = ({name , description , image}: Props) => {
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[480px]'>
        <div className="p-5 absolute flex z-30 flex-col gap-5 h-[380px] w-[480px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-70 cursor-pointer">
            <p className='text-2xl'>{name}</p>
            <p>{description}</p>
        </div>
        <img src={image}/>
    </li>
  )
}

export default ClassComponent