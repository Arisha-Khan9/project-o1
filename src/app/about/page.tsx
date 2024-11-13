import React from "react"
import Navbar from "../components/navbar"

export default function About() {
    return (
        <><Navbar/>

       <main className="justify-around bg-cover bg-center h-screen"
        style={{backgroundImage: "url(bg-1.jpg)"}}>
        <div>

       
        
             <h1 className="text-black text-2xl font-extrabold text-center font-style: italic p-10">
            About A.K food Restaurant! 
           </h1>
           
           <p className="text-black text-center justify-center px-4 text-base font-semibold
            flex flex-row w-1/2">
            we're committed to providing our customers with the freshest and cleanest food possible.
            Our team meticulously selects only the highest quality ingredients, ensuring
            that every dish is not only delicious but also packed with nutritional
            value. We believe that clean eating starts with fresh, sustainably sourced produce,
            and we take pride in our rigorous hygiene standards. Every meal is
             prepared with care and precision in a spotless kitchen, so you can 
             enjoy your dining experience with peace of mind. Your health and 
             satisfaction are our top priorities, and we strive to make each visit 
             a memorable experience. Welcome to our restaurant a celebration of 
             good food, wholesome, delectable cuisine..
             
             </p>
             <p className="text-black text-center justify-center px-4 text-base font-semibold
             flex flex-row w-1/2">
             we pride ourselves on offering a diverse menu that caters to every palate.
             From savory appetizers to sumptuous main courses and delectable desserts,
              our culinary offerings span a variety of cuisines and flavors. 
              Whether you're in the mood for a classic Italian pasta, a spicy Mexican
               dish, a fresh and healthy salad, or a hearty steak, we have something
                to satisfy every craving. Our menu also includes a range of vegetarian,
                 vegan, and gluten-free options, ensuring that everyone can find
                  something to enjoy. Each dish is thoughtfully prepared with
                   high-quality ingredients, ensuring a dining experience that is
                    both enjoyable and as delightful as it is delicious.

           </p>
           </div>

             <div className="grid grid-cols-2 items-center rounded  mx-72 pl-[420]">
            <img src="about-pic-1.jpeg" alt="food" className="w-[200] p-1 -mt-[700]" />
            <img src="about-pic-2.jpeg" alt="food" className="w-[200] h-[130] p-3 -mt-[700]" />
            <img src="about-pic-3.jpeg" alt="food" className="w-[200] p-2 h-[120] -mt-[450]" />
            <img src="about-pic-4.jpeg" alt="food" className="w-[200] p-3 -mt-[450]" />
            <img src="about-pic-5.jpeg" alt="food" className="w-[200] p-2 -mt-[200]" />
            <img src="about-pic-6.jpeg" alt="food" className="w-[250] p-6 -mt-[200]" />
            <img src="about-pic-7.avif" alt="food" className="w-[190] h-[110] p-1 -mt-[35]" />
            <img src="about-pic-8.jpeg" alt="food" className="w-[800] p-7 -mt-[35]" />
            </div>

           
        </main>
        </>
    )
}