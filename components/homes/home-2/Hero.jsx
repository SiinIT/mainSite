import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-2" id="hero">
      <div className="hero-2-thumb wow img-custom-anim-right animated">
        <Image
          width={1082}
          height={728}
          src="/assets/img/hero/hero.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="hero-style2">
          <div className="row">
            <div className="col-lg-9">
              <h1 className="hero-title wow img-custom-anim-right animated text-white">
                Portiamo 
              </h1>
              <h1 className="hero-title wow img-custom-anim-left animated text-white">
                Il Tuo Business
              </h1>
            </div>
            <div className="col-lg-10">
              <h1 className="hero-title wow img-custom-anim-right animated text-white">
                Nel Futuro
              </h1>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <p className="hero-text wow img-custom-anim-left animated text-white">
              Sviluppiamo software su misura e campagne pubblicitarie online sfruttando dati da CRM personalizzati, 
              per potenziare la tua presenza digitale e crescita aziendale.
              </p>
              <div className="btn-group fade_left">
                <Link
                  scroll={false}
                  href="/project"
                  className="btn style2 wow img-custom-anim-left animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">SCOPRI I NOSTRI LAVORI</span>
                    <span className="effect-1">SCOPRI I NOSTRI LAVORI</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xxl-6 col-xl-7 col-lg-9">
              <div className="wow img-custom-anim-right animated">
                <div className="hero-contact-wrap">
                  Via Matteotti 4, Carpino (FG) 71010
                </div>
                <div className="hero-contact-wrap">
                  <a href="tel:3452286086">+39 3452286086 </a>
                  <a href="mailto:info@siitgroups.it">
                    info@siitgroups.it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
