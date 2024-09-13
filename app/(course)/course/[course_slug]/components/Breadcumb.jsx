import React from "react";
import urlBuilder from "@sanity/image-url";
import config from "@/sanity/config/client-config";

export default function Breadcumb({ title, mainImage }) {

  console.log()

  return (
    <div            
      className="breadcumb-wrapper"
      style={{ backgroundImage: `url(${urlBuilder(config).image(mainImage).fit("max").auto("format").url()})` }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

