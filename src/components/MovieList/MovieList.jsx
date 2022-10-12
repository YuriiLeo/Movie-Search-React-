import { Link } from "react-router-dom";


export default function MovieList({items}) {
  return (
      <div>
          {items.map(({ id, backdrop_path, title }) => (
              <div key={id}>
              <Link to={`${id}`}>
                  <img src="" alt="" />
                  <p></p>
              </Link>
          </div>
          ))}
    </div>
  )
}
