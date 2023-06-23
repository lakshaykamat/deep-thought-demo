'use client'
import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
type Props = {
  description:string,
  content:string,
  title:string
}

const VideoType = ({description,content,title}:Props) => {
  const [isCollapsed, setCollapsed] = useState(false)
  return (
    <section className='w-full  shadow-md rounded-lg bg-[#FDFDFD] my-6 mx-auto '>
      <div className='bg-black rounded-t-lg text-white font-bold flex items-center justify-center py-2'>
        <h1 className=' text-center'>{title}</h1>
        <AiFillInfoCircle className='cursor-pointer mx-6' onClick={() => { setCollapsed((prev) => !prev) }} />
      </div>
      <div className='p-6'>
        <div className={`my-6 transition-all ${isCollapsed && 'hidden'}`}>
          <p> <b>Description</b> {description}</p>
        </div>
        <div>
          <iframe className='w-full h-64' src={`${content}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
export default VideoType