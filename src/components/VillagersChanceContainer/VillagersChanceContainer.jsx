import React, { useContext } from "react";

import './VillagersChanceContainer.scss';
import { VillagersContext } from "../../context/Villagers";
import { ExclusionsContext } from "../../context/Exclusions";
import VillagerChanceField from "../VillagerChanceField/VillagerChanceField";
import { getMoveOutChances } from "../../utils/moveOutChances";

const VillagersChanceContainer = () => {
  const { villagers } = useContext(VillagersContext);
  const { exclusions } = useContext(ExclusionsContext);

  const [moveOutChancesA, moveOutChancesB] = getMoveOutChances(villagers, exclusions);

  return (
    <div className="VillagersChanceContainer">
      <h2>Step 3: friendship information and move out chances!</h2>
      <h4>Villagers with higher friendship are less likely to move, and villagers with lower friendship are more likely to move. Move-out chance is calculated using their average friendship with all island residents.</h4>
      <h3>HOW DO I KNOW WHAT FRIENDSHIP LEVEL I AM AT WITH MY VILLAGER?</h3>
      <h4>Make your best guess based on the information below. If you really don’t know, click unknown.</h4>
      <div className="VillagersChanceContainer__friendship-summary">
        <div>
          <h4><span>Level 1:</span> Base friendship level when villager first moves in.</h4>
          <h4><span>Level 2:</span> You can give them daily gifts!</h4>
          <h4><span>Level 3:</span> They can sell items to you, and they can give you a nickname.</h4>
          <h4><span>Level 4:</span> You can change their catchphrase.</h4>
          <h4><span>Level 5:</span> You can change their greeting, and you have a chance of obtaining their photo!</h4>
          <h4><span>Level 6:</span> They can approach you to buy items*.</h4>
          <div className="text-note">*Note: this is different from when they buy your items in a conversation. At level 6, they will run up to you to buy!</div>
        </div>
      </div>
      {
        villagers.map((villager, villagerIndex) => (
          <VillagerChanceField key={villager.id} villager={villager} villagerIndex={villagerIndex}
            moveOutChanceA={moveOutChancesA[villagerIndex]} moveOutChanceB={moveOutChancesB[villagerIndex]} />
        ))
      }
    </div>
  )
}

export default VillagersChanceContainer;