export default function TestimonialsAvatar ({ avatar }){
    return(
        <div className="w-[64px] h-[64px] rounded-full bg-[#9ca3af] flex justify-center items-center">
            <img src={avatar} alt="" className="w-[40px] h-[40px] overflow-hidden"/>
        </div>
    )
}