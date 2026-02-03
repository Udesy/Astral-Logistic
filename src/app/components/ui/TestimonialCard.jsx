import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  src,
  client_review,
  client_name,
  client_position,
}) => {
  return (
    <div className="flex flex-row items-center sm:min-w-[500px] border border-stroke-navy-blue bg-white max-sm:p-sm p-md rounded-lg gap-lg w-full h-fit">
      <div className="flex flex-col justify-between sm:gap-xl gap-md">
        <p className="italic text-base leading-[110%] max-w-[35ch]">
          {client_review}
        </p>
        <div>
          <h5 className="text-navy-blue">{client_name}</h5>
          <h6 className="text-gray text-base-small leading-[110%]">
            {client_position}
          </h6>
        </div>
      </div>
      <div className="relative aspect-3/4 w-45 h-full rounded-md overflow-clip">
        <Image
          src={src}
          alt="Client Profile Images"
          fill
          className="object-cover"
        />
      </div>
      {/* <div className="relative sm:w-[250px] w-[100px] h-full rounded-md overflow-clip">
        <Image
          src={src}
          alt="Client Profile Images"
          fill
          className="object-cover"
        />
      </div> */}
    </div>
  );
};

export default TestimonialCard;
