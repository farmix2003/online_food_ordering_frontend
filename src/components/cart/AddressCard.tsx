import { CloseOutlined, House } from "@mui/icons-material";
import { useState } from "react";
import "./style.css";
const addresses = [
  {
    street: "Eul way",
    city: "Gemikonagi",
    apartment: "Aycan Block B 2",
  },
  {
    street: "Eul way",
    city: "Gemikonagi",
    apartment: "Alpay, Block B 20",
  },
];

const AddressCard = () => {
  const [isAddLocationOpen, setIsLocationOpen] = useState<boolean>(false);

  return (
    <>
      {isAddLocationOpen ? (
        <div className="ml-[100]">
          <CloseOutlined onClick={() => setIsLocationOpen(false)} />
          <div className="w-[30rem] p-5 bg-white rounded-md">
            <h2>Add New Address</h2>
            {/* Add form here */}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center ml-10 mt-[10%] justify-center">
          <h1 className="mb-10 font-semibold text-4xl">
            Choose delivery address
          </h1>
          <div className="flex items-center justify-center w-full">
            {addresses.map((address) => (
              <div className="flex items-center justify-evenly w-full ">
                <div className="border-gray-500 border-2 w-[15rem] p-2 grid gap-2 rounded">
                  <div className="flex items-center justify-start gap-x-3  ">
                    <p>
                      {" "}
                      <House />{" "}
                    </p>
                    <span className="text-xl">Home</span>
                  </div>
                  <div className="ml-10 relative">
                    <h5>{address?.apartment}</h5>
                    <p>{address.street}</p>
                    <p>{address.city}</p>
                  </div>
                  <button
                    className=" w-full p-2
                   border-gray-500 border-2 rounded-md 
                   hover:scale-95 hover:bg-gray-600/40 transition-all"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button
              onClick={() => setIsLocationOpen(true)}
              className="w-[10rem] bg-gray-300/20 p-3 rounded-md"
            >
              Add Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddressCard;
