import React, { useState } from "react";

const NumerologyCalculator = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState("");
  const [letterChaldeanMap, setletterChaldeanMap] = useState("");
  const [calculateChaldeanSum, setcalculateChaldeanSum] = useState("");
  const [destinyNumber, setdestinyNumber] = useState("");
  const [destinyText, setdestinyText] = useState("");
  const [soulUrgeNumber, setsoulUrgeNumber] = useState("");
  const [soulText, setsoulText] = useState("");
  const [personalityNumber, setpersonalityNumber] = useState("");
  const [dreamText, setdreamText] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const resetForm = () => {
    setName("");
};

  const calculateNumerology = (name) => {
    const Destiny = [
      "According to Chaldean numerology, your Destiny/Expression number is 1. The Sun rules the number 1. The 1 means Leader, Independent, Creative. You are influenced by the qualities of planet Sun, like firmly determined, brave, and leadership qualities. You are an original thinker and originator of all actions. You have the quality to control everything around you. Sometimes, you become stubborn and angry when things do not happen according to your desires. You are a real and original thinker, creative, and dominant person. You may play a good role as an inventor, leader, explorer, and head of the family. Number one represents the card Magician - The Purpose.",

      "According to Chaldean numerology, your Destiny/Expression number is 2. The Moon rules the number 2. The 2 means Diplomat, Peacemaker, Sensitive.You are ruled and influenced by the planet Moon. Number 2 represents sensitivity, imagination and dream oriented nature. You are such a romantic and co-operative person that people want to live with you as people know you as a real peacemaker. You are a diplomat person of a dual personality. You are fond of music and may become a good singer. You love traveling and you love your home too. Many times, you have unknown fears in your life, so you adopt secretive behavior and hence people cannot judge your next move. The more energy of number two may make you shy, oversensitive and makes you a fantasy dreamer. The number two represents the card High Priestess – The Feminine.",

      "According to Chaldean numerology, your Destiny/Expression number is 3. Jupiter rules the number 3. The 3 means Creative, Entertainer, Ideal.You have the qualities of the planet Jupiter and you are influenced by Jupiter in your whole life. The person of number 3 is a social person who is creative, communicative and dramatic. The number 3 represents artistic talents, charismatic personality and cheerful behavior. You are a religious, truthful, highly educated or highly skilled person. You may become a great ideal for others. You love to travel and learn the new ways of joy and happiness. You trust in total freedom in every aspect of life, especially freedom of speech. You can become a good lawyer, artist, writer or publisher. Number three represents the card Empress - The Activity.",

      "According to Chaldean numerology, your Destiny/Expression number is 4. The Uranus or Rahu rule the number 4. The 4 means Secretive, Dependable, Practical.The Uranus or Rahu is known for the sudden and unexpected events in mysterious ways. The Uranus or Rahu influences you in your life. You face many unexpected events in life due to this. You are a practical person who believes in individualism, tolerance and originality. Secretive nature and unexpected behavior towards others are the main traits of number four. You always plan to make the foundation of the future with weird ideas. You are a systematic and trustworthy person. You have a long list of likes and dislikes, you should avoid stubbornness and rigid behavior towards others.Number four represents the card Emperor - The Overcoming.",

      "According to Chaldean numerology, your Destiny/Expression number is 5. Mercury rules the number 5. The 5 means Communicator, Restless, Versatile.You have the traits of the planet Mercury such as fast movement, versatile nature, communication skill and multi-talents. These qualities give you the opportunity to become a good salesperson, actor, writer, media and commercial post related to sales and communication. You are clever and can make quick responses or ideas for any problem. You love freedom, adventure, and work with high risk. Some of the people of number five are highly workaholic and restless, due to this, they may suffer from nerve related problems. Due to analytical nature, you disappoint the people who are close to you. Number five represents the card Hierophali - The Voice.",

      "According to Chaldean numerology, your Destiny/Expression number is 6. Venus rules the number 6. The 6 means Healer, Teacher, Counselor.  You are influenced by Venus, the planet of love, romance, beauty, art, and truth. So, you are a loving person with a romantic image. You strongly trust in truth, justice, and humanity. You are a born teacher and healer, who is always ready to help others with counseling skills. The person of number six is a divine lover and always stands for family and friends. You love luxury and harmony in life. Number six persons may become good singers, counselors, teachers, and they are good at art related works. Number six represents the card Lovers – The Path",

      "According to Chaldean numerology, your Destiny/Expression number is 7. Neptune or Ketu rules the number 7. The 7 means Spiritual, Investigator, Seeker.You are under the influence of Neptune or Ketu planet. This planet represents spirituality, philosophy and mystery. You always search for answers to questions, which you face in your life journey. The number 7 forces you to make illusions and delusions. You have a mysterious nature, you do dream a lot more than others. You always investigate the reason for the happenings. You often feel you are a gifted person with clairvoyance and intuition powers. You are an introverted person and often do not share your feelings and problems with others. The number seven represents the card Chariot - The Victory.",

      "According to Chaldean numerology, your Destiny/Expression number is 8. Saturn rules the number 8. The 8 means Game changer, Money maker, Manager.You are under the influence of the planet Saturn. This planet represents stability, true judgment and great responsibility. You have the born qualities to manage financial things and politics, indeed, the person with number eight may become a great business person or a leader and a game changer in the finance or politics world.",

      "According to Chaldean numerology, your Destiny/Expression number is 9. Mars rule number 9. The 9 means Courageous, Humanitarian, Aggressive.You are influenced by the qualities of planet Mars. You are an aggressive person, who is not afraid to take risks, a courageous person with the traits of humanity and kindness. You are always ready to help others when they need you. You get everything, what you are determined to get by taking any level of risk. You trust everyone and are often defeated by hidden enemies, although you cannot be defeated, if you know your enemies. Anger and impatience is a bad part of your nature. Number nine represents the card Hermit - The Light.",

      "According to Chaldean numerology, your Destiny/Expression number is 11. The Moon rules the number 11/2. The 11/2 means Highly sensitive, Spiritual, Secretive.The number 11 is a master number, and 2 stands for a single number. Both are ruled by the planet Moon. Because this number is called the master number, it means you have double and special powers with this number. It represents high sensitivity, spiritual and high imagination powers. You may become an intuitive and psychic person. Because of the Moon, you are very soft towards others and you blindly trust others, and in result, you often get treachery and hidden dangers from others. You have a very secretive nature and hence people cannot understand you easily. Number eleven represents the card Lion Muzzled.",

      "According to Chaldean numerology, your Destiny/Expression number is 22. The Uranus or Rahu rules the number 22/4. The 22/4 means Dreamer, Systematic, Illusionist.  The 22 is called the master number, the 4 is a single number, and both are influenced by Uranus/Rahu. Due to the planet's traits, you live in dreams. You have your own world of illusion, and are often awake after falling into danger. Unexpected events are the main traits of number 22, due to this you may face hidden enemies and hidden dangers which are always around you in your whole life. Although, the master number gives you more powers, like you are very trustworthy, a good manager, energetic, capable and systematic. You always plan for the future, but you should be cautious about future events because of your illusion nature.",

      "According to Chaldean numerology, your Destiny/Expression number is 33. Venus rules the number 33/6. The 33/6 means Healer, Teacher, Counselor. The 33 is known as the master number and the 6 is a single digit number, and both are ruled and influenced by the planet Venus. Due to the double power of the master number this is a fortunate digit. This is lucky for love matters, finance and money matters. You are a true and charming lover for your partner. You are overconfident, but a skilled and highly creative person too. Amazing teachers, counselors and healers are born with the 33 number.",
    ];
    const SoulArray = [
      "Your name does not contain a Soul Urge number.It doesn't mean that you don't have an inner personality. In the absence of a Soul Urge number, your outer personality will be visible in your inner personality. Simply put, your dream number's traits will show up for the Soul Urge number.",

      "According to the vowels in your name, Soul Urge number is 1. The 1 means Accomplisher and Desire for leadership. The number 1 is influenced by the Sun, the planet Sun gives you a deep desire to be the leader of family and others. You want respect and credit from the people surrounding you. You want and you can complete the work, as you are the best accomplishment person. You are a winner, when you are appreciated for what you are doing, because this fills you with lots of positivity and creativity.",

      "According to the vowels in your name, Soul Urge number is 2. The 2 means Peacemaker and Desire for love. The number 2 is influenced by the Moon, which gives you the inner quality of peacemaking, a born friendly and cooperative nature. You want everything to be easy going in any situation. You need a deep inner desire for love, peace and harmony.",

      "According to the vowels in your name, Soul Urge number is 3. The 3 means Cheerful and Artistic desire. The Soul urge number three is influenced by Jupiter, so your inner desire reflects the traits of Jupiter such as artistic talents, charismatic personality and cheerful behavior. You tend to be joyful for yourself and others. You have a strong desire to express yourself in an artistic manner. You have an inner desire to be the leader in any group surrounding you.",

      "According to the vowels in your name, Soul Urge number is 4. The 4 means Loyal and Desire for security. The heart desire number four is influenced by Uranus/Rahu, therefore your inner desire reflects the qualities of Uranus/Rahu. You have a strong desire to be safe for finance and the future. You always want respect for your loyalty and workmanship. Security and protection from everything is an inner need of you.",

      "According to the vowels in your name, Soul Urge number is 5. The 5 means Learner and Desire for freedom. Mercury influences the Soul Urge number five, so you have the strong inner desire for freedom in every aspect of life. You have a deep curiosity to know, learn and execute any work. This number tends to be adventurous with new and unusual things. You want change, either at your home or your workplace.",

      "According to the vowels in your name, Soul Urge number is 6. The 6 means Responsible and Desire for luxury. Venus influences the heart desire number 6, therefore you want to be an ideal person in the family. You have a deep affection and a sense of responsibility for your spouse and family. You are a good healer, nurturer and want to do more for people you love a lot. You have a desire for love, luxury life, and harmony.",

      "According to the vowels in your name, Soul Urge number is 7. The 7 means Intellectual and Desire for learning. The Soul Urge number 7 is influenced by Neptune/Ketu, therefore you have the great need to know and learn spiritual aspects. You have the desire to spend life with peace and comfort. You want to learn everything. You have a deep desire to obtain more wisdom to be a perfectionist and intellectual.",

      "According to the vowels in your name, Soul Urge number is 8. The 8 means Dependable and Desire for authority. Saturn influences this heart desire number 8, so you have a deep heart's desire to be the leader in a workplace or in a business. You want to secure the future and success in a financial manner. You want to be a powerful person with authority. In simple words, you need to be rich and a big boss in commercial projects.",

      "9-to serve humanity and the world with your knowledge and experiences without expecting anything. You tend to be a courageous person for taking risks.",

      "According to Chaldean numerology, your Destiny/Expression number is 11. The Moon rules the number 11/2. The 11/2 means Highly sensitive, Spiritual, Secretive.The number 11 is a master number, and 2 stands for a single number. Both are ruled by the planet Moon. Because this number is called the master number, it means you have double and special powers with this number. It represents high sensitivity, spiritual and high imagination powers. You may become an intuitive and psychic person. Because of the Moon, you are very soft towards others and you blindly trust others, and in result, you often get treachery and hidden dangers from others. You have a very secretive nature and hence people cannot understand you easily. Number eleven represents the card Lion Muzzled.",

      "According to the vowels in your name, Soul Urge number is 22. The 22/4 means Realistic and Desire for a safe future. The Soul Urge number 22 is known as the master number with traits of number 4, which is influenced by the Uranus/Rahu. Therefore, you have a strong desire for a safe and secure future. You want respect and love from family and friends. You tend to be a powerful person and realistic. You want to be an ambitious and confident persona and builder of the future.",

      "According to the vowels in your name, Soul Urge number is 33. The 33/6 means Responsible and Desire for luxury. The Heart Desire number 33 is known as the master number with traits of number 6, which is influenced by Venus. Therefore, you have a deep desire for luxury and love from family. You want to secure your family in a financial and health manner. You tend to be responsible for family and the work.",
    ];
    const DreamArray = [
      "Your name does not contain a Dream or Personality number. It doesn't mean that you don't have an outer personality. In the absence of a dream number, your inner personality will be visible in your outer personality. Simply put, your Soul Urge number's traits will show up for the dream number.",

      "According to the consonants in your name, your Dream/Personality number is 1. The 1 means Impressive as courageous, Daring and Aggressive. The dream number 1 is ruled by the Sun. So, your personality is influenced by the Sun. You tend to be confident, strong and independent. Your dream is to be a leader among the people. You present yourself as courageous, daring and aggressive during the first impression.",

      "According to the consonants in your name, your Dream/Personality number is 2. The 2 means Impressive as honest, Cooperative and Diplomatic. The personality number 2 is influenced by the Moon, therefore you present yourself as honest, cooperative and diplomatic. People get the first impression of you as a polite, gentle and peacemaker person. You drive yourself as an easy going person in any situation.",

      "According to the consonants in your name, your Dream/Personality number is 3. The 3 means Impressive as cheerful and Creative. This personality number 3 is ruled by Jupiter, so this planet's trait reflects on your personality. You present your first image as cheerful and creative with an entertainment sense. You want to be popular and appreciated due to your behavior in the world.",

      "According to the consonants in your name, your Dream/Personality number is 4. The 4 means Impressive as disciplined and Hard working. The dream number 4 is influenced by Uranus/Rahu. You want to be known as the great organizer, who can plan and execute in a predictable manner. You make the first image as a very disciplined and hard worker.",

      "According to the consonants in your name, your Dream/Personality number is 5. The 5 means Impressive as witty, Sensual and Curious. Mercury influences personality number 5. You present the first impression as witty, sensual and curious. You want to be free from everything, even from responsibilities. Although you are known for unusual daring to accomplish any work.",

      "According to the consonants in your name, your Dream/Personality number is 6. The 6 means Impressive as cosmic parents. Venus rules the inner dream number 6. Therefore, your personality is influenced by this planet, such as a highly responsible person for your own family and career. You are capable of drawing your image as a cosmic father or mother for those you love.",

      "According to the consonants in your name, your Dream/Personality number is 7. The 7 means Impressive as secretive and knowledgeable. The inner dream number 7 is influenced by Neptune/Ketu. Your first image is known as the stylish person, who is known as a secretive, but knowledgeable person too. You have the personality of an intelligent, mystic and spiritual person.",

      "According to the consonants in your name, your Dream/Personality number is 8. The 8 means Impressive as honest, Hard working and Positive. The personality number 8 is emphasized by Saturn. You are able to draw your picture as a successful administrator or a business person, who is an honest, hardworking and positive person. You have a great personality to attract people.",

      "According to the consonants in your name, your Dream/Personality number is 9. The 9 means Impressive as intellectual and humanitarian. The inner dream number 9 is under the dominance of Mars. You present your first impression as intellectual and real humanitarian. You are known for confidence, tolerance and courage with a magnetic personality.",

      "According to the consonants in your name, your Dream/Personality number is 11. The 11/2 means Impressive as spiritual and helping. The personality number 11 is a master number, which is influenced by the Moon. You are better known as cooperative and a pleasing personality. You present your first image as a spiritual and helping nature person.",

      "According to the consonants in your name, your Dream/Personality number is 22. The 22/4 means Impressive as a spiritual, Loyal and Honest person. The dream number 22 is a master number, which is ruled by Uranus/Rahu. You are able to make the first impression as a spiritual, loyal and honest person. You are known as an ambitious, confident and dreamer person.",

      "3According to the consonants in your name, your Dream/Personality number is 33. The 33/6 means Impressive as friendly, Responsible and Protective. The inner dream number 33 is a master number, which is influenced by Venus. You are able to draw your first image as a friendly, responsible and family person. You are known as a protective and spiritual person.",
    ];
    const chaldeanValues = {
      a: 1,
      i: 1,
      j: 1,
      q: 1,
      y: 1,
      b: 2,
      k: 2,
      r: 2,
      c: 3,
      g: 3,
      l: 3,
      s: 3,
      d: 4,
      m: 4,
      t: 4,
      e: 5,
      n: 5,
      h: 5,
      x: 5,
      u: 6,
      v: 6,
      w: 6,
      o: 7,
      z: 7,
      f: 8,
      p: 8,
    };
    function calculateChaldeanNumberSum(name) {
      let sum = 0;
      name = name.toLowerCase().replace(/[^a-z]/g, "");

      for (let char of name) {
        if (chaldeanValues[char]) {
          sum += chaldeanValues[char];
        }
      }

      return sum;
    }

    function getNumerologyNumber(name, filterFunc) {
      return name
        .toLowerCase()
        .split("")
        .filter(filterFunc)
        .reduce((sum, letter) => sum + (chaldeanValues[letter] || 0), 0);
    }

    function isVowel(char) {
      return "aeiou".includes(char);
    }

    function isConsonant(char) {
      return !isVowel(char) && "abcdefghijklmnopqrstuvwxyz".includes(char);
    }

    function getLetterChaldeanMapping(name) {
      let letterMap = [];
      name = name.toLowerCase().replace(/[^a-z]/g, "");

      for (let char of name) {
        if (chaldeanValues[char]) {
          letterMap.push(`${char.toUpperCase()}: ${chaldeanValues[char]}`);
        }
      }

      return letterMap.join(", ");
    }
    function reduceToSingleDigit(num) {
      if ([11, 22, 33].includes(num)) return num;
      while (num > 9) {
        num = num
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0);
      }
      return num;
    }
    setdestinyNumber(
      reduceToSingleDigit(
        getNumerologyNumber(name, (char) => char.trim() !== "")
      )
    );
    setsoulUrgeNumber(reduceToSingleDigit(getNumerologyNumber(name, isVowel)));
    setpersonalityNumber(
      reduceToSingleDigit(getNumerologyNumber(name, isConsonant))
    );
    setletterChaldeanMap(getLetterChaldeanMapping(name));

    function getDestinyNumberInterpretation(destinyNumber) {
      if (
        (destinyNumber >= 1 && destinyNumber <= 9) ||
        destinyNumber === 11 ||
        destinyNumber === 22 ||
        destinyNumber === 33
      ) {
        const index =
          destinyNumber === 11
            ? 9
            : destinyNumber === 22
            ? 10
            : destinyNumber === 33
            ? 11
            : destinyNumber - 1;
        return Destiny[index];
      } else {
        return "Invalid destiny number. Please enter a valid name.";
      }
    }

    function getSoulNumberInterpretation(soulUrgeNumber) {
      if (
        (soulUrgeNumber >= 0 && soulUrgeNumber <= 9) ||
        soulUrgeNumber === 11 ||
        soulUrgeNumber === 22 ||
        soulUrgeNumber === 33
      ) {
        const index =
          soulUrgeNumber === 11
            ? 9
            : soulUrgeNumber === 22
            ? 10
            : soulUrgeNumber === 33
            ? 11
            : soulUrgeNumber - 1;
        return SoulArray[index + 1];
      }
    }

    function getDreamNumberInterpretation(personalityNumber) {
      if (
        (personalityNumber >= 0 && personalityNumber <= 9) ||
        personalityNumber === 11 ||
        personalityNumber === 22 ||
        personalityNumber === 33
      ) {
        const index =
          personalityNumber === 11
            ? 9
            : personalityNumber === 22
            ? 10
            : personalityNumber === 33
            ? 11
            : personalityNumber - 1;
        return DreamArray[index + 1];
      }
    }

    setdestinyText(getDestinyNumberInterpretation(destinyNumber));
    setsoulText(getSoulNumberInterpretation(soulUrgeNumber));
    setdreamText(getDreamNumberInterpretation(personalityNumber));
    setcalculateChaldeanSum(calculateChaldeanNumberSum(name));

    const NumerologyReading = ({
      letterChaldeanMap,
      calculateChaldeanSum,
      destinyNumber,
      destinyText,
      soulUrgeNumber,
      soulText,
      personalityNumber,
      dreamText,
    }) => {
      return (
        <div>
          <p className="name">
            <span id="span">Chaldean Name Numerology Reading Of: </span>{" "}
            {letterChaldeanMap}
          </p>

          <p className="text-interpretation">
            Compound Name Number/Namank (Numerology Total of Your Name):
            <span id="number-design">{calculateChaldeanSum}</span>
          </p>

          <p className="text-interpretation">
            <span id="span">Destiny Number:</span> The Expression number, which
            describes who you are, and what you are, or what you become.
            <br />
            <br />
            <span id="span">Name Destiny/Expression Number or Namanak:</span>
            <span id="number-design">{destinyNumber}</span> <br />
            {destinyText}
          </p>

          <p className="text-interpretation">
            <span id="span">Soul Urge Number:</span> The Heart Desire number,
            which describes your inner potentials and inner resources.
            <br />
            <br />
            <span id="span">Soul Urge/Heart Desire Number:</span>
            <span id="number-design">{soulUrgeNumber}</span> <br />
            {soulText}
          </p>

          <p className="text-interpretation">
            <span id="span">Dream Number:</span> The Personality number which
            describes outer personality, indeed your first impression on others.
            <br />
            <br />
            <span id="span">Name Dream/Personality Number:</span>
            <span id="number-design">{personalityNumber}</span> <br />
            {dreamText}
          </p>
        </div>
      );
    };

    return (
      <NumerologyReading
        letterChaldeanMap={letterChaldeanMap}
        calculateChaldeanSum={calculateChaldeanSum}
        destinyNumber={destinyNumber}
        destinyText={destinyText}
        soulUrgeNumber={soulUrgeNumber}
        soulText={soulText}
        personalityNumber={personalityNumber}
        dreamText={dreamText}
      />
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newResults = calculateNumerology(name);
    setResults(newResults);
  };

  return (
    <>
      <div class="container">
        <div>
          <h2>
            Online Name Numerology Calculator - Prediction for Expression , Soul
            Urge and Personality Numbers
          </h2>
        </div>
        <div className="input-box">
          <div className="input-box-heading">
            <h1>Name number Numerology</h1>
          </div>
          <form onSubmit={handleSubmit} className="input-box-text">
            <label for="nameInput" className="input-label">
              Enter Your Name:
            </label>
            <input
              type="text"
              value={name}
              className="input-label"
              id="nameInput"
              onChange={handleNameChange}
              placeholder="Enter Name"
            />
            <div className="btn">
              <button type="submit">Calculate</button>
              <button type="button"  id="btn-reset" onClick={resetForm}>Reset</button>
            </div>
          </form>
        </div>
      </div>
      {results}
    </>
  );
};

export default NumerologyCalculator;
