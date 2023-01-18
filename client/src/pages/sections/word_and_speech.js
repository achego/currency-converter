import { useEffect, useState } from "react";
import { IconMic } from "../../utils/app_icons";

const WordAndSpeech = ({ word }) => {
  const [letters, setletters] = useState("");

  const [isTyping, setisTyping] = useState(true);
  const [isSpeaking, setisSpeaking] = useState(false);
  const [lang, setlang] = useState("English");
  const [index, setIndex] = useState(0);
  const [isInit, setisInit] = useState(true);

  const speechController = new SpeechSynthesisUtterance();
  const synth = window.speechSynthesis;
  const voices = synth
    .getVoices()
    .map((voice) => <option key={voice.name}>{voice.name}</option>);

  useEffect(() => {
    if (index < word.length) {
      if (index < 0) {
        setletters("");
        setIndex(0);
        return;
      }
      setisInit(false);
      setisTyping(true);
      writeWords();
      return;
    }
    if (!isInit) {
      setIndex(-1);
    }
    setTimeout(() => {
      setisTyping(false);
    }, 50);
    //   setInterval()
  }, [word, letters]);

  const writeWords = () => {
    setTimeout(() => {
      setletters(letters + word[index]);
      setIndex(index + 1);
    }, 40);
  };

  const speak = () => {
    console.log(lang);
    const voice =
      synth.getVoices().filter((voice) => voice.name === lang)[0] ||
      synth.getVoices()[0];

      console.log(voice);
      console.log(synth.getVoices()[0]);
    setisSpeaking(true);
    speechController.text = word;
    speechController.voice = voice;

    speechController.onend = () => setisSpeaking(false);
    synth.speak(speechController);
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
              className="outline-none py-1 rounded bg-sprim-100 text-red-50"
              value={lang}
              onChange={(e) => setlang(e.target.value)}
            >
              {voices}
            </select>
          </div>
        )}
      </div>
      {/* <div>{voices}</div> */}
    </section>
  );
};

export default WordAndSpeech;
