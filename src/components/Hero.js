import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font mt-20">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your One-Stop Shop for 
                            <br className="hidden lg:inline-block" />Quality Products
                        </h1>
                        <p className="mb-8 leading-relaxed">Welcome to our e-store. Discover a curated selection of high-quality products, from tech gadgets to stylish fashion. Enjoy hassle-free shopping with excellent customer support. Happy shopping!.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all duration-300 rounded text-lg">Explore Our Product's</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
