import { IoIosClose } from "react-icons/io";


export const NewNote = () => {
  return (
    <div>
      <div className="bg-blue-50 border-2 ml-auto rounded-t-2xl border-blue-100 py-2 px-15  text-[1.5rem] font-semibold text-blue-950  ">
        +Create
      </div>

     
      <form
        className="bg-white absolute top-1/2 left-1/2 
                  transform -translate-x-1/2 -translate-y-1/2
                  rounded-2xl shadow-2xl w-[40%] px-5 py-10  flex flex-col items-start  gap-4"
      >
        <IoIosClose size={23} className="absolute right-3 top-2 " />
        <label className="w-full">
          <p className="font-semibold pb-4 text-blue-950">
            <span className="text-red-600">*</span>Title
          </p>
          <input
            type="text"
            className="border-1 outline-none px-2 py-2 w-full border-blue-950 rounded-[.4rem]"
          />
          <div className=" h-8 text-red-600 text-[1.3rem]">
            <p>error</p>
          </div>
        </label>
        <label>
          <p className="font-semibold text-blue-950">
            <span className="text-red-600">*</span>Date
          </p>
          <div className="border-1 border-blue-950  rounded-[.6rem] p-1 flex items-center justify-center w-40">
            <input
              type="number"
              className="text-blue-900 w-10  outline-none px-1 "
            />
            /
            <input
              type="number"
              className="text-blue-900 w-10  outline-none px-1 "
            />
            /
            <input
              type="number"
              className="text-blue-900 w-10  outline-none px-1 "
            />
          </div>
          <div className=" h-8 text-red-600 text-[1.3rem]">
            <p>wr3rfewfewfefwfewfewfwef</p>
          </div>
        </label>
        <button
          type="submit"
          className="bg-blue-800 rounded-[.6rem] hover:bg-blue-900 text-white py-2 w-full"
        >
          Create
        </button>
      </form>
    </div>
  );
};
