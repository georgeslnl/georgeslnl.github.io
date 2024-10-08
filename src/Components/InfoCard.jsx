import React from "react";

const InfoCard = ({ title, icon: Icon, content, className }) => {
  return (
    <div className={`shadow-xl hover:shadow-2xl border bg-secondary-50 p-8 rounded-lg flex flex-col gap-1 items-center lg:items-start ${className}`}>
      <div className="flex items-center gap-2">
        <Icon className="text-3xl text-text-900"/>
        <h1 className="text-3xl font-semibold text-text-900 lg:text-end">{title}</h1>
      </div>
      <p className="text-text-900 text-justify">{content}</p>
    </div>
  );
};

export default InfoCard;