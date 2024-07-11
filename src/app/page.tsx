import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";

const abril_fatface = Abril_Fatface({ weight: "400", preload: false });

export default function Home() {
    return (
        <>
        <section className="flex items-center justify-center h-screen p-8 bg-primary shadow-lg z-10 relative overflow-hidden">
            <div className="grid md:flex gap-8 z-30 place-items-center">
                <Image
                    src="/images/logo-full-transparent.png"
                    alt="logo"
                    width={1024}
                    height={1024}
                    className="size-32 md:size-60"
                    priority
                />
                <div className="text-center md:text-left py-auto">
                    <p className="text-xl md:text-3xl text-yellow-700 text-left">Hello World! I&apos;m,</p>
                    <h1 className={`text-3xl md:text-5xl text-yellow-950 font-bold font-title ${abril_fatface.className}`}>William Jackson</h1>
                    <div className="mt-2 flex gap-2 flex-col md:flex-row">
                        <a href="#about" className="bg-primary px-6 py-1 border-2 border-yellow-800 text-yellow-900 rounded-md hover:bg-yellow-800 hover:text-primary md:text-xl"
                            >About Me</a>
                        <a href="#projects" className="bg-primary px-6 py-1 border-2 border-yellow-800 text-yellow-900 rounded-md hover:bg-yellow-800 hover:text-primary md:text-xl"
                            >Projects</a>
                        <a href="#contact" className="bg-primary px-6 py-1 border-2 border-yellow-800 text-yellow-900 rounded-md hover:bg-yellow-800 hover:text-primary md:text-xl"
                            >Contact</a>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/images/hexagon.png" alt="hexagon" width={256} height={256} className="absolute top-[-6rem] left-[-2rem] w-48 h-48 z-20" />
                <Image src="/images/hexagon.png" alt="hexagon" width={256} height={256} className="absolute bottom-[-1rem] right-[-3rem] w-32 h-32 z-20" />
                <Image src="/images/hexagon.png" alt="hexagon" width={256} height={256} className="absolute bottom-[7rem] right-[-1rem] w-32 h-32 z-20" />
                <Image src="/images/hexagon.png" alt="hexagon" width={256} height={256} className="absolute bottom-[1rem] right-[5rem] w-32 h-32 z-20" />
            </div>
        </section>
        <section id="about" className="bg-white p-8 md:pt-16 md:px-32">
            <div className="grid max-w-3xl mx-auto">
                <h2 className={`text-3xl md:text-5xl text-yellow-900 font-bold font-title ${abril_fatface.className}`}>
                    <span className="hidden md:inline">A Little </span>
                    About Me</h2>
                <p className="border-l-2 border-yellow-800 pl-6 md:text-xl text-slate-800 mt-4">I am currently a high school student with a passion for technology and programming. For nearly a decade I have been programming as a hobby, and during this time I&apos;ve learnt a lot through experience. I am constantly on the lookout for new projects to take on and new skills to acquire. My love for problem-solving drives me to continually seek out and overcome new challenges.</p>
                <span className="text-right md:text-xl text-slate-800 mt-4">- William Jackson</span>
            </div>
        </section>
        <section id="projects" className="bg-gray-100 p-8 md:pt-16 md:px-32">
            <div className="grid max-w-3xl mx-auto">
                <h2 className={`text-3xl md:text-5xl text-yellow-900 font-bold font-title ${abril_fatface.className}`}>
                    My Projects</h2>
                {/* say projects will be added here as completed */}
                <p className="md:text-xl text-slate-500 m-8 bg-gray-200 p-4 rounded-md px-8 mx-auto">Projects will be added here as they are completed.</p>
            </div>
        </section>
        {/* contact form */}
        <section id="contact" className="bg-white p-8 md:pt-16 md:px-32">
            <div className="grid max-w-3xl mx-auto">
                <h2 className={`text-3xl md:text-5xl text-yellow-900 font-bold font-title ${abril_fatface.className}`}>
                    <span className="hidden md:inline">Send me an </span>
                    Email
                    <span className="inline md:hidden"> me</span>
                </h2>
                <p className="md:text-xl text-slate-800 mt-4">Have a question or want to get in touch? Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
                <ContactForm />
            </div>
        </section>
        {/* footer */}
        </>
    );
}
