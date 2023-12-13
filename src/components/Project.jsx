import { motion } from "framer-motion";
// import tw from "twin.macro";
import Button from "./Button"

export default function Project(props) {
    const borderColor = () => {
        let color;
        switch(props.color) {
            case "coral": color = "border-light-accent-coral dark:border-dark-accent-coral";
            break;
            case "turquoise": color = "border-light-accent-turquoise dark:border-dark-accent-turquoise";
            break;
            case "purple": color = "border-light-accent-purple dark:border-dark-accent-purple";
            break;
            default: color = "";
        }
        return color
    }

    const textColor = () => {
        let color;
        switch(props.color) {
            case "coral": color = "text-light-accent-coral dark:text-dark-accent-coral";
            break;
            case "turquoise": color = "text-light-accent-turquoise dark:text-dark-accent-turquoise";
            break;
            case "purple": color = "text-light-accent-purple dark:text-dark-accent-purple";
            break;
            default: color = "";
        }
        return color
    }

    return(
        <motion.div className={`border-2 rounded-3xl py-[50px] px-[7%] relative bg-light-secondary dark:bg-dark-secondary md:px-[8%] md:py-[80px] lg:grid lg:grid-cols-2 ${borderColor()}`}
            initial={{ translateY: 100, opacity: 0, filter: "saturate(0)" }}
            whileInView={{ 
                filter: ["saturate(0)", "saturate(0)", "saturate(0)", "saturate(1)"], 
                opacity: [0, 0, 1, 1],
                translateY: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
        >
            <span className="font-jetbrains text-2xl absolute opacity-80 left-[4%] top-[15px] md:left-[30px] md:top-[30px] lg:text-3xl">{props.id}</span>
            <div className="w-[90%]">
                <h3 className={`font-koulen text-5xl mb-5 lg:text-5.2xl ${textColor()}`}>{props.title}</h3>
                <p className="font-encode leading-8 mb-4">{props.description}</p>
                <ul className="flex flex-wrap justify-evenly mb-8 lg:flex-col lg:mb-0">
                    {props.skills.map(item => 
                    <li
                    className="font-jetbrains flex flex-nowrap space-x-1"
                    key={item}
                    ><span className={`${textColor()}`}>~ </span><span>{item}</span></li>)}
                </ul>
            </div>
            <div className="lg:flex lg:flex-col-reverse lg:justify-between">
                <img 
                className="rounded-xl mb-10 lg:mb-0"
                src={props.img} alt="project img" />
                <div className="md:flex md:justify-end md:space-x-5 lg:mb-12">
                    <Button
                    className="w-full h-btn mb-4 lg:mb-0 lg:w-[100px]"
                    color={props.color}
                    link={props.code}>Code</Button>
                    <Button 
                    className="w-full h-btn lg:w-[155px]"
                    color="secondary"
                    link={props.site}
                    bg={props.color}>Visit site</Button>
                </div>
            </div>
        </motion.div>
    )
}