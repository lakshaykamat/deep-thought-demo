'use client'
import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
type Props = {
    arr: Array<string>
}
const Sidebar = ({ arr }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed rounded-lg bg-slate-300 shadow-lg h-[70%] mt-12 w-1/5 transition-all duration-300 ease-in-out ${isOpen ? 'left-0' : 'left-[-10rem]'}`}
        >
            <div className='flex bg-black text-white px-2 rounded-t-lg py-2 w-full justify-between'>
                <h1 className='text-lg font-bold'>Journey Board</h1>
                {
                    isOpen ? <BsFillArrowRightCircleFill className='w-6 h-6' onClick={toggleSidebar} /> : <BsFillArrowLeftCircleFill className='w-6 h-6' onClick={toggleSidebar} />
                }
            </div>
            {
                isOpen ? <ul className='ml-3 px-4 mt-5'>
                    {
                        arr.map((item) => {
                            return <li className="my-2 list-disc" key={item}>{item}</li>
                        })
                    }
                </ul>
                    :
                    <div className='flex justify-end'>
                        <img className='bg-green-400 w-12 h-12 rounded-lg p-3 m-3' src="https://media.giphy.com/media/QAUxbMqnNcMo9U0jt8/giphy.gif" />
                    </div>

            }


        </div>
    );
};

export default Sidebar;
