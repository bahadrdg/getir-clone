import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <div>
      <div className="md:container flex justify-between relative mx-auto">
        <div className="flex flex-col p-10">
          <h2 className="text-primary-brand-color text-lg">Getir'i indir!</h2>
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
        </div>
        <div className="flex flex-col p-10">
          <h2 className="text-primary-brand-color text-lg">Getir'i Keşfet</h2>
          <a href="#">Hakkımızda</a>
          <a href="#">Kariyer</a>
          <a href="#">Teknolojik Kariyerleri</a>
          <a href="#">İletişim</a>
          <a href="#">Sosyal Sorumluluk Projeleri</a>
          <a href="#">Basın Bültenleri</a>
        </div>
        <div className="flex flex-col p-10">
          <h2 className="text-primary-brand-color text-lg">
            Yardıma mı ihtiyacın var?
          </h2>
          <a href="#">Sıkça Sorulan Sorular</a>
          <a href="#">Kişisel Verilerin Korunması</a>
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Kullanım Koşulları</a>
          <a href="#">Çerez Politikası</a>
          <a href="#">İşlem Rehberi</a>
        </div>
        <div className="flex flex-col p-10">
          <h2 className="text-primary-brand-color text-lg">İş Ortağımız Ol</h2>
          <a href="#">Bayimiz Olun</a>
          <a href="#">Deponu Kirala</a>
          <a href="#">GetirYemek Restoranı Ol</a>
          <a href="#">Getir Çarşı İşletmesi Ol</a>
          <a href="#">Zincir Restoranlar</a>
        </div>
        <div className="flex flex-col p-10 shadow-lg">
          <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" />
        </div>
      </div>
      <hr />
      <div className="flex justify-between container mx-auto">
        <div className="flex p-3 items-center">
          <p className=" text-xs">© 2024 Getir</p>
          <p className=" text-xs">
            <GoDotFill />
          </p>
          <a className=" text-xs" href="#">Bilgi Toplumu Hizmetleri</a>
        </div>
        <div className="flex p-3">
          <a className="p-3 text-gray-500 hover:text-secondary-brand-color hover:bg-purple-300 rounded-md" href="#">
            <BsFacebook size = {20} />
          </a>
          <a className="p-3 text-gray-500 hover:text-secondary-brand-color hover:bg-purple-300 rounded-md" href="#">
            <BsTwitter size = {20}/>
          </a>
          <a className="p-3 text-gray-500 hover:text-secondary-brand-color hover:bg-purple-300 rounded-md" href="#">
            <BsInstagram size = {20}/>
          </a>
          <a className="flex p-3 text-gray-500  hover:text-secondary-brand-color hover:bg-purple-300 rounded-md border">
            <BsGlobe2 size = {20}/>
            <p>Türkçe(TR)</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
