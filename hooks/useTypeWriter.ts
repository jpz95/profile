import { useEffect, useState } from "react";

interface Sentence {
  text: string
  transitionDelay: number
}

/**
 * When typing out the sentence, we want to spend around 0.2s to type each letter.
 * When deleting, we want the letters to go away more quickly (because we messed up).
 * We add a little randomness to be more realistic.
 */
const getTypingDelay = (isDeleting: boolean): number => {
  const delay = 185 - Math.random() * 75;
  return isDeleting ? delay / 2 : delay;
}

/**
 * Gets the next letter for the typewriter.
 */
const getNextTextToType = (currentText: string, sentence: Sentence, isDeleting: boolean): string => {
  const { text } = sentence;
  return isDeleting
    ? text.substring(0, currentText.length - 1)
    : text.substring(0, currentText.length + 1);;
}

/**
 * Mimcs typing by incrementally getting larger (or smaller) parts of a sentence. When a sentence is completed,
 * it automatically starts deleting (after the given transition delay has passed).
 * @param sentences Sentences for the typewriter to type infinitely
 */
export default function useTypeWriter(sentences: Sentence[]) {
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const initialSentence = sentences[sentenceIndex];
  const [sentence, setSentence] = useState<Sentence>(initialSentence);
  
  useEffect(() => {
    const { text = '', transitionDelay = 2000 } = sentences[sentenceIndex];
    setSentence({ text, transitionDelay });
  }, [sentenceIndex])

  const [isDeleting, setIsDeleting] = useState(false);
  const [typeWriterDelay, setTypeWriterDelay] = useState(getTypingDelay(isDeleting));
  const [typeWriterText, setTypeWriterText] = useState('');

  useEffect(() => {
    const newHandler = setTimeout(() => {
      const isSentencedFullyTyped = !isDeleting && sentence.text === typeWriterText;
      const isSentencedFullyDeleted = isDeleting && typeWriterText === '';

      if (isSentencedFullyTyped) {
        // The delay before the text starts deleting itself
        setTypeWriterDelay(sentence.transitionDelay);
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

      setTypeWriterText(getNextTextToType(typeWriterText, sentence, isDeleting));

    }, typeWriterDelay);

    return function cleanUp() {
      clearTimeout(newHandler);
    }
  }, [typeWriterText, isDeleting]);

  return typeWriterText;
}