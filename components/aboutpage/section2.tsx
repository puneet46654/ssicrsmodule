"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section
      className=""
      style={{ backgroundColor: "#FBFAF2", width: "1600px", overflow: "visible" }}
    >
      <div className="p-0">
        <div className="grid grid-cols-12">
          
          <div className="col-span-4">
            <h2
              className=""
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "34px",
                fontWeight: 500,
                color: "#A67950",
                lineHeight: "1.2",
                marginTop: "150px",
                marginLeft: "80px",
                marginBottom: "200px"
              }}
            >
              Educating the future of
              
              Accessible Robotic
              
              Surgery
            </h2>
          </div>

          <div className="col-span-5">
            <div
              className=""
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#401323",
                marginTop: "20px",
                marginLeft: "-50px"
              }}
            >
              <p className="mb-0">
                <span className="font-semibold">Dr. Sudhir Srivastava</span> stands at the forefront of robotic surgical innovation 
                as a globally recognized pioneer in robotic-assisted surgery. With an 
                unwavering commitment to democratizing this transformative technology, 
                he has dedicated his career to making robotic surgery more affordable, 
                accessible, and impactful for patients worldwide.
              </p>
              <p className="mt-12 ml-4">
                In pursuit of this vision, Dr. Srivastava founded SS Innovations to develop 
                state-of-the-art, cost-effective robotic surgical solutions. Building on this 
                success, the SS International Centre for Robotics Surgery (SSICRS) has 
                been established to create a comprehensive educational framework. This 
                initiative empowers the next generation of healthcare professionals—
                including surgeons, anesthesiologists, surgical staff, and ICU specialists—
                to master robotic-assisted surgery using the advanced SSI Mantra Surgical 
                Robotic System.
              </p>
              <p className="mt-20 -ml-10">
                SSICRS is devoted to cultivating future leaders in robotic surgery, ensuring 
                that the benefits of robotic-assisted healthcare are accessible to all, rather 
                than being a privilege for only a select few.
              </p>
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative w-[404px] h-[404px] mt-40 ml-10">
              <Image
                src="/Images/aboutpage/section2/sudhir.png"
                alt="Dr. Sudhir Srivastava"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}