'use client'
import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
type Props = {
    title:string,
    description:string
}

const Article = ({title,description}: Props) => {
    const [isCollapsed, setCollapsed] = useState(false)

    return (
        <section className='w-full  shadow-md rounded-lg bg-[#FDFDFD] my-6 mx-auto '>
            <div className='bg-black rounded-t-lg text-white font-bold flex items-center justify-center py-2'>
                <h1 className=' text-center'>{title}</h1>
                <AiFillInfoCircle className='cursor-pointer mx-6' onClick={() => { setCollapsed((prev) => !prev) }} />
            </div>
            <div className={`my-6 border-b-2 px-6 py-3 transition-all ${isCollapsed && 'hidden'}`}>
                <p> <b>Description</b> {description}</p>
            </div>
            <div className='p-6 overflow-y-scroll h-[18rem]'>
                <h1 className="text-xl mb-2 font-bold">Title</h1>
                <input type="text" name="" className="px-4 py-2 my-2 mb-6 shadow-lg w-full rounded-md outline-none" id="" />
                <h1 className="text-xl font-bold mb-2">Content</h1>
                <Quill />
                <div className='my-3 flex justify-around'>
                    <div>
                        <h1 className='text-lg font-semibold mb-1'>Category</h1>
                        <select name="" id="" className='bg-slate-300 p-1 px-2  rounded-lg'>
                            <option value="">--Select--</option>
                            <option value="">Miscellaneous</option>
                            <option value="">Learnability</option>
                            <option value="">Values Leadership</option>
                            <option value="">Technology</option>
                            <option value="">Acumen</option>
                            <option value="">Management</option>
                            <option value="">Bussiness</option>
                        </select>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold mb-1'>Sub Category</h1>
                        <select name="" id="" className='bg-slate-300 p-1 px-2  rounded-lg'>
                            <option value="">--Select--</option>
                            <option value="">Miscellaneous</option>
                            <option value="">Learnability</option>
                            <option value="">Values Leadership</option>
                            <option value="">Technology</option>
                            <option value="">Acumen</option>
                            <option value="">Management</option>
                            <option value="">Bussiness</option>
                        </select>
                    </div>
                </div>
                <div className='my-3 flex justify-around'>
                    <div className="w-1/2">
                        <h1 className='text-lg font-semibold mb-1'>Thumbnail</h1>
                        <input type='file' />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold mb-1'>Throught Process</h1>
                        <select name="" id="" className='bg-slate-300 p-1 px-2  rounded-lg'>
                            <option value="">--Select--</option>
                            <option value="">Miscellaneous</option>
                            <option value="">Learnability</option>
                            <option value="">Values Leadership</option>
                            <option value="">Technology</option>
                            <option value="">Acumen</option>
                            <option value="">Management</option>
                            <option value="">Bussiness</option>
                        </select>
                    </div>
                </div>
                <div className='mt-6 flex justify-end'>
                    <button className='bg-blue-400 px-5 py-1 m-2 mx-6 rounded-md'>Save Draft</button>
                    <button className='bg-blue-400 px-5 py-1 m-2 mx-6 rounded-md'>Publish</button>
                </div>
            </div>

        </section>

    )
}
export default Article
const Quill = () => {
    const [value, setValue] = useState('');
    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}