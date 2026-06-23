"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  index,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const getBentoClasses = (i) => {
    switch (i) {
      case 0:
        return "md:col-span-2 md:row-span-1";
      case 1:
        return "md:col-span-1 md:row-span-2";
      case 3:
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <>
      <div
        className={`group relative flex flex-col justify-between bg-[#fbfbfb] border border-gray-100 rounded-[24px] hover:bg-white hover:border-gray-200 transition-all duration-500 h-full p-6 min-h-[200px] md:min-h-[220px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] ${getBentoClasses(index)}`}
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="relative z-10 flex flex-col w-full">
          <div className="flex items-start justify-between gap-4 w-full mb-3">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              {title}
            </h3>
            <button
              onClick={() => setIsHidden(true)}
              className="p-2 bg-white border border-gray-100 rounded-full text-gray-400 group-hover:text-gray-900 group-hover:border-gray-300 group-hover:bg-gray-50 transition-all duration-300 shrink-0 shadow-sm active:scale-95"
              aria-label="Read more project details"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>

          <p className="text-xs font-normal text-gray-500 line-clamp-3 leading-relaxed text-left max-w-[92%] mb-6">
            {description}
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-1.5 w-full pt-2 group-hover:border-gray-200/80 transition-colors duration-500">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center text-[10px] font-semibold text-gray-600 bg-gray-50 group-hover:bg-white px-2.5 py-1 rounded-full border border-gray-200/60 whitespace-nowrap transition-colors duration-500"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;