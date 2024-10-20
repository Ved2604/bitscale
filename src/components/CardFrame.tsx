import TrialCard from "./TrialCard";
import GrowthCard from "./GrowthCard";
import EnterpriseCard from "./EnterpriseCard";
import BoosterCard from "./BoosterCard";

const CardFrame = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10 lg:mt-20">
      <TrialCard />
      <GrowthCard />
      <BoosterCard />
      <EnterpriseCard />
    </div>
  );
};

export default CardFrame;
