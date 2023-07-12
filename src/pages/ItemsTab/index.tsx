import { useState } from "react";

import { styled } from "styled-components";
import { TabProps } from "../Home";
import { Foods } from "./Foods";
import { Drinks } from "./Drinks";
import { Snacks } from "./Snacks";
import { Sauce } from "./Sauce";

interface Props {
  tabs: TabProps[];
}

export const ItemsTab = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div>
        <TabContainer>
          {tabs.map((tab) => (
            <TabList
              className={`font-pop ${tab.id === activeTab ? "active" : ""}`}
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </TabList>
          ))}
        </TabContainer>
      </div>
      <div className="mt-14">
        {activeTab === "tab1" && <Foods />}
        {activeTab === "tab2" && <Drinks />}
        {activeTab === "tab3" && <Snacks />}
        {activeTab === "tab4" && <Sauce />}
      </div>
    </>
  );
};

export const TabContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 35px;
  padding-bottom: 8px;
  color: #9a9a9d;
  font-size: 17px;
  font-weight: 400;
  transition: 0.3s ease;

  &.active {
    color: #fa4a0c;
    border-bottom: 2px solid #fa4a0c;
  }
`;
