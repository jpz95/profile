import { useEffect, useState } from "react";

// var TxtType = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   // add or remove text
//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 200 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//   delta = this.period;
//   this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//   this.isDeleting = false;
//   this.loopNum++;
//   delta = 500;
//   }

//   setTimeout(function() {
//   that.tick();
//   }, delta);
// };

interface Sentence {
  text: string
  period: number
}

/**
 * When typing out the sentence, we want to spend around 0.2s to type each letter.
 * When deleting, we want the letters to go away more quickly (because we messed up).
 * We add a little randomness to be more realistic.
 */
const getTypingDelay = (isDeleting: boolean): number => {
  const delay = 200 - Math.random() * 100;
  return isDeleting ? delay / 2 : delay;
}

const getNextTextToType = (currentText: string, isDeleting: boolean, sentence: Sentence): string => {
  const { text } = sentence;
  return isDeleting
    ? text.substring(0, currentText.length - 1)
    : text.substring(0, currentText.length + 1);;
}

export default function useTypeWriter(sentences: Sentence[]) {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const initialSentence = sentences[sentenceIndex];
  const [sentence, setSentence] = useState<Sentence>(initialSentence);
  
  useEffect(() => {
    const sentence = sentences[sentenceIndex];
    setSentence(sentence);
  }, [sentenceIndex])

  const [typeWriterDelay, setTypeWriterDelay] = useState(getTypingDelay(isDeleting));
  const [typeWriterText, setTypeWriterText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const isSentencedFullyTyped = !isDeleting && sentence.text === typeWriterText;
      const isSentencedFullyDeleted = isDeleting && typeWriterText === '';

      if (isSentencedFullyTyped) {
        // The delay before the text starts deleting itself
        setTypeWriterDelay(sentence.period);
        setIsDeleting(true);

      } else if (isSentencedFullyDeleted) {
        // Get next sentence
        const newIndex = (sentenceIndex + 1) % sentences.length;
        setSentenceIndex(newIndex);

        setTypeWriterDelay(getTypingDelay(false));
        setIsDeleting(false);

      } else {
        setTypeWriterDelay(getTypingDelay(isDeleting));
      }

      setTypeWriterText(getNextTextToType(typeWriterText, isDeleting, sentence));

    }, typeWriterDelay);

  }, [typeWriterText, isDeleting]);

  return typeWriterText;
}