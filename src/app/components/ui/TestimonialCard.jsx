import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  src,
  client_review,
  client_name,
  client_position,
}) => {
  return (
    <article className="flex flex-row items-center sm:min-w-[500px] border border-stroke-navy-blue bg-white max-sm:p-sm p-md rounded-lg gap-lg w-full h-fit">
      <div className="flex flex-col justify-between sm:gap-xl gap-lg">
        <blockquote className="italic text-base leading-[110%] max-w-[35ch]">
          {client_review}
        </blockquote>
        <div>
          <p className="text-navy-blue font-medium">{client_name}</p>
          <p className="text-gray text-base-small leading-[110%] max-w-[18ch]">
            {client_position}
          </p>
        </div>
      </div>
      <div className="relative aspect-3/4 w-45 h-full rounded-md overflow-clip">
        <Image
          src={src}
          alt={`Profile photo of ${client_name}`}
          fill
          sizes="180px"
          quality={75}
          className="object-cover"
        />
      </div>
    </article>
  );
};

export default TestimonialCard;
