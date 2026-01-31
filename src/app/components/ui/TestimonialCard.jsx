import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  src,
  client_review,
  client_name,
  client_position,
}) => {
  return (
    <div className="flex flex-row min-w-[500px] border border-stroke-navy-blue bg-white p-lg rounded-lg gap-lg">
      <div className="flex flex-col justify-between">
        <p className="italic">{client_review}</p>
        <div>
          <h5 className="text-navy-blue">{client_name}</h5>
          <h6 className="text-gray text-base-small">{client_position}</h6>
        </div>
      </div>
      <div className="relative w-[300px] h-full aspect-3/4 rounded-md overflow-clip">
        <Image
          src={src}
          alt="Client Profile Images"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
