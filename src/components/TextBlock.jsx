import React from "react";
import { useAppStore } from "../lib/store";
import { translations } from "../lib/constant";

const TextBlock = ({ section, element }) => {
  const { language } = useAppStore();
  return (
    translations[language]?.[section]?.[element] ||
    translations.en[section][element] ||
    "Text not found"
  );
};

export default TextBlock;
