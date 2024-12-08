import React from "react";

function Footer() {
    return(
        <>
        <footer className="bg-[#f0f0f0]">
        <div className="bg-black rounded-[20px] w-[90%] h-[180px] px-16 py-9 flex items-center justify-between m-auto">
                <h2 className="text-white w-[551px] h-[94px] font-bold text-[40px] leading-[45px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className="w-[349px] h-[108px] gap-2">
                    <input type="email" className="w-[349px] h-12 rounded-full font-normal text-base leading-[21px] text-gray-400" placeholder="Enter your email address"/>
                    <button className="bg-white w-[349px] h-12 rounded-full mt-2 font-medium text-base leading-[21px]">Subscribe to Newsletter</button>
            </div>
        </div>
            <div className="w-[90%] m-auto border-b-[1px] border-gray-300 flex justify-between my-8">
                <div className="w-[248px] h-44">
                <div className="w-[248px] h-[114px]">
                <h4 className="w-[167px] h-[23px] font-bold text[33px] leading-10">SHOP.CO</h4>
                <p className="w-[248px] h-[66px] font-normal text-sm leading-[22px]">We have clothes that suits your style and which you are proud to wear. From women to men.</p>
                </div>
                <div className="w-[148px] h-7">
                    <p>social icons</p>
                </div>
                </div>
                <div className="w-[104px] h-44 footer">
                    <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">COMPANY</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Carrer</li>
                    </ul>
                </div>
                <div className="w-[156px] h-44 footer">
                <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">HELP</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="w-[149px] h-44 footer">
                <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">FAQ</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div className="w-[169px] h-44 footer">
                <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">RESOURCES</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <div className="w-[90%] flex justify-between text-center m-auto">
                <p className="w-[269px] h-[19px] text-sm font-normal leading-[18px] text-gray-600">© 2000-2021, All rights reserved</p>
                <div>icons</div>
            </div>
        </footer>
        </>
    )
}

export default Footer