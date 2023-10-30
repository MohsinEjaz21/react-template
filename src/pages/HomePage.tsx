import classNames from 'classnames';
import { useState } from 'react';
import style from './HomePage.module.scss';
export const HomePage = () => {
  const [keyword, setKeyword] = useState<String>('');
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const keywords = [
    'Alfa',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Golf',
    'Hotel',
    'India',
    'Juliett',
    'Kilo',
    'Lima',
    'Mike',
    'November',
    'Oscar',
    'Papa',
    'Quebec',
    'Romeo',
    'Sierra',
    'Tango',
    'Uniform',
    'Victor',
    'Whiskey',
    'X-ray',
    'Yankee',
    'Zulu',
  ]

  const handleKeywordChange = (event) => {
    const value = event.target.value;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      filterWords(value);
    }, 500);
    setTimeoutId(newTimeoutId);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }

  const filterWords = (keyword) => {
    setKeyword(keyword);
  }



  return (
    <div className={style.container}>
      <textarea className={style.textarea} onChange={handleKeywordChange} />
      {
        keywords.map((item, index) => {
          return (
            <div key={index} className={classNames(style.item, {
              [style.item__highlight]: item.toLowerCase().trim().includes(keyword.toLowerCase().trim())
            })}>
              {item}
            </div>
          )
        })
      }
    </div>
  );
}
