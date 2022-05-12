function Card(props) {
    return (
      <li className="card">
        <img
        src={props.flags.png}
        alt={props.flags.svg}
        />
      <div className="infos">
        <h2>{props.name.common}</h2>
        <h4>{props.name.official}</h4>
        <p>{props.subregion}</p>
      </div>
      </li>
    );
}

export default Card;