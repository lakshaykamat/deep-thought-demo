'use client'
import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
type Props = {}

const VideoType = (props: Props) => {
  const [isCollapsed, setCollapsed] = useState(false)
  console.log(isCollapsed)
  return (
    <section className='lg:w-1/2 w-full  shadow-md rounded-lg bg-[#FDFDFD] my-6 mx-auto '>
      <div className='bg-black rounded-t-lg text-white font-bold flex items-center justify-center py-2'>
        <h1 className=' text-center'>Technical Project Mangement</h1>
        <AiFillInfoCircle className='cursor-pointer mx-6' onClick={() => { setCollapsed((prev) => !prev) }} />
      </div>
      <div className='p-6'>
        <div className={`my-6 transition-all ${isCollapsed && 'hidden'}`}>
          <p> <b>Description</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, dolorum!</p>
        </div>
        <div>
          <iframe className='w-full h-64' src="https://www.youtube.com/embed/TiMRwri1xJ8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
export default VideoType