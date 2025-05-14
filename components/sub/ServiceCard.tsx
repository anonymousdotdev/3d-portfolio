// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

const ServiceCard = ({
    title,
    index,
    icon,
}: {
    title: any,
    index: any,
    icon: any,
}) => {
    return (
        <Tilt className="xs:w-[250px] flex-1 rounded-2xl hover:scale-50 border w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex items-center justify-evenly flex-col">
                    <Image src={icon} alt={title} className=" object-contain " height={100} />
                    <h3
                        className="text-white text-center font-bold
           text-[20px]"
                    >
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};


export default ServiceCard;