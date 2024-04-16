import Slider from "react-slick";
import { useState, useEffect } from "react";
import Banners from "../api/banners.json";

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="">
      <div className="md:container flex justify-between relative mx-auto   bg-primary-brand-color rounded-md bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')]">
        <div>
          <h2 className=" ml-16 mt-14 text-3xl font-semibold text-white">
            Getir'i indir!
          </h2>
          <p className=" ml-16 mt-5 font-semibold text-white">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
          </p>

          <ol className=" mt-5 ml-14 ">
            <li className="flex ">
              <img
                className="px-1 "
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              />
              <img
                className="px-1"
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              />
              <img
                className="px-1"
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              />
            </li>
          </ol>
        </div>

        <img
          className="flex float-right"
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
        />
      </div>
    </div>
  );
}

export default Campaigns;
