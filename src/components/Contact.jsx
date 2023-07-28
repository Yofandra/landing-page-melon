import telephone from '../assets/telephone.png'
import email from '../assets/email.png'
import share from '../assets/share.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Contact(){
    return(
        <div>
            <h1 className='text-center font-semibold text-5xl pt-8'>Contact</h1>
            <div className='flex justify-center py-20'>
                <div className='mr-96'>
                    <div className="flex">
                        <img src={email} alt="" className='w-8' />
                        <p className='pl-3 font-semibold text-2xl'>E-mail</p>
                    </div>
                    <p className='text-lg mt-3'>yofandra@gmail.com</p>
                </div>
                <div className='mr-96'>
                    <div className="flex">
                        <img src={telephone} alt="" className='w-8' />
                        <p className='pl-3 font-semibold text-2xl'>Telephone</p>
                    </div>
                    <p className='text-lg mt-3'>+62 82140950530</p>
                </div>
                <div>
                    <div className="flex">
                        <img src={share} alt="" className='w-8' />
                        <p className='pl-3 font-semibold text-2xl'>Social media</p>
                    </div>
                    <div className='flex mt-3'>
                        <img src={instagram} alt="" className='w-8 ml-12' />
                        <img src={linkedin} alt="" className='w-8 h-8 ml-4'/>
                    </div>                    
                </div>
            </div>
        </div>
        
    )
}

export default Contact