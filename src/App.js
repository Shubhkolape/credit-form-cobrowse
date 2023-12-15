import { useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(1000);

  const lengthRef = useRef(null);

  return (
    <div className=" pl-12 flex justify-items-start items-center p-8 my-[40px] text-black">
      <form className="">
        <div className="flex flex-col   gap-[10px]">
          <h2 className="relative  text-[#6C757D]">
            Personal Information
            {/* <span class="absolute item-center mx-5 w-16 h-2  bg-blue-500"></span> */}
          </h2>
          <h1 className="text-4xl font-bold">Personal Details</h1>
        </div>

        <div className="flex  mt-[40px] gap-[60px]">
          <div className="flex flex-col gap-[10px] ">
            <label htmlFor="Name" className="text-[#6C757D] font-bold">
              {" "}
              First Name
            </label>
            <input
              type="text"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />

            <label htmlFor="Date" className="text-[#6C757D] font-bold">
              Date
            </label>
            <input
              type="date"
              className="text-black p-[10px] border bg-[#EFF2F6] border-gray-800 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-[10px]  ">
            <label htmlFor="Last Name" className="text-[#6C757D] font-bold">
              Last Name
            </label>
            <input
              type="text"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />

            <label htmlFor="Email" className="text-[#6C757D] font-bold">
              Email*
            </label>
            <input
              type="email"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col   gap-[10px]  mt-[80px]">
          <h2 className="text-[#6C757D]">Card Information</h2>
          <h1 className="text-4xl font-bold">Card Details</h1>
        </div>

        <div className="flex  mt-[40px] gap-[60px]">
          <div className="flex flex-col gap-[10px]  ">
            <label htmlFor="mySelect" className="text-[#6C757D] font-bold">
              Card Type
            </label>

            <select
              id="mySelect"
              className="text-black p-[12px] border bg-[#EFF2F6] rounded-md"
            >
              <option value="option0">Select</option>
              <option value="option1">Visa Platinum Card</option>
              <option value="option2">Visa Gold Card</option>
              <option value="option3">Visa ClassNamic Card</option>
              <option value="option4">Titanium Master Card</option>
              <option value="option5">Express Card</option>
            </select>
          </div>

          <div className="flex flex-col gap-[10px]  ">
            <label htmlFor="SSN" className="text-[#6C757D] font-bold">
              Social Security Number
            </label>
            <input
              type="text"
              className="text-black p-[10px] border bg-[#EFF2F6] rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]   mt-[60px]">
          <label htmlFor="price " className="text-[#6C757D] font-bold">
            {" "}
            Card Limit : {length}
          </label>
          <input
            type="range"
            value={length}
            min={1000}
            max={5000}
            onChange={(e) => {
              setlength(e.target.value);
            }}
            ref={lengthRef}
          />
        </div>

        <div className="flex gap-[30px] mt-[30px] text-white">
          <button className="py-[12px] px-[20px]    bg-[#007BFF]">
            Submit
          </button>
          <button className="py-[12px] px-[20px]    bg-[#007BFF]">
            Need Help
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
