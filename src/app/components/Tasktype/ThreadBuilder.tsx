'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiFillDelete, AiFillInfoCircle, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { BsFillLightbulbFill, BsFillQuestionCircleFill } from 'react-icons/bs'
import { BiSolidCommentDetail, } from 'react-icons/bi'
import { GiLotus } from 'react-icons/gi'

type Props = {
  description:string,
  title:string
}
type T = {
  id:number,
  name:string
}
const ThreadBuilder = ({description,title}: Props) => {
  const [isTaskCollapsed, setTaskCollapsed] = useState(false)
  const [threads, setThreads] = useState([{ id: 0, name: 'Thread A' }])


  //Creates a new Thread
  const createNewThread = () => {
    const newThread = { id: threads.length, name: `Thread ${String.fromCharCode(65 + threads.length)}` };;
    setThreads((prevComponents) => [...prevComponents, newThread]);
  };


  return (
    <section className='w-full shadow-md rounded-lg bg-[#FDFDFD] my-6 mx-auto '>
      <div className='bg-black rounded-t-lg text-white font-bold flex items-center justify-center py-2'>
        <h1 className=' text-center'>{title}</h1>
        <AiFillInfoCircle className='cursor-pointer mx-6' onClick={() => { setTaskCollapsed((prev) => !prev) }} />
      </div>
      <div className={`mt-6 border-b-2 px-6 py-3 transition-all && 'hidden'}`}>
          <p className='px-6'> <b>Description</b> {description}</p>
        </div>
      <div>
        
        <div className='overflow-y-scroll h-[18rem]'>
          {threads.map((item) => (
            <Thread key={item.id} count={item.name} id={item.id} setThreads={setThreads}/>
          ))}

          <button className='bg-blue-400 px-2 py-1 m-2 rounded-md' onClick={createNewThread}>New Thread</button>
        </div>
      </div>
    </section>
  )
}
const Thread = ({ count, id, setThreads}: { count: string, id: number, setThreads: React.Dispatch<React.SetStateAction<Array<T>>> }) => {
  const [isThreadCollapsed, setThreadCollapsed] = useState(false)
  const [subThreads, setSubThreads] = useState([<SubThread key={0} isThreadCollapsed={isThreadCollapsed} count={1} />])

  //Creates a new Sub Thread
  const createNewSubThread = () => {
    const newSubThread = <SubThread isThreadCollapsed={isThreadCollapsed} count={subThreads.length + 1} />;
    setSubThreads((prevComponents) => [...prevComponents, newSubThread])
  };
  const deleteComponent = (id: number) => {
    setThreads((prev: any[]) => prev.filter((item) => item.id !== id));
  };
  return (
    <section className='bg-slate-100'>
      <div className='bg-[#FEFFC0] flex items-center justify-between py-1 border-b-2 border-black'>
        <div className='flex'>

        
        {
          isThreadCollapsed ?
            <AiOutlineCaretDown className='mx-3 w-6 h-6 cursor-pointer' onClick={() => { setThreadCollapsed((prev) => !prev) }} />
            : <AiOutlineCaretUp className='mx-3 w-6 h-6 cursor-pointer' onClick={() => { setThreadCollapsed((prev) => !prev) }} />
        }
        <h1 className='font-bold'>{count}</h1>
        </div>
        {id > 0 && <AiFillDelete className='mx-3 w-6 h-6 cursor-pointer' onClick={() => deleteComponent(id)} />}
      </div>
      <div className={`${isThreadCollapsed && 'hidden'}`}>
        {subThreads}

        <div className='w-full flex justify-end'>
          <button onClick={createNewSubThread} className='bg-blue-400 px-2 py-1 m-2 mx-6 rounded-md'>Sub Thread</button>
        </div>
        <div className='px-6 pb-6 rounded-xl'>
          <p className='bg-[#f0f0f0] font-semibold p-1 rounded-t-xl px-3'>Summary of {count}</p>
          <textarea placeholder='Enter text here' rows={3} className='bg-[#ffffff]  rounded-lg w-full outline-none p-2' />
          <div className='flex items-center justify-between'>
            <p>Thread Credit</p>
            <select className='bg-slate-300 w-[50%] p-1 px-2  rounded-lg'>
              <option value="">Select Category</option>
              <option value="">Remark</option>
              <option value="">Sub argument</option>
              <option value="">Sub explanation</option>
              <option value="">Core principle</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
const SubThread = ({ isThreadCollapsed, count }: { isThreadCollapsed: boolean, count: number }) => {
  return (
    <div className={`px-6 flex text-sm justify-around gap-2 my-3 ${isThreadCollapsed && 'hidden'}`}>
      <div className='flex-1'>
        <div className='rounded-xl'>
          <p className='bg-[#f0f0f0] font-semibold p-1 px-3 rounded-t-xl'>Sub Thread {count}</p>
          <textarea placeholder='Enter text here' rows={3} className='bg-[#ffffff] w-full outline-none p-2' />
        </div>
        <div className='flex gap-2 p-2 justify-end'>
          <BsFillLightbulbFill className='w-6 h-6 text-gray-700 cursor-pointer' title='Edureka Moment' />
          <BsFillQuestionCircleFill className='w-6 h-6 text-gray-700 cursor-pointer' />
          <BiSolidCommentDetail className='w-6 h-6 text-gray-700 cursor-pointer' />
          <GiLotus className='w-6 h-6 text-gray-700 cursor-pointer' />
        </div>
      </div>
      <div className='flex-1'>
        <div className='rounded-xl'>
          <p className='bg-[#f0f0f0] font-semibold p-1 px-3 rounded-t-xl'>Sub Interpretation {count}</p>
          <textarea placeholder='Enter text here' rows={3} className='bg-[#ffffff] w-full outline-none p-2' />
        </div>
        <div className='flex my-3 gap-1'>
          <select name="" id="" className='bg-slate-300 w-[50%] p-1 px-2  rounded-lg'>
            <option value="">Select Category</option>
            <option value="">Remark</option>
            <option value="">Sub argument</option>
            <option value="">Sub explanation</option>
            <option value="">Core principle</option>
          </select>
          <select name="" id="" className='bg-slate-300 w-[50%] p-1 px-2 rounded-lg'>
            <option value="">Select Process</option>
            <option value="">Question</option>
            <option value="">Analogy</option>
            <option value="">Sarcasm</option>
            <option value="">Insight</option>
            <option value="">Counter Example</option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default ThreadBuilder