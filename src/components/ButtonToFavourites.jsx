import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ButtonToFavourites = () => {
  const navigate = useNavigate();

  return (
    <Link to={"/favourites"}>
      <Button variant="success" onClick={() => navigate("/favourites")}>
        Fav
      </Button>
    </Link>
  );
};

export default ButtonToFavourites;
