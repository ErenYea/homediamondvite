import React, { useEffect } from "react";
import { useAppStore } from "../../lib/store";
import TextBlock from "../../components/TextBlock";

const PrivacyPage = () => {
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
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  useEffect(() => {
    scrolltoContainer();
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-auto mt-[100px] pb-[90px] gap-10">
      <div className="bg-[#63A8AE]  text-white transition-all subheading font-semibold text-xl lg:text-2xl w-full text-center py-2 ">
        <TextBlock section="privacy" element={`title`} />
      </div>
      <div className="container max-w-[80%] max-h-[90%] rounded-lg text-lg bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] text-white flex flex-col gap-4 overflow-y-auto px-6 py-3">
        <div className="w-full container subheading ">
          <TextBlock section={"privacy"} element={"date"} />
        </div>
        <div className="w-full subheading container !font-bold !text-2xl">
          <TextBlock section={"privacy"} element={"heading"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "description")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading1"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription1")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading2"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription2")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("privacy", "subdescription2bullets", 0)}</li>
            <li>{formatText("privacy", "subdescription2bullets", 1)}</li>
            <li>{formatText("privacy", "subdescription2bullets", 2)}</li>
            <li>{formatText("privacy", "subdescription2bullets", 3)}</li>
            <li>{formatText("privacy", "subdescription2bullets", 4)}</li>
            <li>{formatText("privacy", "subdescription2bullets", 5)}</li>
            <li>{formatText("privacy", "subdescription2bullets", 6)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading3"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription3")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading4"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription4")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("privacy", "subdescription4bullets", 0, true)}</li>
            <li>{formatText("privacy", "subdescription4bullets", 1, true)}</li>
            <li>{formatText("privacy", "subdescription4bullets", 2, true)}</li>
            <li>{formatText("privacy", "subdescription4bullets", 3, true)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading5"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription5")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("privacy", "subdescription5bullets", 0)}</li>
            <li>{formatText("privacy", "subdescription5bullets", 1)}</li>
            <li>{formatText("privacy", "subdescription5bullets", 2)}</li>
            <li>{formatText("privacy", "subdescription5bullets", 3)}</li>
            <li>{formatText("privacy", "subdescription5bullets", 4)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription5remaining")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading6"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription6")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading7"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription7")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("privacy", "subdescription7bullets", 0)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 1)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 2)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 3)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 4)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 5)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 6)}</li>
            <li>{formatText("privacy", "subdescription7bullets", 7)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading8"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription8")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          <ul className=" list-disc mx-auto max-w-5xl space-y-3">
            <li>{formatText("privacy", "subdescription8bullets", 0)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 1)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 2)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 3)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 4)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 5)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 6)}</li>
            <li>{formatText("privacy", "subdescription8bullets", 7)}</li>
          </ul>

          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription8remaining")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading9"} />
        </div>
        <div className="w-full subheading px-6 !font-semibold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading9heading1"} />
        </div>
        <div className="w-full tracking-wider px-6  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subheading9heading1description")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading px-6 !font-semibold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading9heading2"} />
        </div>
        <div className="w-full tracking-wider px-6 text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subheading9heading2description")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading px-6 !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading10"} />
        </div>
        <div className="w-full tracking-wider px-6 text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription10")}
          {/* <TextBlock section={"privacy"} element={"description"} /> */}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading11"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription11")}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading12"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription12")}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading13"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription13")}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading14"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription14")}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading15"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription15")}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading16"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription16")}
        </div>
        <div className="w-full subheading !font-bold container !text-2xl">
          <TextBlock section={"privacy"} element={"subheading17"} />
        </div>
        <div className="w-full tracking-wider  text-justify container break-words  whitespace-pre-line leading-relaxed">
          {formatText("privacy", "subdescription17")}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
