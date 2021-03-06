import React,{useState,useEffect} from "react";
import "./style.css";
import ViewModal from "../ViewRecipeModal";
import API from "../../utils/API";

function RecipeCard ( props ) {
  console.log(props);
  const [rating, setRating] = useState();
  const getRating= () => {
    API.getRating(props._id)
      .then((res) => {
        console.log(props);
        setRating(res.data[0].avgRating);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getRating(props._id);
  }, []);

  const deleteRecipe = () => {
    API.deleteRatings(props._id);
    API.deleteRecipe(props._id)
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
        <div className="card mb-3 ">
          <div className="row no-gutters shadow rounded recipe-card">
            <div className="col-md-4">
              <img className="m-3" src="/images/fruit.jpg" alt="..."></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"><small className="text-muted">Rating: {rating}/5</small></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="m-2">Categories:</h6>
              <ul>
                {props.categories && props.categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
              <h6 className="m-2">Ingredients:</h6>
              <ul>
                {props.ingredients && props.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h6>Preparation:</h6>
              {props.prep}
            </div>
          </div>
          <div className="row clearfix">
            <div className="col m-2 text-center clearfix">
              <button type="button" className="btn btn-danger active float-left" onClick={deleteRecipe} id="login-btn">Delete Your Recipe</button>
            </div>
            <div className="col m-2 float-left">
              <ViewModal className="col m-2 float-left"/>
            </div>
          </div>
        </div>
    </>
  );
}
export default RecipeCard;