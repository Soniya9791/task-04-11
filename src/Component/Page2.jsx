import React from "react";
import logo from "../assets/image/Ublis Yoga - Logo 1.png";

const Page2 = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        width: "794px", // A4 width in pixels at 96 DPI
        height: "1123px", // A4 height in pixels at 96 DPI
        padding: "20px",
        backgroundColor: "whitestone",
      }}
    >
      <div className="flex flex-row gap- w-[100%] mt-5">
        <p className=" text-5xl text-orange-600 w-[60%] ">TAX INVOICE</p>
        <table className="pt-3 w-[40%]">
          <tr>
            <td className="text-sm">#</td>{" "}
            <td className="text-base font-bold">: 1408</td>
          </tr>
          <tr>
            <td className="text-sm">Invoice</td>{" "}
            <td className="text-base font-bold">: 29/10/2024</td>
          </tr>
          <tr>
            <td className="text-sm">Payment Terms</td>{" "}
            <td className="text-base font-bold">: Due On Receipt</td>
          </tr>
        </table>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col w-[30%]   justify-evenly p-10 h-[100%] ">
          <img className="w-[100%]" src={logo} alt=" img" />

          <h3 className=" text-xl w-full font-bold text-slate-700">
            Ublis Yoga India Private Limited
          </h3>
          <p className="text-sm flex w-[100%]">
            No :28, Second Floor, Madambakkam Main Road, Opp. to Jains
            Sudharshana Gandhi nagar, Rajakilpakkam Chennai Tamil Nadu 600073{" "}
            <br />
            India <br />
            GSTIN 33AACCU8675J1ZV <br />
            ublisyogafunds@gmail.com
          </p>
        </div>

        <div className="w-[70%]  ">
            <div className="flex justify-end ">
          <div className="flex flex-col  w-[50%] pt-5   ">
            <p className="text-lg font-bold p-2 ">Bill To</p>
            <p className="text-lg font-bold text-orange-600 p-2">V.Akshara</p>
            <p className="text-sm p-2  ">
              2B, Gokulam, Apartment, 4th cross street, Shrudhi Sai Nagar,
              Thiruvancherry <br />
              Chennai 600126 Tamil Nadu <br />
              India
            </p>
          </div>
          </div>

          <div className="  ">
          <table className="border-solid border-2 border-gray-600 h-[150px]">
              <tr className="border-solid border-2 border-gray-600 bg-slate-300">
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  rowSpan={2}
                >
                  #
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  rowSpan={2}
                >
                  Item & Description{" "}
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  rowSpan={2}
                >
                  HSN/SAC
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  rowSpan={2}
                >
                  Qty
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  rowSpan={2}
                >
                  {" "}
                  Rate
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  colSpan={2}
                >
                  {" "}
                  CGST{" "}
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  colSpan={2}
                >
                  {" "}
                  SGST{" "}
                </th>
                <th
                  className="border-solid border-2 border-gray-600 text-lg font-bold"
                  rowSpan={2}
                >
                  Amount
                </th>
              </tr>
              <tr className="border-solid border-2 bg-slate-300 border-gray-600">
                <th className="border-solid border-2 border-gray-600 text-lg font-bold">
                  %
                </th>
                <th className="border-solid border-2 border-gray-600 text-lg font-bold">
                  Amt
                </th>
                <th className="border-solid border-2 border-gray-600 text-lg font-bold">
                  %
                </th>
                <th className="border-solid border-2 border-gray-600 text-lg font-bold">
                  Amt
                </th>
              </tr>
              <tr className="border-solid border-2 border-gray-600">
                <td className="text-xl border-solid border-2 border-gray-600">
                  1
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  Customised Sessions 8 classes fees
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  9997 23
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  {" "}
                  8.00 Days
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  100.00
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  9%
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  72.00
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  9%
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  72.00
                </td>
                <td className="text-xl border-solid border-2 border-gray-600">
                  800.00
                </td>
              </tr>
            </table>
            <div className="flex justify-end ">
                <table className="flex flex-col justify-end   w-[70%]  border-solid border-2  border-gray-600">
                  <tr className=" w-[100%] flex text-end ">
                    <td className="w-[50%] text-xl">Sub Total</td>{" "}
                    <td className="w-[50%] text-xl">800.00</td>
                  </tr>
                  <tr className=" w-[100%] flex text-end ">
                    <td className="w-[50%] text-xl">
                      Total Taxable <br />
                      Amount
                    </td>{" "}
                    <td className="w-[50%] text-xl">800.00</td>
                  </tr>
                  <tr className=" w-[100%] flex text-end ">
                    <td className="w-[50%] text-xl">CGST9 (9%)</td>{" "}
                    <td className="w-[50%] text-xl">72.00</td>
                  </tr>
                  <tr className=" w-[100%] flex text-end ">
                    <td className="w-[50%] text-xl">SGST9 (9%)</td>{" "}
                    <td className="w-[50%] text-xl">72.00</td>
                  </tr>
                  <tr className="w-[100%] flex text-end  text-lg font-bold">
                    <td className="w-[50%] text-lg"> Total</td>{" "}
                    <td className="w-[50%] text-lg">Rs.944.00</td>
                  </tr>
                </table>
            </div>
            <div className="flex flex-col justify-center p-10  text-start w-[100%] mb-10 ">
            <div>
              <p className="text-lg font-bold">Total In Words</p>
              <p className="text-lg font-bold text-orange-600">
                Indian Rupee Nine Hundred Forty-Four Only
              </p>
            </div>
            <br />
            <div>
              <p className="text-lg font-bold">Notes</p>
              <p className="text-sm">
                8 classes fees. Thank you for the payment. You just made our
                day.
              </p>
            </div>
            <br />
            <div className="">
              <p className="text-lg font-bold">Terms & Conditions</p>
              <p className="text-sm leading-tight">
                User has to complete sessions within the subscribed month; no
                carryover to next month. <br />
                All subscriptions are non-refundable and non-transferable. No
                refunds for discontinuation. <br />
                This is a computer-generated invoice; no signature required.
              </p>
            </div>
          </div>

          <div className="flex w-[100%] p-5 justify-end">
            <p className="text-lg font-bold text-slate-700">
              Authorised Signature
            </p>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
