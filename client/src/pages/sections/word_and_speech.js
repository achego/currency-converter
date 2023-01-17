import React, { useEffect, useState } from "react";
import { IconMic } from "../../utils/app_icons";

const WordAndSpeech = ({ word = "Three Million, Four hundred" }) => {
  const [letters, setletters] = useState("");
  const [isTyping, setisTyping] = useState(true);
  const [isSpeaking, setisSpeaking] = useState(false);
  const [lang, setlang] = useState("English");

  const [index, setIndex] = useState(0);

  const speechController = new SpeechSynthesisUtterance();
  const synth = window.speechSynthesis;

  useEffect(() => {
    const writeWords = () => {
      setTimeout(() => {
        setletters(letters + word[index]);
        setIndex(index + 1);
      }, 40);
    };
    if (index < word.length) {
      writeWords();
      return;
    }
    setTimeout(() => {
      setisTyping(false);
    }, 700);
    //   setInterval()
  }, [index, word, letters]);

  const speak = () => {
    const voice =
      synth.getVoices().filter((voice) => voice.lang === getVoices(lang))[0] ||
      synth.getVoices()[0];
    setisSpeaking(true);
    speechController.text = word;
    speechController.voice = voice;
    console.log(synth.getVoices());
    for (const key of synth.getVoices()) {
      console.log(key.name);
      console.log(key.lang);
    }
    speechController.onend = () => setisSpeaking(false);
    synth.speak(speechController);
    console.log(speechController);
  };

  return (
    <section className="space-y-4 flex flex-col justify-between items-center pt-7 w-full px-9">
      <div className="text-sm md:text-base">{letters}</div>
      <div>
        {isTyping ? (
          <div className="border rounded-full border-r-transparent animate-spin h-5 w-5"></div>
        ) : (
          <div className="flex items-center space-x-3 anim_fade">
            <div
              onClick={speak}
              className="w-5 h-5 relative flex justify-center items-center"
            >
              <div
                className={`${
                  isSpeaking ? "animate-ping" : ""
                } absolute w-6 h-6 border rounded-full`}
              ></div>
              <IconMic />
            </div>
            <select
              className="text-black outline-none py-1 rounded bg-sprim-100 text-red-50"
              value={lang}
              onChange={(e) => setlang(e.target.value)}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Itallian</option>
              <option>French</option>
            </select>
          </div>
        )}
      </div>
    </section>
  );
};

export default WordAndSpeech;

const getVoices = (voice) => {
  switch (voice) {
    case "English":
      return "en-GB";
    case "Spanish":
      return "es-ES";
    case "Itallian":
      return "it-IT";
    case "French":
      return "fr-FR";
    case "Russian":
      return "ru-RU";

    default:
      return "en-GB";
  }
};
