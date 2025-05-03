import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@skinmama/components/ui/accordion';

export function QuestionAnswerSection() {
  const FAQS_QUESTION = [
    {
      question: 'What is Skin Insights?',
      answer:
        'Skin Insights by SkinMama is a personalized skincare guide. Our tool analyzes your skin and provides custom recommendations for healthier and radiant skin.',
    },
    {
      question: 'Is Skin Insights the right tool for me?',
      answer:
        "Yes, it helps you find your personalized day-time and night-time skincare routine, by just uploading a selfie. This skin analysis tool will help identify your skin's unique strengths as well as areas of focus and provide a full routine.",
    },
    {
      question: 'How to use Skin Insights?',
      answer:
        "Skin Insights is incredibly user-friendly. Simply capture a clear photo and let our tool analyze key areas like your forehead, crow's feet, and mouth. Experience the magic of personalized skincare.",
    },
    {
      question: 'How long does it take to use Skin Insights?',
      answer: 'Skin Insights doesn’t take more than five minutes to complete.',
    },

    {
      question: 'Do you have to download an app to use Skin Insights?',
      answer:
        'No, you do not have to download an app to use the tool since it is available on both SkinMama website and App. We recommend using the tool on your mobile device since you will need to take a selfie for better image quality.',
    },
    {
      question: 'Can I save my results?',
      answer:
        'If we have your consent & you provide SkinMama with your contact information, the results of the analysis (i.e., skin age, skin concerns scale), the skin report shown to you (i.e., skin analysis on key skin attributes), and all recommendations will be stored within your profile at SkinMama. Your results will also be emailed to you.',
    },
    {
      question: 'Is my picture stored?',
      answer:
        "Yes, SkinMama only briefly stores your selfie. But once the information is returned to you, your selfie is deleted from the central cloud-based hub (generally within seconds of the analysis's completion).",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white h-full flex items-center justify-center p-6">
      <div className="w-full max-w-3xl mx-auto rounded-xl shadow-md overflow-hidden">
        <div className="py-8 px-4 sm:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {FAQS_QUESTION.map((questions) => (
              <AccordionItem
                value={questions.question}
                className="border-b border-gray-200"
                key={questions.question}
              >
                <AccordionTrigger className="py-4 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  {questions.question}
                </AccordionTrigger>
                <AccordionContent className="py-3 text-gray-600">
                  {questions.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
