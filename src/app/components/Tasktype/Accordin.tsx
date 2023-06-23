'use client'
import { useState } from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { AiFillInfoCircle } from 'react-icons/ai'
import 'react-accessible-accordion/dist/fancy-example.css';
type Props = {
    title: string,
    description: string
}

const Accordin = ({ title, description }: Props) => {
    const [isCollapsed, setCollapsed] = useState(false)
    const items = [
        {
            uuid: 1,
            heading: "Heading1",
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non commodi repellendus minima, ea corporis consequuntur dolorum corrupti aperiam cupiditate, velit voluptate vitae consectetur officiis quia neque architecto vero tenetur."
        },
        {
            uuid: 2,
            heading: "Heading2",
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non commodi repellendus minima, ea corporis consequuntur dolorum corrupti aperiam cupiditate, velit voluptate vitae consectetur officiis quia neque architecto vero tenetur."
        },
        {
            uuid: 3,
            heading: "Heading 3",
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non commodi repellendus minima, ea corporis consequuntur dolorum corrupti aperiam cupiditate, velit voluptate vitae consectetur officiis quia neque architecto vero tenetur."
        },
        {
            uuid: 4,
            heading: "Heading 4",
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non commodi repellendus minima, ea corporis consequuntur dolorum corrupti aperiam cupiditate, velit voluptate vitae consectetur officiis quia neque architecto vero tenetur."
        },
    ]
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
                <Accordion allowMultipleExpanded>
                    {items.map((item) => (
                        <AccordionItem key={item.uuid}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.heading}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.content}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

        </section>

    )
}
export default Accordin