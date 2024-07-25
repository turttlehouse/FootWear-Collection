import { useNavigate } from "react-router";

const Track = () => {
    return (
        <section>
            <div className="container mx-auto px-5 py-10 md:py-14">
                {/* main */}
                <div className="flex flex-wrap -m-4 text-center">
                    {/* Goldstar */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg">
                            <img className="h-10 mt-4 object-contain w-full" src="../img/shoes.png" alt="Goldstar" />
                            <h2 className="title-font font-medium text-lg text-gray-900">Goldstar</h2>
                            <p className="leading-relaxed">Discover the durability and comfort of Goldstar shoes, perfect for everyday wear and adventures.</p>
                        </div>
                    </div>

                    {/* Shikhar */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg">
                            <img className="h-10 mt-5 object-contain w-full" src="../img/sikhar.png" alt="Shikhar" />
                            <h2 className="title-font font-medium text-lg text-gray-900">Shikhar</h2>
                            <p className="leading-relaxed">Step into elegance with Shikhar formal shoes, designed for sophistication and style.</p>
                        </div>
                    </div>

                    {/* Bata */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg">
                            <img className="h-10 mt-5 object-contain w-full" src="../img/bata.png" alt="Bata" />
                            <h2 className="title-font font-medium text-lg text-gray-900">Bata</h2>
                            <p className="leading-relaxed">Experience timeless quality with Bata shoes, offering a range of styles for every occasion.</p>
                        </div>
                    </div>

                    {/* Nike */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg">
                            <img className="h-10 mt-4 object-contain w-full" src="../img/Nike.png" alt="Nike" />
                            <h2 className="title-font font-medium text-lg text-gray-900">Nike</h2>
                            <p className="leading-relaxed">Elevate your performance with Nike's innovative and stylish footwear collection.</p>
                        </div>
                    </div>

                    {/* Adidas */}
                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg">
                            <img className="h-10 mt-5 object-contain w-full" src="../img/Adidas.png" alt="Adidas" />
                            <h2 className="title-font font-medium text-lg text-gray-900">Adidas</h2>
                            <p className="leading-relaxed">Discover the blend of comfort and style with Adidas shoes, perfect for all your athletic needs.</p>
                        </div>
                    </div>

                     <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="shadow-2xl border-2 hover:shadow-gray-200 bg-white-100 px-4 py-6 rounded-lg">
                            <img className="h-10 mt-5 object-contain w-full" src="https://cdn-icons-png.flaticon.com/128/80/80807.png" alt="" />
                            <h2 className="title-font font-medium text-lg text-gray-900">Premium Shoes</h2>
                            <p className="leading-relaxed">Step into style with our premium footwear collection designed for unmatched comfort and performance.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Track;
