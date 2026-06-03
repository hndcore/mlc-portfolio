import CurrentFocusCard from "./components/CurrentFocusCard";
import CoverSection from "./components/CoverSection";
import SelectedWorkCard from "./components/SelectedWorkCard";
import StatsSection from "./components/StatsSection";
import { currentFocus, homeStats, selectedWork } from "./home.data";

const Home = () => {
  return (
    <main className="space-y-8">
      <CoverSection />
      <StatsSection stats={homeStats} />
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <CurrentFocusCard focus={currentFocus} />
        <SelectedWorkCard work={selectedWork} />
      </section>
    </main>
  );
};

export default Home;
