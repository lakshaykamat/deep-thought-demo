import React from 'react'
import { DTLOGO } from '../assets/DTLOGO'
import { FaHome,FaGlasses ,FaTools,FaBell} from 'react-icons/fa'
type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='bg-[#F0F0F0] shadow-lg flex justify-around py-3'>
            <div>
                <DTLOGO width='190' height='30' />
            </div>
            <div className='flex gap-3 first-letter:'>
                <div className='bg-[#3683F0] p-2 rounded-[50%] '>
                    <FaHome className='w-5 text-white h-5' />
                </div>
                <div className='bg-[#3683F0] p-2 rounded-[50%] '>
                    <FaGlasses className='w-5 text-white h-5' />
                </div>
                <div className='bg-[#3683F0] p-2 rounded-[50%] '>
                    <FaTools className='w-5 text-white h-5' />
                </div>
                <div className='bg-[#3683F0] p-2 rounded-[50%] '>
                    <FaBell className='w-5 text-white h-5' />
                </div>
            </div>
        </nav>
    )
}
export default Navbar