import React from "react";  

export default function Upper() {     
    return (         
        <div>                 
            {/* Top Navbar */}
            <div className="flex items-center justify-between max-w-[1700px] px-6 py-1 bg-green-950">                 
                <h2 className="text-3xl italic font-bold leading-tight text-left text-white">                     
                    Indore Blooms                 
                </h2>                  
                {/* Navbar Links */}
                <div className="hidden gap-12 text-white md:flex">                     
                    <a href="#home" className="hover:text-yellow-400">Home</a>                     
                    <a href="#shop" className="hover:text-yellow-400">Shop</a>                     
                    <a href="#about" className="hover:text-yellow-400">About</a>                     
                    <a href="#contact" className="hover:text-yellow-400">Contact</a>                 
                </div>             
            </div>              

            <section className="flex flex-col-reverse items-center px-6 py-6 text-white bg-green-900 md:px-20 md:flex-row-reverse h-auto md:h-[700px]">                 
                {/* Left Side Text */}
                <div className="max-w-3xl text-center md:text-left md:flex-1">                     
                    <h1 className="mt-10 text-4xl font-bold leading-tight md:text-5xl">                         
                        <span className="text-yellow-400">Plants</span> make{" "}                         
                        <span className="text-yellow-400">Life</span> better                     
                    </h1>                     
                    <p className="mt-6 text-lg text-gray-300 md:text-xl">                         
                        Welcome to our online plant shop! We offer a variety of plants with easy-to-follow care tips and delivery right to your door. Whether you're adding to your collection or starting fresh, we’ve got you covered.                     
                    </p>                     
                    <div className="flex justify-center gap-4 mt-6 md:justify-start">                         
                        <button className="px-6 py-3 text-lg font-semibold text-green-900 transition-colors bg-yellow-400 rounded-md hover:bg-yellow-500">                             
                            Shop Now                         
                        </button>                         
                        <button className="px-6 py-3 text-lg font-semibold text-yellow-400 transition-colors bg-transparent border-2 border-yellow-400 rounded-md hover:bg-yellow-500 hover:text-green-900">                             
                            Learn More                         
                        </button>                     
                    </div>                 
                </div>                  

                {/* Right Side Image */}
                <div className="relative flex justify-center flex-1 hidden mb-4 md:mb-0 md:flex">                 
                    <img                     
                        src="images/k.png"                     
                        alt="Plants"                     
                        className="object-contain w-40 sm:w-56 md:w-[500px] lg:w-[600px] h-auto max-h-[700px]"                 
                    />                 
                </div>             
            </section>         
        </div>     
    ); 
}
