const SeriesCard = (props) => {
    let age = 154;
    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.data;
    return (<li >
        <div>
            <div>
                <img src={img_url} alt={img_url} width="40%" height="40%" />
            </div>
            <h2>Name: {name}</h2>
            <h2>Rating: {rating}</h2>
            <p>Summary: {description}</p>
            {/* <p>Genre: {returnGenre()}</p> */}
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank" >
                <button>{age > 18 ? "Watch Now" : "Not Available"}</button>
            </a>
        </div>
    </li>)
}

export default SeriesCard;