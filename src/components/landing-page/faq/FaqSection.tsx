import SectionTitle from "@/lib/section-title";

import Question from "./Question";

const faqArray = [
	{
		question: "What makes Coinswag different?",
		answer:
			"Coinswag leverages Solana's blockchain to offer verifiable scarcity, token-gating, and native crypto payments for merchandise.",
	},
	{
		question: "How does Coinswag work?",
		answer:
			"Design products, set up blockchain-verified limited editions, and we handle production and global shipping. Earn royalties on every sale.",
	},
	{
		question: "Can I use my NFTs for merchandise?",
		answer:
			"Absolutely! Import your existing NFTs or use our intuitive design tools to create unique products.",
	},
	{
		question: "How are payments handled?",
		answer:
			"We accept both cryptocurrency and traditional fiat payments, enabling truly global transactions.",
	},
	{
		question: "What about order fulfillment?",
		answer:
			"Orders are automatically fulfilled through our global network, ensuring efficient delivery worldwide.",
	},
	{
		question: "Are there any special features for my community?",
		answer:
			"Yes! Create token-gated merchandise for exclusive access and integrate on-chain rewards with your existing tokenomics.",
	},
];

const Faq = () => {
	return (
		<div className='text-center justify-center items-center flex flex-col mt-12 p-3 max-w-[1240px] mx-auto w-full'>
			<SectionTitle title='FAQ' />
			<h1 className='font-manrope text-4xl text-center leading-[3.3rem]'>
				We've got answers to all your questions
			</h1>

			<div className=' md:p-3 p-2 md:w-3/4 w-full space-y-7 mt-5'>
				{faqArray.map((faq) => (
					<Question
						question={faq.question}
						answer={faq.answer}
					/>
				))}
			</div>
		</div>
	);
};

export default Faq;
