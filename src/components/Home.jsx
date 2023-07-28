/* eslint-disable react/no-unescaped-entities */
import melon from '../assets/melon.png'

function Home(){
    return(
        <div className='flex items-center justify-center py-28 px-16'>
            <div className='px-10'>
                <p className="text-7xl font-semibold text-neutral-700 tracking-wide">MELON <span className='text-custom-green'>HIDROPONIK</span></p>
                <p className="text-5xl font-semibold text-neutral-500 py-3 tracking-tight">Darmo's farm</p>
            </div>
            <img src={melon} alt="melon" className='w-2/5' />
        </div>
    )
}

export default Home