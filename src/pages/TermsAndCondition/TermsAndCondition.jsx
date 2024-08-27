import React from "react";
import { useAppStore } from "../../lib/store";
import TextBlock from "../../components/TextBlock";

const TermsAndCondition = () => {
  const { getText } = useAppStore();
  const formatText = (section, element, index, cond) => {
    const data = getText(section, element, index);
    // console.log(cond);
    if (cond) {
      return (
        <div>
          <span className="font-bold">{data.heading}: </span>
          <span dangerouslySetInnerHTML={{ __html: data.description }}></span>
        </div>
      );
    }
    return (
      <span
        dangerouslySetInnerHTML={{ __html: getText(section, element, index) }}
      ></span>
    );
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-auto mt-[100px] pb-[90px] gap-10">
      <div className="bg-[#63A8AE]  text-white transition-all subheading font-semibold text-xl lg:text-2xl w-full text-center py-2 ">
        <TextBlock section="terms" element={`title`} />
      </div>
      <div className="container max-w-[80%] max-h-[90%] rounded-lg text-lg bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] text-white flex flex-col gap-4 overflow-y-auto px-6 py-3">
        <div className="w-full container subheading ">
          {formatText("terms", "date")}
          {/* <TextBlock section={"terms"} element={"date"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "description")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading1"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "subdescription1")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading2"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("terms", "subdescription2bullets", 0)}</li>
            <li>{formatText("terms", "subdescription2bullets", 1)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading3"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("terms", "subdescription3bullets", 0)}</li>
            <li>{formatText("terms", "subdescription3bullets", 1)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading4"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("terms", "subdescription4bullets", 0)}</li>
            <li>{formatText("terms", "subdescription4bullets", 1)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading5"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "subdescription5")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading6"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "subdescription6")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading7"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "subdescription7")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading8"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "subdescription8")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>

        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"terms"} element={"subheading9"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("terms", "subdescription9")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
