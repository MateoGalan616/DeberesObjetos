import React, { useState } from 'react';

const ALPHABET_LENGTH = 26;

function isPangram(sentence: string): boolean {
  let charSet = new Set<string>();
  sentence = sentence.toLowerCase().replace(/[^a-z]/ig, '');
  const len = sentence.length;
  for (let i = 0; i < len; i++) {
    const ch = sentence.charAt(i);
    charSet.add(ch);
    
    if (charSet.size === ALPHABET_LENGTH)
      return true;  
  }
  
  return false;
}

function PangramChecker() {
  const [sentence, setSentence] = useState('');
  const [isPangramResult, setIsPangramResult] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
    setIsPangramResult(isPangram(event.target.value));
  }

  return (
    <div>
      <input type="text" value={sentence} onChange={handleInputChange} />
      <p>{isPangramResult ? 'La frase es un pangrama.' : 'La frase no es un pangrama.'}</p>
    </div>
  );
}

export default PangramChecker;
