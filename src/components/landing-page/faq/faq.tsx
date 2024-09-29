import SectionTitle from "@/lib/section-title";

import Question from "./Question";

const Faq = () => {
	return (
		<div className='text-center justify-center items-center flex flex-col mt-12 p-3 max-w-[1240px] mx-auto w-full'>
			<SectionTitle title='FAQ' />
			<h1 className='font-manrope text-4xl text-center leading-[3.3rem]'>
				We've got answers to all your questions
			</h1>

			<div className=' md:p-3 p-2 md:w-3/4 w-full space-y-7 mt-5'>
				<Question
					question='What is your return policy?'
					answer='Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers, or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.'
				/>
				<Question
					question='How do I track my order?'
					answer='You can track your order using the tracking number provided in your shipment confirmation email. Simply enter the tracking number on our website under the "Track Order" section. If you have an account with us, you can also track your order status in your account dashboard. If you have any issues with tracking your order, please contact our customer support team for assistance.'
				/>
				<Question
					question='Do you ship internationally?'
					answer='Yes, we ship to over 200 countries worldwide. International shipping rates and delivery times vary depending on the destination country. Please note that international shipments may be subject to import taxes, customs duties, and fees levied by the destination country. These charges are the responsibility of the recipient. For more information on international shipping, please visit our shipping policy page or contact our customer support team.'
				/>
				<Question
					question='How can I contact customer support?'
					answer='You can contact our customer support via email at support@example.com or by phone at (123) 456-7890. Our customer support team is available Monday through Friday from 9 AM to 5 PM EST. You can also reach out to us through our live chat feature on our website or by filling out the contact form on our "Contact Us" page. We strive to respond to all inquiries within 24 hours.'
				/>
			</div>
		</div>
	);
};

export default Faq;
