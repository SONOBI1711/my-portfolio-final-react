export default function TestimonialsNameJob({ name, job }){
    return(
        <div className="w-[280px] h-auto flex flex-col justify-center items-center gap-1">
            <h3 className="text-5 leading-7 font-semibold text-gray-900">{name}</h3>
            <span className="block text-gray-600 text-[14px] leading-5 font-normal">{job}</span>
        </div>
    )
}