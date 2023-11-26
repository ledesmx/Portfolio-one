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
        <div className={`border-2 rounded-3xl py-[60px] px-[7%] ${borderColor()}`}>
            <span>{props.id}</span>
            <div>
                <h3 className={`${textColor()}`}>{props.title}</h3>
                <p>{props.description}</p>
                <ul className="flex space-x-2">
                    {props.skills.map(item => 
                    <li
                        key={item}
                    ><span className={`${textColor()}`}>~</span> {item}</li>)}
                </ul>
            </div>
            <div>
                <img src={props.img} alt="project img" />
                <div>
                    <Button color={props.color}>Code</Button>
                    <Button 
                    color="secondary"
                    bg={props.color}>Visit site</Button>
                </div>
            </div>
        </div>
    )
}