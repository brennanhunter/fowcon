import type { Metadata } from 'next';
import DesignStyleQuiz from '@/app/components/quiz/DesignStyleQuiz';

export const metadata: Metadata = {
  title: 'Design Style Quiz | Fowcon Inc',
  description:
    'Discover your interior design style with our free quiz. Modern, Traditional, Coastal, Farmhouse, Mid-Century Modern, Mediterranean, Industrial, or Bohemian — find out which style fits you and start planning your remodel.',
};

export default function DesignStyleQuizPage() {
  return (
    <main>
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
    </main>
  );
}
