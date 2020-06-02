import React from "react";

export default function Recommendation({ recommendations }) {
  return (
    <div className="recommendation-wrapper w-100">
      <h5 className="font-weight-bold resume-section-title">Recommendations</h5>
      <div className="row recommendation-list">
        {recommendations.map((recommendation) => (
          <div className="col-sm-6" key={recommendation.id}>
            <p className="text-center font-weight-bold ">
              {recommendation.name}
            </p>
            <p className="text-center font-weight-bold">
              {recommendation.position}
            </p>
            <p className="text-center font-weight-bold">
              {recommendation.company}
            </p>
            <p className="text-center font-italic">
              "{recommendation.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
