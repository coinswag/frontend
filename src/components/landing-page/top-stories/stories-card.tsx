interface StoriesCardProps {
  img: string;
  cardTitle: string;
  cardBody: string;
  url: string;
  className: string;
  price: string;
}
const StoriesCard = ({
  img,
  url,
  cardTitle,
  cardBody,
  className,
  price,
}: StoriesCardProps) => {
  return (
    <div className={className} style={{ boxShadow: "0 1px 6px #00000005" }}>
      <div
        className="w-full text-center items-center mx-auto p-8 rounded-[7px] bg-[#9747FF]  ;
)]"
      >
        <img src={img} alt="merch " className="w-full text-center" />
      </div>
      <div className="">
        <h4 className="font-[700] text-xl text-[#ffffff]">{cardTitle}</h4>
      </div>
      <div>
        <p className=" leading-[1.6] font-[500] text-[#FFFFFFB2]">{cardBody}</p>
        <p className=" leading-[1.6] font-[500] text-[#FFFFFFB2]">{price}</p>
      </div>

      <div className="bottom-3 right-0 flex justify-end z-0">
        <a
          target={"_blank"}
          className=" bg-[#4F46E5] font-[700] text-white text-center px-4 py-2 rounded-[5px]"
          href={url}
        >
          View store
        </a>
      </div>
    </div>
  );
};

export default StoriesCard;
