import SectionTitle from "@/lib/section-title";
import StoriesCard from "./stories-card";


const TopStories = () => {
  return (
    <div className="w-full bg-center mx-auto md:p-12 p-6 max-w-[1240px]">
      <div className=" flex flex-col items-center justify-center ">
        <SectionTitle title="Top Stories" />
        <h1 className=" text-[25px] lg:px-40 lg:w-1/2 p-2 mb-5 text-center ">
          Below are some of our top picks
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 space-y-3  ">
        <StoriesCard
          cardBody="Merch created "
          cardTitle="Store name"
          img="/Images/story-merch.svg"
          className="bg-[#1b1b1b] w-full flex flex-col  md:py-12 md:px- py-10 px-6 space-y-3 rounded-[15px]"
          url="#"
          price="283"
        />
        

        <StoriesCard
          cardBody="Merch created "
          cardTitle="Store name"
          img="/Images/story-merch.svg"
          url="#"
          className="bg-[#1b1b1b] w-full flex flex-col  md:py-12 md:px- py-10 px-6 space-y-3 rounded-[15px] mt-6"
          price="283"
        />
              
        <StoriesCard
          cardBody="Merch created "
          cardTitle="Store name"
          img="/Images/story-merch.svg"
          url="#"
          className="bg-[#1b1b1b] w-full flex flex-col  md:py-12 md:px- py-10 px-6 space-y-3 rounded-[15px]"
          price="283"
        />
      
      </div>
    </div>
  );
};

export default TopStories;
