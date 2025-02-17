import "./Netflix.css";

const SeriesCard = (props) => {
    let age = 154;
    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.data;
    const styling = {
        margin: "1rem 1rem"
    }  
    const buttonStyling = {
        padding: "1.2rem 2.4rem",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "rgb(49, 175, 175)" : "#ffff00"}`,
        // backgroundColor: "rgb(49, 175, 175)",
        borderRadius: "1rem"
    }
    return (<li className="card" >
        <div>
            <div>
                <img src={img_url} alt={img_url} width="40%" height="40%" />
            </div>
            <div className="card-content" >
                <h3>Name: {name}</h3>
                <h3>
                    Rating: <span className={`rating ${rating >= 8.5 ? "super_hit" : "average"}`} >
                        {rating}
                    </span>
                </h3>
                <p style={styling} >Summary: {description}</p>
                {/* <p>Genre: {returnGenre()}</p> */}
                <p style={styling} >Genre: {genre}</p>
                <p style={{ margin: "1rem 1rem" }} >Cast: {cast}</p>
                <a href={watch_url} target="_blank" >
                    <button style={buttonStyling}>{age > 18 ? "Watch Now" : "Not Available"}</button>
                </a>
            </div>
        </div>
    </li >)
}

export default SeriesCard;