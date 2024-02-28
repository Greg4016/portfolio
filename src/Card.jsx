import { useState } from 'react'

function Card({title, sub, href, img}) {

    const [hovering, setHovering] = useState(false)



    return (
        <div className="w-[16rem] h-[24rem] relative bg-slate-300 m-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            <a href={href} target="blank">
                <img src={img} className="h-full object-cover"></img>
                <div className={`${hovering ? 'h-full' : 'h-[10%]'} transition-all w-full bg-opacity-80 gap-4 text-white bg-black absolute bottom-0 flex flex-col justify-center items-center`}>
                    <span className='text-lg'>{title}</span>
                    {hovering && (
                        <span className='text-sm'>{sub}</span>
                    )}
                </div>
            </a>
        </div>
    )

}

export default Card