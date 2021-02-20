import React, { useState, useEffect } from "react";
import axios from "axios";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({ language, text }) => {
  const [translations, setTranslations] = useState([]);
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    if (!text) {
      return "";
    }
    const timeoutId = setTimeout(() => setDebouncedText(text), 300);
    return () => clearTimeout(timeoutId);
  }, [language, text]);

  useEffect(() => {
    if (!debouncedText) {
      return "";
    }

    const decodeAsciiText = (text) => {
      return text.replace(/&#(\d+);/g, (m, n) => String.fromCharCode(n));
    };

    const translateText = async () => {
      const translationResponse = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            source: "en",
            key: "Google Translate API Key",
          },
        }
      );
      let translatedText = translationResponse.data.data.translations;
      translatedText = translatedText.map((text) =>
        decodeAsciiText(text.translatedText)
      );
      setTranslations(translatedText);
    };
    translateText();
  }, [language, debouncedText]);

  const renderedTranslations = translations.map((translation, index) => (
    <div key={index}>{translation}</div>
  ));
  return <div>{renderedTranslations}</div>;
};

export default Convert;
