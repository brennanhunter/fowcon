import type { Metadata } from 'next';
import DesignStyleQuiz from '@/app/components/quiz/DesignStyleQuiz';

export const metadata: Metadata = {
  title: 'Design Style Quiz',
  description:
    'Discover your interior design style with our free quiz. Modern, Traditional, Coastal, Farmhouse, Mid-Century Modern, Mediterranean, Industrial, or Bohemian — find your style and start planning your remodel with Fowcon Construction.',
  openGraph: {
    title: 'Design Style Quiz | Fowcon Construction',
    description:
      'Take our free quiz to discover your interior design style. Plan your next Tampa Bay remodeling project with confidence.',
    url: 'https://fowconinc.com/design-style-quiz',
  },
  alternates: {
    canonical: 'https://fowconinc.com/design-style-quiz',
  },
};

export default function DesignStyleQuizPage() {
  return (
    <div>
      <div className="bg-primary-blue py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What&apos;s Your Design Style?
          </h1>
          <p className="text-blue-100 text-lg">
            Answer 10 quick, fun questions and discover the interior style that fits you best.
            Your results will help guide your next remodeling project.
          </p>
        </div>
      </div>
      <DesignStyleQuiz />
    </div>
  );
}
