import './App.css';

function WebList(props){
    return(
        <>
            
                <div className="card">
                    <img src={props.imgsrc} alt="webseries poster"></img>
                    <div className="card_details">
                        <h5 className="card_category">{props.category}</h5>
                        <h2 className="card_title">{props.title}</h2>
                        <a href={props.link} target="_blank">
                            <button>Watach Now</button>
                        </a>
                    </div>
                </div>
            
        </>
    )
}

export default WebList;