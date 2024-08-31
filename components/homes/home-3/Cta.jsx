"use client";
import addGsap from "@/utils/addGsap";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Cta() {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className="cta-area-1 overflow-hidden bg-title space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-10">
            <div className="title-area mb-xl-0 mb-60">
              <h2 className="sec-title text-white">
                Creaiamo qualcosa di grandioso insieme
              </h2>
              <p className="sec-text mt-30 mb-n2 text-white">
                Ti spostiamo dalla realtà di oggi al potenziale di domani
              </p>
            </div>
          </div>
          <div className="col-xl-auto">
            <Link
              scroll={false}
              className="circle-btn btn bg-theme text-title gsap-magnetic"
              href="/contact"
            >
              <span className="link-effect">
                <span className="effect-1">CONTATTACI</span>
                <span className="effect-1">CONTATTACI</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
