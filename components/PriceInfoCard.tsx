import Image from "next/image";
import React from "react";

type PriceInfoCardProps = {
  title: string;
  icon: string;
  value: string;
};

const PriceInfoCard: React.FC<PriceInfoCardProps> = ({
  title,
  icon,
  value,
}) => {
  return (
    <div className={`price-info_card`}>
      <p className="text-base text-black-100">{title}</p>

      <div className="flex gap-1">
        <Image src={icon} alt="icon" width={16} height={16} />

        <p className="text-2xl font-bold text-secondary">{value}</p>
      </div>
    </div>
  );
};
export default PriceInfoCard;
