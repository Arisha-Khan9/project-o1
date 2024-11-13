import Navbar from "../components/navbar"
export default function Order () {
    return(
        <>
        <Navbar/>

        <main
        className= " bg-black bg-cover w-full h-screen justify-center"
        style={{backgroundImage: "url(contact-1.jpeg)"}}
        >
            <div className="text-center text-gray-800">

        <h1 className=" font-bold font-style: italic p-6 text-4xl">
         ORDER US ON:
        </h1>
        
            <form>
                <div className=" mt-4">
                    <label className="block mb-2" htmlFor="name">Name: </label>
                    <input type="text" className="border p-2 rounded" alt="write your name here!" />
                </div>
<br />
                <div className="mt-4">
                    <label  className="block mb-2" htmlFor="address">Address: </label>
                    <input type="text" className="border p-2 rounded" alt="write your correct address here!" />
                </div>
<br />
                <div className="mt-4">
                    <label  className="block mb-2" htmlFor="phone">Mobile no.: </label>
                    <input type="number" className="border p-2 rounded" alt="write your phone no. here!" />
                </div>
<br />
                <div>
                    <label className="block mb-2" htmlFor="order">order: </label>
                    <input type="text" className="border p-2 rounded" alt="write your meal here!" />
                </div>

            </form>
<br />
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">ORDER NOW</button>
        
        </div>
        </main>
        </>
    )
}