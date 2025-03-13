import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import './book.css'

export default function Page() {
    return (
        // <ul className='my-diary list-none w-60 h-80 duration-1500 transform-3d perspective-[900px] hover:translate-x-[150px] hover:nth-[1]:-rotate-y-180 hover:nth-[1]:duration-1400 hover:nth-[2]:-rotate-y-180 hover:nth-[2]:duration-2000 hover:nth-[3]:-rotate-y-180 hover:nth-[3]:duration-2600 hover:nth-[4]:-rotate-y-180 hover:nth-[4]:duration-3200 hover:nth-[5]:-rotate-y-180 hover:nth-[5]:duration-3800 hover:nth-[6]:-rotate-y-180 hover:nth-[6]:duration-4400'>
        <ul className='my-diary list-none w-60 h-80 duration-1500 transform-3d perspective-[900px]'>
            <li className='absolute origin-left -rotate-y-25 duration-2000' key='1'><Image className='w-60 h-80 shadow-black' alt={`第1页`} src={assets.book1} /></li>
            <li className='absolute origin-left -rotate-y-23 duration-1700' key='2'><Image className='w-60 h-80 shadow-black' alt={`第2页`} src={assets.book2} /></li>
            <li className='absolute origin-left -rotate-y-21 duration-1400' key='3'><Image className='w-60 h-80 shadow-black' alt={`第3页`} src={assets.book3} /></li>
            <li className='absolute origin-left -rotate-y-19 duration-1100' key='4'><Image className='w-60 h-80 shadow-black' alt={`第4页`} src={assets.book4} /></li>
            <li className='absolute origin-left -rotate-y-17 duration-800' key='5'><Image className='w-60 h-80 shadow-black' alt={`第5页`} src={assets.book5} /></li>
            <li className='absolute origin-left -rotate-y-15 duration-500' key='6'><Image className='w-60 h-80 shadow-black' alt={`第6页`} src={assets.book6} /></li>
            <li className='absolute origin-left -rotate-y-13' key='7'><Image className='w-60 h-80 shadow-black' alt={`第7页`} src={assets.book7} /></li>
        </ul>

    )
}