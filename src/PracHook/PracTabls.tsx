import React, { useState } from "react";
import styled from "styled-components";

export const useTabs = (
  initialTab: number,
  allTabs?: { tab: string; content: string }[]
) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return {};
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: (num: number) => {
      setCurrentIndex(num);
    },
  };
};

export default function PracTabls() {
  const content = [
    {
      tab: "Section 1",
      content: "content1",
    },
    {
      tab: "Section 2",
      content: "content 2",
    },
  ];
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <WrapTabls>
      {content.map((section, l) => (
        <button
          key={section.tab}
          onClick={() => {
            if (changeItem) {
              changeItem(l);
            }
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem?.content}</div>
    </WrapTabls>
  );
}

const WrapTabls = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
`;
