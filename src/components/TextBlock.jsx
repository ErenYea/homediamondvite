import React from "react";
import { useAppStore } from "../lib/store";
import { translations } from "../lib/constant";

const TextBlock = ({ section, element }) => {
  const { language } = useAppStore();
  const text =
    translations[language]?.[section]?.[element] ||
    translations.en[section][element] ||
    "Text not found";

  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TextBlock;
