import melon2 from '../assets/melon2.png'

function Product(){
    return(
        <>
            <div>
            <p className="text-5xl font-semibold text-neutral-700 text-center py-16">OUR <span className='text-custom-green'>PRODUCT</span></p>
            </div>
            <div className='flex justify-center'>
                <div className="max-w-sm mr-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-300 dark:border-neutral-400">
                    <a href="#">
                        <img className="rounded-t-lg" src={melon2} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-neutral-700 dark:text-neutral-700 text-center">Intanon</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div className="max-w-sm mr-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-300 dark:border-neutral-400">
                    <a href="#">
                        <img className="rounded-t-lg" src={melon2} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-neutral-700 dark:text-neutral-700 text-center">Super Sweet</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-300 dark:border-neutral-400">
                    <a href="#">
                        <img className="rounded-t-lg" src={melon2} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-neutral-700 dark:text-neutral-700 text-center">Intanon</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product