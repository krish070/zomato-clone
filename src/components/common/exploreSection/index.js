import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({lists, collectionName}) =>{
    return <div className="max-width explore-section">
        <div className="collection-title">{collectionName}</div>
        {console.log(collectionName)}
        <div className="explore-grid">
            {lists.map((restaurants)=>{
                return <ExploreCard restaurant={restaurants} key={restaurants?.info?.resId} />
            })}
        </div>
    </div>
}

export default ExploreSection;