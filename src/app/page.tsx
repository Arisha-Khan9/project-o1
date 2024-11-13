// import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <><Navbar />
    <div>
      {/*css for the background image*/}
      <div className="bg-cover bg-center h-screen "
        style={{ backgroundImage: "url(/img-1.jpg)" }}
      >
        {/*css for the background text*/}
        <h1 className="text-black font-bold text-center font-style: italic p-36 text-4xl">
          Welcome to the "A.K FOOD MOMENT RESTAURANT"!
        </h1>

        {/*css for the rounded text*/}


        <div className="flex space-x-4 items-center justify-center ">

          <div className="text-black bg-gray-600 bg-opacity-40 rounded-2xl shadow-md p-5 flex flex-col w-1/9 ">
            <h2 className="text-2xl font-bold">
              FOOD
            </h2>
          </div>

          <div className="text-black bg-gray-600 bg-opacity-40 rounded-2xl shadow-md p-5 flex flex-col w-1/9 ">
            <h2 className="text-2xl font-bold">
              FAMILY
            </h2>
          </div>

          <div className="text-black bg-gray-600 bg-opacity-40 rounded-2xl shadow-md p-5 flex flex-col w-1/9 ">
            <h2 className="text-2xl font-bold">
              LOVE
            </h2>
          </div>

        </div>

      </div>
    </div></>
  );
}

        
