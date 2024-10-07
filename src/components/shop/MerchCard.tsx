import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useMerchProduct from "@/lib/zustand/useMerchProduct";
import { MerchProductProps } from "@/lib/zustand/useMerchProduct";

// background: linear-gradient(137.5deg, #9747FF -0.65%, #20004A 102.78%);

function MerchCard(props: MerchProductProps) {
  const navigate = useNavigate();
  const { setCurrentMerch } = useMerchProduct();

  const handleNavigate = () => {
    // Navigate to the product details page
    setCurrentMerch(props);
    navigate(`/shop/product/${props._id}`);
  };

  const [isFavourite, setIsFavourite] = useState(
    Math.random() < 0.5 ? true : false
  );

  const handleFavouriteChange = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <article className="relative max-w-[21rem] bg-secondary p-4 border border-borderColor rounded-[1rem]">
      <div
        className={cn(
          " h-[17rem] w-full flex justify-center items-center px-3 relative rounded-tl-[.8rem] rounded-tr-[.8rem]",
          "bg-gray-400"
        )}
      >
        <div
          className="flex justify-end items-center absolute top-0 left-0 w-full px-3 mt-2 cursor-pointer"
          onClick={handleFavouriteChange}
        >
          <span className="bg-[#a9a9a95a] p-1 rounded-full">
            <Star
              stroke={isFavourite ? "#fac55a" : "#f0f0f0"}
              fill={isFavourite ? "#fac55a" : "transparent"}
            />
          </span>
        </div>
        <img src={props.images[0]} alt="" className="h-[80%]" />
      </div>
      <div className="flex justify-between items-center mt-3 gap-3">
        <div className="mr-auto flex-1 overflow-ellipsis">
          <h3 className="font-bold text-gray-300 ">{props.name}</h3>
          <p className="text-sm text-gray-500">{props.price} USDC</p>
        </div>
        <button
          className="bg-white text-black px-6 py-2 rounded-[.5rem] text-sm"
          onClick={handleNavigate}
        >
          View
        </button>
      </div>
    </article>
  );
}
export default MerchCard;
