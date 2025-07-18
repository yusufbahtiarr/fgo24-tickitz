import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import logo from "../assets/images/logobluegreen.png";
import ebv from "../assets/images/ebv.id 2.png";
import cineone from "../assets/images/CineOne21 2.png";
import hiflic from "../assets/images/hiflic.png";

function Footer() {
  return (
    <>
      <div className="bg-secondary h-fit sm:h-100 w-full flex p-6 sm:p-20 text-sixth box-border">
        <div className="flex flex-col justify-between gap-10 sm:gap-20 w-full sm:flex-row">
          <div className="flex flex-col w-full gap-3">
            <div className="w-[50%] sm:w-full">
              <img src={logo} alt="" />
            </div>
            <div className="text-third text-[18px] font-light">
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 w-full">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="font-bold text-[20px] text-left">EXPLORE</div>
              <div className="flex flex-wrap flex-row sm:flex-col gap-4 justify-start items-start">
                <div className="font-light text-[16px]">Cinemas</div>
                <div className="font-light text-[16px]">Movies List</div>
                <div className="font-light text-[16px]">My Ticket</div>
                <div className="font-light text-[16px]">Notification</div>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 mb-0">
              <div className="font-bold text-[20px] text-left">OUR SPONSOR</div>
              <div className="flex flex-row items-center justify-between sm:flex-col gap-6 sm:justify-start sm:items-start">
                <div>
                  <img src={ebv} alt="ebv" />
                </div>
                <div>
                  <img src={cineone} alt="cineone" />
                </div>
                <div>
                  <img src={hiflic} alt="hiflic" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-6 justify-start items-start">
                <div className="font-bold text-[20px] text-left">FOLLOW US</div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <FaFacebookF className="size-[24px]" />
                  kukky.cinema.id
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <RiInstagramFill className="size-[24px]" />
                  kukky.cinema.id
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <FaSquareXTwitter className="size-[24px]" />
                  kukky.cinema.id
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                  <SiYoutube className="size-[24px]" />
                  kukky.cinema.id
                </div>
              </div>
            </div>
            <div>
              <span className="flex sm:hidden">
                © 2025 Kukky. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
