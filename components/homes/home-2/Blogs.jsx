import { blogs } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import config from "@/sanity/config/client-config";

export default function Blogs({ courses }) {

  return (
    <section className="blog-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Scopri la nostra accademy !</h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 justify-content-center">

          {courses.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <Link
                scroll={false}
                href={`/course/${elm.slug.current}`}
                className="blog-card style2"
              >
                <div className="blog-img">
                  <Image
                    src={
                      urlBuilder(config)
                        .image(elm.mainImage)
                        .fit("max")
                        .auto("format")
                        .url() 
                    }
                    width={416}
                    height={340}
                    alt="blog image"
                  />
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    <span>1</span>
                    <span>2</span>
                  </div>
                  <h4 className="blog-title">{elm.title}</h4>
                  <span className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">SCOPRI DI PIU'</span>
                      <span className="effect-1">SCOPRI DI PIU'</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </span>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
