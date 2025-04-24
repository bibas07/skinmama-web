import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@skinmama/components/ui/accordion';

export function QuestionAnswerSection() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white max-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden">
        <div className="py-8 px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="py-3 text-gray-600">
                Yes. It adheres to the WAI-ARIA design pattern, ensuring its
                fully accessible for all users.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className="py-3 text-gray-600">
                Yes. It comes with default styles that match the other
                components aesthetic, with smooth transitions and consistent
                spacing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="py-3 text-gray-600">
                Yes. Its animated by default, providing a smooth and engaging
                user experience, but you can disable animations if you prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Can I customize it further?
              </AccordionTrigger>
              <AccordionContent className="py-3 text-gray-600">
                Absolutely! The component is highly customizable. You can adjust
                colors, spacing, animations, and more to match your specific
                design requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
