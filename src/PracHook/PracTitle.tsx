import React, { useEffect, useState } from "react";

export const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    const titleTag = document.querySelector("title");
    if (titleTag) {
      titleTag.innerText = title;
    }
  }, [title]);
  return setTitle;
};

export default function PracTitle() {
  const updateTitle = useTitle("Loading...");
  return <div>PracTitle</div>;
}
