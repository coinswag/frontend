import SectionTitle from "@/lib/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="text-center justify-center items-center flex flex-col mt-12 p-3 max-w-[1240px] mx-auto w-full">
      <div className=" flex flex-col items-center justify-center ">
        <SectionTitle title="Top Stories" />
        <h1 className=" text-[25px] p-2 mb-5 text-center ">
          We've got the answer
        </h1>
      </div>

      <div className=" md:p-3 p-2 md:w-3/4 w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <div>
              <AccordionTrigger>
                <span className=" text-[16px]">
                  <img src="/Images/Help.svg" alt="" className=" inline" />
                  <span className=" text-[16px]">
                    Lorem ipsum dote Lorem ipsum test
                  </span>
                </span>
              </AccordionTrigger>
            </div>

            <AccordionContent>
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem
              ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem
              ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" md:p-3 p-2 md:w-3/4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className=" text-[16px]">
                <img src="/Images/Help.svg" alt="" className=" inline" />
                <span className=" text-[16px]">
                  Lorem ipsum dote Lorem ipsum test
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem
              ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem
              ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" md:p-3 p-2 md:w-3/4 w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className=" text-[16px]">
                <img src="/Images/Help.svg" alt="" className=" inline" />
                <span className=" text-[16px]">
                  Lorem ipsum dote Lorem ipsum test
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem
              ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem
              ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote
              Lorem ipsum dote Lorem ipsum dote Lorem ipsum dote Lorem ipsum
              dote Lorem ipsum dote
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
