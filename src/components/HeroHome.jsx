const Hero = () => {
    return (
        <div className="h-full flex flex-row gap-20">
            <div className=' ml-20 mt-20'>
            <img src="https://placehold.co/800x600" alt="yo" />
            </div>
            <div className="mt-20 w-3/5 mr-20 font-modern">
               <p className=" text-4xl"> No one understands greatness until they can see it with their eyes, and these colors are so great you don't even need to see them.
               
                 </p>
                 <br/>
                 <br/>
                 <p className="text-4xl">With these colors, you can go to places you've never been able to with free-to-use and unlicensed colors.</p>
                 <br />
                 <br />
                 <p className="text-4xl">Drop a couple bands, live lavishly.</p>
            </div>
        </div>
    )
}

export default Hero;