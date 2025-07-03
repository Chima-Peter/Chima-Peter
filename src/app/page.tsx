import TypingAnimation from "@/components/typing_animation"
import Image from "next/image"


// bg-gradient-to-b from-black via-[#060022] to-[#00093d]


const Page = () => {
    return (
        <main className="w-[100%] font-sen">
            <section className="w-[100%] relative flex items-center justify-center py-16 md:py-20 lg:py-24 h-screen flex-col gap-4">
                <h1 className="text-center text-4xl md:text-5xl font-bold text-white lg:text-6xl font-sen w-fit z-10  px-2 md:px-4 lg:px-6">
                    Hey, I am&nbsp; 
                    <span className="bg-clip-text bg-gradient-to-r from-[#3c50ff] font-semibold via-[#8a3ffc] to-[#ff38d4] text-transparent">
                        <TypingAnimation words={['a Software Developer','a Web Developer','a Full Stack Engineer','a JavaScript Ninja','a Clean Code Advocate','Chima Ojimma',]} />    
                    </span>
                </h1>
                <h2 className="text-center text-4xl md:text-5xl font-bold text-white lg:text-6xl font-sen w-fit z-10 px-2 md:px-4 lg:px-6">
                    Let’s build your vision <br />
                    <p className="bg-clip-text bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] text-transparent font-bold inline-block mt-3"> 
                        pixel&nbsp;
                    </p> 
                    by&nbsp;
                    <p className="bg-clip-text bg-gradient-to-r from-[#3c50ff] via-[#8a3ffc] to-[#ff38d4] text-transparent font-bold inline-block">
                        pixel.
                    </p>
                </h2>
                <Image 
                    className="animate-pulse z-0 [animation-duration:4s] object-fill w-[100%] h-screen absolute top-0 left-0 object-center"
                    src={'/hero_section_image.png'} 
                    width={1440}
                    height={700}
                    alt="Chima Peter" />
            </section>
        </main>
    )
}

export default Page