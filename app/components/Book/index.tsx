import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import './book.css'

// interface IBookData {
//     src?: string,
//     content?: string 
// }

interface IProps {
    type?: 'Image' | 'Content',
    component?: any,
    dataList: Array<any>,
    hoverMoveX?: string,
}

export default function Book(props: IProps) {
    return (
        <div>
            {/* <ul className='flip_book list-none w-80 h-100 duration-1500 transform-3d perspective-[900px] hover:translate-x-[150px] hover:nth-[1]:-rotate-y-180 hover:nth-[1]:duration-1400 hover:nth-[2]:-rotate-y-180 hover:nth-[2]:duration-2000 hover:nth-[3]:-rotate-y-180 hover:nth-[3]:duration-2600 hover:nth-[4]:-rotate-y-180 hover:nth-[4]:duration-3200 hover:nth-[5]:-rotate-y-180 hover:nth-[5]:duration-3800 hover:nth-[6]:-rotate-y-180 hover:nth-[6]:duration-4400'> */}
            {
                props.type === 'Content' && props.component ? <ul className={`flip_book list-none w-80 h-100 duration-1500 transform-3d perspective-[900px] hover:translate-x-[${props.hoverMoveX || 0}]`}>{props.component()}</ul> :
                    <ul className={`flip_book list-none w-80 h-100 duration-1500 transform-3d perspective-[900px] hover:translate-x-[${props.hoverMoveX || 0}]`}>
                        {
                            props.dataList.map((item, index) => {

                                return <li className='absolute w-full h-full origin-left' key={index}><Image className='w-full h-full shadow-black' alt={`第${index + 1}页`} src={item} /></li>

                            })
                        }
                    </ul>
            }

        </div>
    )
}
