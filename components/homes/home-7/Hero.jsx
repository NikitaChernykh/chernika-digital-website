import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-7" id="hero">
      <div className="bg-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="hero-style7 text-center">
                <h1 className="hero-title wow img-custom-anim-top animated text-smoke">
                  Build your idea with us!
                </h1>
                <p className="hero-text wow img-custom-anim-top animated text-smoke">
                  We create digital products to help you reach your goals and
                  improve your business
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="hero-7-thumb wow img-custom-anim-top animated">
                <Image
                  width={556}
                  height={440}
                  src="/assets/img/hero/hero-7-1.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
