import {resolve} from "path";
import Navbar from "../components/navbar"
export default async function Contact() {

    await new Promise (resolve => {setTimeout(resolve,5000)
    })
    return(
        <>
        <Navbar/>

        <main className= " bg-black bg-cover w-full h-screen justify-center"
        style={{backgroundImage: "url(contact-1.jpeg)"}}
        >
            <div className="text-center text-gray-800">

        <h1 className=" font-bold font-style: italic p-6 text-4xl">
         CONTACT US ON:
        </h1>
        <form>
            <div className="font-bold text-lg mt-4">
                <div>
                    <a href="mailto:ashuuukhankhan@gmail.com">E-mail address</a>
            </div>
            <div>
                <a href="tel:+92123433256789">PHONE</a>
            </div>
            <div>
                <a href="https://wa.me/9211223456789" target="_blank">Whatsapp US</a>
            </div>
            <div>
                <a href="http://www.facebook.com">Facebook</a>
            </div>
            </div>
        </form>

        </div>
        </main>
            </>
    )
}