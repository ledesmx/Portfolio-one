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

    return(
        <div className={`border-2 rounded-3xl py-[60px] px-[7%] ${borderColor()}`}>
            <span>{props.id}</span>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <ul className="flex space-x-2">
                    {props.skills.map(item => 
                    <li
                        key={item}
                    ><span>~</span> {item}</li>)}
                </ul>
            </div>
            <div>
                <img src={props.img} alt="project img" />
                <div>
                    <Button>Code</Button>
                    <Button>Visit site</Button>
                </div>
            </div>
        </div>
    )
}