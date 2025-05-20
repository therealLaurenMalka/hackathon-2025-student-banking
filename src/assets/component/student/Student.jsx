import StoriesBar from "./StoriesBar";
import Current from "./Current";
import SpecialOffers from "./SpecialOffers";
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import LearnCompoundInterest from "./LearnCompoundInterest";
import NewsSection from "./NewsSection";
import IsraeliPodcasts from "./IsraeliPodcasts";
import RemainingBudget from "./RemainingBudget";
import AIAdvisorCTA from "./AIAdvisorCTA";

export default function Student() {
  return (
    <div className="flex flex-col items-center mt-10 px-4 sm:px-6">
      <StoriesBar />

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gray-600 drop-shadow-md">
          Poalim
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-red-500 drop-shadow-md">
          U
        </h1>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        מטעם בנק הפועלים עבור הסטודנטים
      </p>

      <div className="mt-4 inline-block bg-white px-5 py-2 rounded-full shadow text-sm font-medium text-gray-800 border border-gray-200">
        👤 גל לוי
      </div>

      <Current />
      <IsraeliPodcasts />
      <RemainingBudget />
      <NewsSection />
      <AIAdvisorCTA/>
      <SpecialOffers />
      <LearnCompoundInterest />
      {/* <CompoundInterestCalculator /> */}
    </div>
  );
}
