const Services = () => {
    return (
        <div className="flex flex-col w-screen h-screen bg-white p-12 md:p-28">
            <div className="flex flex-row items-center mb-20 mx-4">
                <h2 className="mr-8 bg-[#b8f582] px-2">Services</h2>
                <p className="text-xs w-[35vw] mt-2">
                    Pellentesque congue porta felis, at laoreet leo finibus quis.
                    Nunc laoreet, arcu et molestie faucibus, erat dui rhoncus enim,
                    at eleifend metus ligula vitae ipsum.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 w-full h-full">
                <div className="relative h-full w-full bg-black p-8 rounded-[30px] outline">
                    <div className="absolute h-full w-full bg-white outline rounded-[30px] top-[-10px] left-0">

                    </div>
                </div>
                <div className="relative h-full w-full bg-black p-8 rounded-[30px] outline">
                    <div className="absolute h-full w-full bg-[#181818] outline outline-[#181818] rounded-[30px] top-[-10px] left-0">

                    </div>
                </div>
                <div className="relative h-full w-full bg-black p-8 rounded-[30px] outline">
                    <div className="absolute h-full w-full bg-[#181818] outline outline-[#181818] rounded-[30px] top-[-10px] left-0">

                    </div>
                </div>
                <div className="relative h-full w-full bg-black p-8 rounded-[30px] outline">
                    <div className="absolute h-full w-full bg-white outline rounded-[30px] top-[-10px] left-0">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services