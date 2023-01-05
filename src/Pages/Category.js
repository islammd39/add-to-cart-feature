import React from "react";

const Category = ({c}) => {
    // console.log(c);
    const {strCategoryThumb, strCategory, strCategoryDescription} = c;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          <p>{strCategoryDescription.slice(0, 50) + "..."}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
