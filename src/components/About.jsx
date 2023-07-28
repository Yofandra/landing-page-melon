/* eslint-disable react/no-unescaped-entities */
import melon2 from '../assets/melon2.png'

function About(){
    return(
        <div className='flex items-center py-16 px-24'>
            <img src={melon2} alt="melon2" className='w-2/5' />
            <div className='px-36'>
                <p className="text-6xl font-semibold text-neutral-700 tracking-tight">ABOUT <span className='text-custom-green'>US</span></p>
                <p className='text-lg font-medium py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis illo itaque temporibus officiis atque in tempore eveniet nisi quia ab, eum ipsum aperiam nesciunt, animi cum nobis eius quo.</p>
            </div>
        </div>
    )
}

export default About