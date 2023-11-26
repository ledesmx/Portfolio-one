import Button from "./Button"

export default function Project(props) {
    const borderColor = () => {
        let color;
        switch(props.color) {
            case "coral": color = "border-dark-accent-coral";
            break;
            case "turquoise": color = "border-dark-accent-turquoise";
            break;
            case "purple": color = "border-dark-accent-purple";
            break;
            default: color = "";
        }
        return color
    }

    const textColor = () => {
        let color;
        switch(props.color) {
            case "coral": color = "text-dark-accent-coral";
            break;
            case "turquoise": color = "text-dark-accent-turquoise";
            break;
            case "purple": color = "text-dark-accent-purple";
            break;
            default: color = "";
        }
        return color
    }

    return(
        <div className={`border-2 rounded-3xl py-[50px] px-[7%] relative ${borderColor()}`}>
            <span className="font-jetbrains text-2xl absolute left-[4%] top-[15px]">{props.id}</span>
            <div>
                <h3 className={`font-koulen text-5xl mb-5 ${textColor()}`}>{props.title}</h3>
                <p className="font-encode leading-8 mb-4">{props.description}</p>
                <ul className="flex flex-wrap justify-evenly mb-8">
                    {props.skills.map(item => 
                    <li
                    className="font-jetbrains flex flex-nowrap space-x-1"
                    key={item}
                    ><span className={`${textColor()}`}>~ </span><span>{item}</span></li>)}
                </ul>
            </div>
            <div>
                <img 
                className="rounded-xl mb-10"
                src={props.img} alt="project img" />
                <div>
                    <Button
                    className="w-full h-btn mb-4"
                    color={props.color}>Code</Button>
                    <Button 
                    className="w-full h-btn"
                    color="secondary"
                    bg={props.color}>Visit site</Button>
                </div>
            </div>
        </div>
    )
}