import NewsletterForm from "./NewsletterForm"

export default function Subscribe() {
    return (
        <div className="flex flex-col w-screen  px-16 py-24 items-center">
            <div className="flex flex-row items-start w-[80vw] mb-16 ml-4">
                <h2 className="mr-8 bg-[#b8f582] px-2">Subscribe</h2>
                <p className="text-xs w-[35vw] mt-2">
                    Pellentesque congue porta felis, at laoreet leo finibus quis.
                    Nunc laoreet, arcu et molestie faucibus, erat dui rhoncus enim,
                    at eleifend metus ligula vitae ipsum.
                </p>
            </div>
            <div className="flex md:w-[82vw] bg-[#181818] rounded-[50px] flex-col justify-center items-center overflow-hidden py-24">
                <div className="flex-row flex">
                    <h2 className="flex text-center text-white">
                        Join the
                    </h2>
                    <span className="flex text-center text-transparent bg-clip-text bg-gradient-to-l from-[#9ff752] to-[#cbeead] text-[36px] md:text-[42px] lg:text-[48px] font-alternate leading-none">&nbsp;newsletter.</span>
                </div>
                <NewsletterForm/>
                <div className="flex flex-row flex-wrap w-full gap-8 px-20 xl:px-24 mt-12 text-gray-400 text-xs font-numans justify-center">
                    <div className="h-full lg:w-56 lg:my-0 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget egestas
                        neque, in luctus orci. Fusce aliquet sem in iaculis porta. Duis at metus aliquet,
                        malesuada libero in, pulvinar metus.
                    </div>
                    <div className="h-[1px] lg:h-[100px] bg-white lg:w-[1px] w-full"/>
                    <div className="h-full lg:w-56 lg:my-0 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget egestas
                        neque, in luctus orci. Fusce aliquet sem in iaculis porta. Duis at metus aliquet,
                        malesuada libero in, pulvinar metus.
                    </div>
                    <div className="h-[1px] lg:h-[100px] bg-white lg:w-[1px] w-full"/>
                    <div className="h-full lg:w-56 lg:my-0 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget egestas
                        neque, in luctus orci. Fusce aliquet sem in iaculis porta. Duis at metus aliquet,
                        malesuada libero in, pulvinar metus.
                    </div>
                </div>
            </div>

        </div>
    )
}