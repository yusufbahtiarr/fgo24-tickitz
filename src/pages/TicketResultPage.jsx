import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Button from "../components/Button";
import { HiOutlineDownload } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logobluegreensmall.png";
import qr from "../assets/images/qr.png";
import background from "../assets/images/background.png";
import { jwtDecode } from "jwt-decode";
import http from "../utils/axios";

function TicketResultPage() {
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auths.token);
  const [ticketResult, setTicketResult] = useState({});
  const users =
    authToken && typeof authToken === "string" ? jwtDecode(authToken) : null;
  // const { id } = useParams();
  // const dataTicket = useSelector((state) => state.tickets.data).find(
  // (item) => item.idTicket === id
  // );

  const fetchData = useCallback(async () => {
    const response = await http(authToken).get("user/transaction-history");
    setTicketResult(response.data.results[0]);
  }, [authToken, setTicketResult]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!users || users.userId == null) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Navbar />
      <div className="h-fit sm:h-[92vh] box-border max-w-[100%] mt-[86px] flex flex-col sm:flex-row">
        <div className="w-full sm:w-[60%] h-[92vh] sm:h-[100] bg-amber-200 p-6 sm:p-0 flex justify-center items-center relative">
          <div className="h-full sm:h-[100%]">
            <img
              src={background}
              alt="movie"
              className="h-full absolute top-0 left-0 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-full w-full bg-black opacity-60"></div>
          </div>
          <div className="mx-auto text-white z-1 mb-10 flex flex-col sm:justify-start justify-center items-center gap-3 p-6 sm:p-0">
            <div>
              <img src={logo} alt="logo" className="w-50 sm:w-80" />
            </div>
            <div className="w-full text-center sm:text-left">
              <span className="text-[32px] sm:text-[48px] font-bold ">
                Thankyou For Purchasing
              </span>
            </div>
            <div className="w-full text-center sm:text-left">
              <span className="text-[18px] sm:text-2xl font-light">
                Save or print your ticket before going to the cinema. Enjoy your
                movie!
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:justify-start items-center w-full gap-4 sm:gap-4">
              <span className="text-[18px] font-bold">
                Please Download Your Ticket
              </span>
              <span>
                <HiOutlineArrowNarrowRight className="size-6 hidden sm:flex" />
                <HiOutlineArrowNarrowDown className="size-6 flex sm:hidden" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[40%] h-full px-6 sm:px-26 py-10 bg-gray2">
          <div className="flex flex-col rounded-xl h-full items-center gap-4">
            <div className="h-[85%] w-full sm:px-6 py-2">
              <div className="bg-white h-full rounded-xl pb-8 sm:pb-0">
                <div className="mx-auto w-full flex justify-center items-center">
                  <img
                    src={qr}
                    alt="image"
                    className="p-6 w-100 sm:w-80 h-80"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="w-6 h-12 bg-gray2 rounded-r-full"></div>
                  <hr className="w-full border-2 border-gray2 border-dashed" />
                  <div className="w-6 h-12 bg-gray2 rounded-l-full"></div>
                </div>
                <div className="flex flex-col px-10 py-4 gap-8">
                  <div className="flex flex-row ">
                    <div className="flex w-[60%] flex-col gap-2">
                      <span className="text-xs text-gray1">Movie</span>
                      <span className="text-sm text-secondary">
                        {ticketResult?.title}
                      </span>
                    </div>
                    <div className="flex w-[40%] flex-col gap-2">
                      <span className="text-xs text-gray1">Category</span>
                      <span className="text-sm text-secondary">PG-13</span>
                    </div>
                  </div>
                  <div className="flex flex-row ">
                    <div className="flex w-[60%] flex-col gap-2">
                      <span className="text-xs text-gray1">Date</span>
                      <span className="text-sm text-secondary">
                        {ticketResult?.movie_date &&
                          new Date(ticketResult.movie_date).toLocaleDateString(
                            "id-ID",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                      </span>
                    </div>
                    <div className="flex w-[40%] flex-col gap-2">
                      <span className="text-xs text-gray1">Time</span>
                      <span className="text-sm text-secondary">
                        {ticketResult?.time &&
                          new Date(ticketResult.time).toLocaleTimeString(
                            "id-ID",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex w-[60%] flex-col gap-2">
                      <span className="text-xs text-gray1">Count</span>
                      <span className="text-sm text-secondary">
                        {ticketResult?.seats?.length} pcs
                      </span>
                    </div>
                    <div className="flex w-[40%] flex-col gap-2">
                      <span className="text-xs text-gray1">Seats</span>
                      <span className="text-sm text-secondary">
                        {ticketResult?.seats?.join(", ")}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row border p-4 border-gray1 rounded justify-between items-center">
                    <span className="text-secondary">Total</span>
                    <span className="text-secondary">
                      Rp. {ticketResult?.total_payment?.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="h-[15%] w-full flex flex-col gap-2">
              <Button
                variant="outline"
                className="flex justify-center items-center gap-2"
              >
                <HiOutlineDownload className="size-6" /> Download
              </Button>
              <Button
                variant="third"
                className=" text-white"
                onClick={() => navigate("/order-history")}
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TicketResultPage;
