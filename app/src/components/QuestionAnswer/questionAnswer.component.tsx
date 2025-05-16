import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@skinmama/components/ui/accordion';

export function QuestionAnswerSection() {
  const FAQS_QUESTION = [
    {
      question: 'What is SkinMama?',
      answer:
        'SkinMama is an AI-powered skincare assistant that provides real-time skin analysis using your smartphone camera. It scans your face to detect concerns like acne, dryness, pigmentation, and more—instantly. Based on your unique skin profile, SkinMama offers personalized insights and product recommendations to help you make smarter, data-backed skincare choices.',
    },
    {
      question: 'Is SkinMama the right tool for me?',
      answer:
        'Absolutely—SkinMama is designed for anyone who wants to understand and care for their skin better. Whether you’re struggling with acne, dryness, dark spots, or just want a routine that actually works, SkinMama analyzes your skin in real time and gives you personalized guidance tailored to your needs. No matter your skin type, gender, or routine experience—SkinMama helps take the guesswork out of skincare.',
    },
    {
      question: 'How to use SkinMama?',
      answer:
        'Using SkinMama is simple. Just open the app and allow camera access. Then scan your face using your smartphone camera—no filters, just natural light. Our AI will instantly analyze your skin and provide personalized insights, product recommendations, and a custom skincare routine tailored to your needs. As your skin evolves, you can track your progress over time and adjust your routine accordingly. No guesswork, no complicated steps—just smarter skincare in seconds.',
    },
    {
      question: 'How long does it take to use SkinMama?',
      answer:
        'Just a few seconds. SkinMama scans and analyzes your skin in real time using your smartphone camera—no waiting, no lengthy setup. In under a minute, you’ll receive personalized insights, product recommendations, and your custom skincare routine. It’s quick, easy, and designed to fit seamlessly into your daily life.',
    },

    {
      question: 'Do I have to download an app to use SkinMama?',
      answer:
        'Yes, to use SkinMama, you’ll need to download the app to your smartphone. It’s available for iPhone users on the App Store. Once installed, you can access features like AI-powered skin scanning, personalized product recommendations, custom routines, and progress tracking—all directly from your device. The app is designed to be lightweight and user-friendly, making it easy to integrate into your daily skincare routine',
    },
    {
      question: 'Can I save my results?',
      answer:
        'Yes, SkinMama automatically saves your skin analysis results, progress, and personalized recommendations. All data is securely encrypted and stored, so you can track changes over time and revisit your insights whenever you need—your privacy and data safety are always a priority.',
    },
    {
      question: 'Is my picture stored?',
      answer:
        'No, your picture is not permanently stored. SkinMama uses your image solely for real-time analysis, and then securely discards it. We do not save, share, or upload your photos without your explicit consent. Your privacy is our priority, and all data handling is encrypted and aligned with industry best practices.',
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
