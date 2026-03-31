import TestimonialsAvatar from "./TestimonialsAvatar";
import TestimonialsDescription from "./TestimonialsDescription";
import TestimonialsNameJob from "./TestimonialsNameJob";

export default function TestimonialsCard({ avatar, description, name, job }){
    return(
        <div className="w-[372px] h-[428px] bg-white px-12 py-12 rounded-[12px] shadow-md">
            <div className=" flex flex-col justify-center items-center  gap-6 " >
                <TestimonialsAvatar avatar={avatar} />
                <TestimonialsDescription description={description} />
                <TestimonialsNameJob name={name} job={job} />
            </div>
        </div>
    )
}