import Navbar from "../components/navbar"

export default function Deals() {
    return(
        
        <><Navbar />

<main className=" bg-black bg-cover w-full h-screen justify-center"
        style={{backgroundImage: "url(deals-1.jpg)"}}>

<h1 className="text-white font-bold text-center font-style: italic p-6 text-4xl">
          Welcome to the "A.K FOOD MOMENT RESTAURANT DEALS"!
        </h1>
<br />
<br />

            <div className="flex space-x-4 items-center justify-center P-2 ">
                <div className="bg-gray-700 bg-opacity-80 rounded-lg shadow-md p-6 w-1/3 text-white">
            <h1 className= "text-black text-2xl font-semibold">FRIDAY DEALS</h1>
            <p>
            * Buy 2 cheez Burgers, get 1 Free in 1000pkr <br />
         * Buy 1 small siz pizza's ,get 1 free with cold-drink in 600pkr. <br />
            * Buy 1 platter of pasta, get 1 free desert cup in 500pkr. <br />
                   <h3 className="text-red-950 font-bold">--* AVAILABLE ONLY ON FRIDAY, 7pm to 11pm FOR 3 WEEKS*--</h3>

            </p>
            </div>
            
            

            <div className="bg-gray-700 bg-opacity-80 rounded-lg shadow-md p-6 w-1/3 text-white">
            <h1 className= "text-black text-2xl font-semibold ">SATURDAY GAMES DAY</h1>
            <p>
                we offer saturday's best deals for children in which; <br />
                * buy 1 slice pizza with 1 juice bottle in 200pkr. <br />
                * buy 1 small burger with 1 juice bottle in 300pkr. <br />
                * buy 1 sandwitch and get free dessert cup in 200pkr. <br />
               <h2 className="text-black text-2xl font-semibold"> PLAY AREA IS FREE FOR CHILDREN!</h2>
                 <h3 className="text-red-950 font-bold">--* AVAILABLE FROM SATURDAY,11am to 3pm FOR 1 month*--</h3>
                </p>
        
        </div>

        <div  className="bg-gray-700 bg-opacity-80 rounded-lg shadow-md p-6 w-1/3 text-white">
        <h1 className= "text-black text-2xl font-semibold ">SUNDAY DEALS</h1>
            <p> 
                * buy 1 plate Biryani with 1 cold drink Cane in 200pkr. <br />
                * buy 2 plate Biryani and get 1 cold drink Cane and dessert cup, in 400pkr. <br />
                * buy 1 loaded sandwitch and get free Biryani plate in 300pkr. <br />
            <h3 className="text-red-950 font-bold">--* AVAILABLE FROM SUNDAY,MIDNIGHT FOR 1 month*-- </h3>
                </p>

        </div>
        </div>
<br />
        <div>
            <p className="text-center bg-gray-700 bg-opacity-80 rounded-lg shadow-md p-6
             w-1/ text-white">
                ALL deals are available ONLINE,also at our restaurant.
                for contact us OR order deals and other food, go to our contact page or order now, by reaching
                our order page. 
            </p>
        </div>
            
        </main>
        
        </>
    )
}