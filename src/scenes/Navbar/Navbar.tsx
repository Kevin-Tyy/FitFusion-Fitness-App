import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import Logo from '../../assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '../../Types/Types';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '../../shared/ActionButton';
type Props = {
  isTopOfPage : boolean
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setMenuToggle] = useState(false)
  const flexBetween = "flex items-center justify-between "
  const isAboveMediumScreens = useMediaQuery('(min-width : 1060px)')
  const navBarBackground =  isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <img src={Logo} alt='Logo' />
          {isAboveMediumScreens ?

            <div className={`${flexBetween} w-full gap-16`}>
              <div className={`${flexBetween} gap-8 text-sm`}>

                <Link page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link page='Benefits'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
                <Link page='Our classes'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
                <Link page='Contact Us'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <ActionButton setSelectedPage={setSelectedPage} >Become a member</ActionButton>
              </div>

            </div>
            :
            (
              <button className='rounded-full bg-secondary-500 p-2' onClick={() => setMenuToggle(!isMenuToggled)}>
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )
          }

        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-primary-100'>
          <div className='flex justify-end p-12'>
            <button onClick={() => setMenuToggle(!isMenuToggled)}>
              <XMarkIcon className='w-10 h-10 text-gray-400 hover:bg-primary-300 hover:text-white p-2 rounded-full transition duration-200' />
            </button>

          </div>
          <div>
            <div className="ml-[33%] flex flex-col justify-center gap-10 text-2xl">

              <Link page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link page='Benefits'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page='Our classes'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              <Link page='Contact Us'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
