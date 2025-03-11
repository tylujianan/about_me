import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

// export default function Page() {
//     return (
//         <div className=''>
//             <p>​	昨天晚上看了几集斩神，睡觉应该两三点了，下午一点 多起的床，清了一下nikke任务，定了一下作息。

//                 本来不想吃东西的，准备晚上看完哪吒去吃碗拉面。还是肚子饿了，炸了点肉排骨和烤肠就当今天的饭了。

//                 稍微休息了了下出发看电影了。到了电影院，很少遇到这么多人同时看电影的，也是因为今天是假期的最后一天了吧，稍微写下观后感吧，整体还是不错的，不过没想象中的那么精彩，有一些比较尬的片段，特效虽是顶级，但给我的感觉没当时看第一部时的震撼，想了一下，感觉原因可能是第一部当时出得比较早，那时还没有很多优秀的动漫，魔童降世算是天花板级的存在，没有可以比较的同类作品，但这些年国漫崛起速度很快，三年之约、斗罗斗破、仙逆剑来、沧元图等等优秀动漫不断涌现，感觉自己的眼界也开阔了，看动漫的眼光也越来越刁了。

//                 看完到家吃了个瓜就十一点了，日记就随便写点吧，明天还得早起，看完直播早点休息了。</p>
//         </div>
//     )
// }

export default function Page() {
    return (
        <ul className='list-none w-60 h-80 transform-3d perspective-900'>
            <li className='absolute origin-left transform rotate-y-335 duration-2000' key='1'><Image className='w-60 h-80 shadow-black' alt={`第1页`} src={assets.cover}/></li>
            <li className='absolute origin-left' key='2'><Image className='w-60 h-80 shadow-black' alt={`第2页`} src={assets.cover}/></li>
            <li className='absolute origin-left' key='3'><Image className='w-60 h-80 shadow-black' alt={`第3页`} src={assets.cover}/></li>
            <li className='absolute origin-left' key='4'><Image className='w-60 h-80 shadow-black' alt={`第4页`} src={assets.cover}/></li>
            <li className='absolute origin-left' key='5'><Image className='w-60 h-80 shadow-black' alt={`第5页`} src={assets.cover}/></li>
            <li className='absolute origin-left' key='6'><Image className='w-60 h-80 shadow-black' alt={`第6页`} src={assets.cover}/></li>
        </ul>
    )
}