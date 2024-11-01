import React from "react";
import Link from "next/link";

export default function ({ course_slug, lectures }) {
  
  return (
    <div className="faq-area-1 mt-5 overflow-hidden">
      <div className="containeer">
        <div className="row">
          <div className="col-xl-8">
            <div className="accordion-area accordion">
              {lectures.map((elm, i) => (
                <div key={i} className="accordion-card">
                  <div
                    className="accordion-header"
                    id={`collapse-item-${elm.id}`}
                  >
                    <Link
                      scroll={false}
                      href={`/course/${course_slug}/lesson/${elm.slug.current}`}
                    >
                      <button
                        className='accordion-button'
                        type="button"
                      >
                        {" "}
                        <span className="faq-number">
                          {i.toString.length > 1 ? i : "0" + (i + 1)}
                        </span>{" "}
                        {elm.title}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
