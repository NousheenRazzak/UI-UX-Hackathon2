import React from "react"

function TopHeader() {
    return(
        <div className="bg-black h-[38px] w-full">
            <p className="h-[19px] text-white font-normal text-sm pt-[9px] text-center">Sign up and get 20% off to your first order. <span className="font-medium">Sign Up Now</span></p>
        </div>
    )
}

export default TopHeader

export function Header() {
    return(
        <header className="flex w-[90%] h-[41px] gap-10 items-center justify-between m-auto my-5">
            <h1 className="w-[160px] text-[32px] font-bold">SHOP.CO</h1>
            
                <ul className="text-base font-normal flex gap-6 h-[22px] items-start">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            
            
                <input type="search" placeholder="Search for products.." className="p-2 rounded-full bg-[#f0f0f0] w-96"/>
            
            <div>icon</div>
        </header>
    )
}