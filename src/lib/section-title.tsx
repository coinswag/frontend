interface SectionTitle {
  title: string;
}

const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <div className=" flex flex-row">
      <img src="/Images/sparkle.svg" alt="sparkle" />
      <h1 className=" text-[20px] font-[700]">{title}</h1> 
      <img src="/Images/sparkle.svg" alt="sparkle" />
    </div>
  );
};

export default SectionTitle;
