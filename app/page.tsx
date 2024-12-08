import Image from "next/image";
import TopHeader, { Header } from "./components/Header";
import Heroimage from "@/public/hero-image.png";
import Versace from "@/public/versace.png";
import Zara from "@/public/zara.png";
import Gucci from "@/public/gucci.png";
import Prada from "@/public/prada.png";
import Calvin from "@/public/calvinklein.png";
import NewA1 from "@/public/new-arrival-1.png";
import NewA2 from "@/public/new-arrival-2.png";
import NewA3 from "@/public/new-arrival-3.png";
import NewA4 from "@/public/new-arrival-4.png";
import TopS1 from "@/public/top-selling-1.png";
import TopS2 from "@/public/top-selling-2.png";
import TopS3 from "@/public/top-selling-3.png";
import TopS4 from "@/public/top-selling-4.png";
// import Casual from "@/public/casual.png";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <section className="bg-[#f2f0f1] h-[529px] flex justify-between">
      <div className="w-[596px] h-[500px] flex flex-col justify-center gap-8 ms-[100px] ">
        <h1 className="w-[577px] h-[173px] text-[64px] font-bold leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="w-[545px] h-[33px] text-base font-normal leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="w-[210px] h-[52px] bg-black rounded-full px-[54px] py-4 text-white text-center text-sm">Shop Now</button>
      </div>
      <div className="me-[100px]">
        <Image src={Heroimage} width={500} height={500} alt="hero-section-image"/>
      </div>
    </section>

    <section className="flex items-center justify-center h-[122px] bg-black gap-14">
      <Image src={Versace} width={200} height={200} alt="versace" />
      <Image src={Zara} width={150} height={150} alt="zara" />
      <Image src={Gucci} width={200} height={200} alt="gucci" />
      <Image src={Prada} width={200} height={200} alt="prada" />
      <Image src={Calvin} width={200} height={200} alt="clavinklein" />
    </section>

    <section className="w-[90%] m-auto my-24 border-b-2 border-gray-300">
    <div className="mt-[90px]">
      <h2 className="w-[403px] h-[58px] font-bold text-5xl leading-[57px] m-auto">NEW ARRIVALS</h2>
    </div>
    <div className="flex gap-5">
      <div>
        <Image src={NewA1} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={NewA2} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={NewA3} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={NewA4} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
    </div>
    <div className="flex justify-center">
    <button className="w-[218px] h-[52px] text-center text-base font-medium border-[1px] border-black rounded-full my-20">View All</button>
    </div>
    </section>

    <section className="w-[90%] m-auto my-24">
    <div className="mt-[90px]">
      <h2 className="w-[403px] h-[58px] font-bold text-5xl leading-[57px] m-auto text-center">TOP SELLING</h2>
    </div>
    <div className="flex gap-5 mt-10">
      <div>
        <Image src={TopS1} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={TopS2} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={TopS3} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={TopS4} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <p>4.5/5</p>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
    </div>
    <div className="flex justify-center">
    <button className="w-[218px] h-[52px] m-auto text-center text-base font-medium border-[1px] border-black rounded-full my-20">View All</button>
    </div>
    </section>

    <section className="w-[90%] h-[866px] bg-[#f0f0f0] m-auto rounded-[40px] my-24">
    <div className="mt-[90px]">
      <h2 className="w-[687px] h-[58px] font-bold text-5xl leading-[57px] m-auto pt-10 text-center">BROWSE BY DRESS STYLE</h2>
    </div>
    <div className="bg-slate-400 m-auto w-[92%] flex flex-wrap gap-6 mt-[70px]">
      <div className="w-[407px] h-[289px] rounded-[20px] bg-[white]">
        <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Casual</p>
      </div>
      <div className="w-[684px] h-[289px] bg-[white] rounded-[20px]">
        <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Formal</p>
      </div>
      <div className="w-[684px] h-[289px] bg-[white] rounded-[20px]">
        <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Party</p>
      </div>
      <div className="w-[407px] h-[289px] rounded-[20px] bg-[white]">
        <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Gym</p>
      </div>
    </div>
    </section>

    <section className="my-24">
      <div className="w-[90%] flex justify-between m-auto">
        <h2 className="w-[654px] h-[58px] font-bold text-5xl leading-[57px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-3">
          <div>left</div>
          <div>right</div>
        </div>
      </div>
      <div className="w-[90%] flex justify-between m-auto">
        <div className="w-[400px] h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
          <p>stars</p>
          <h4 className="font-bold text-xl leading-[22px]">Sarah M. <span>tick</span></h4>
          <p className="text-gray-600 font-normal text-base leading-[22px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
        </div>
        <div className="w-[400px] h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
        <p>stars</p>
          <h4 className="font-bold text-xl leading-[22px]">Alex K. <span>tick</span></h4>
          <p className="text-gray-600 font-normal text-base leading-[22px]">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
        </div>
        <div className="w-[400px] h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
        <p>stars</p>
          <h4 className="font-bold text-xl leading-[22px]">James L. <span>tick</span></h4>
          <p className="text-gray-600 font-normal text-base leading-[22px]">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
        </div>
      </div>
    </section>
    </>
  );
}
