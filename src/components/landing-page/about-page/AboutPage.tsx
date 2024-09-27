import SectionTitle from "@/lib/section-title";

export default function AboutPage() {
  return (
    <div>
      <div className=" relative text-center justify-center items-center flex flex-col md:p-12 p-6">
        <SectionTitle title="About us" />
        <div className=" text-center md:w-3/4 w-full pt-1 mx-auto">
          <p className=" text-[18.5px]">
            COINSWAG is a web3 merchandise store that allows users to create
            templates We believe in the power of decentralized commerce and
            community-driven creativity users can pay for products using various
            cryptocurrencies. Explore our platform, design your templates, and
            experience the future of merchandise today!
          </p>
        </div>
      </div>
    </div>
  );
}
