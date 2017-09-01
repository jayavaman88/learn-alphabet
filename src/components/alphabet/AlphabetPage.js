import React from 'react';
import AlphabetCard from './AlphabetCard';

import styles from './styles.css';

const alphabetList = [
  { letter: 'ក',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ខ',
    audio: '../../assets/KA.m4a'
  },
  { letter: 'គ',
    audio: '../../assets/KO.m4a'
  },
  { letter: 'ឃ',
     audio: '../../assets/KHO.m4a'
  },
  { letter: 'ង',
    audio: '../../assets/NGO.m4a'
  },
  { letter: 'ច',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ឆ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ជ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ឈ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ញ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ដ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ឋ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ឌ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ឍ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ណ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ត',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ថ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ទ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ធ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ន',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ប',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ផ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ព',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ភ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ម',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'យ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'រ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ល',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'វ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ស',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ហ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'ឡ',
    audio: '../../assets/KAW.m4a'
  },
  { letter: 'អ',
    audio: '../../assets/KAW.m4a'
  },
]

class Alphabet extends React.Component{
  constructor(props){
    // Pass props back to parent
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      alphabetList: alphabetList,
    }
  }

  handleClick(path) {
    const sound = new Audio(path);
    sound.play();
  }

  render(){
    const alphabets = this.state.alphabetList;

    // return JSX
    return(
      <div>
        <h3>The Khmer Consonants</h3>
        <div className="alphabets-container">
          {alphabets.map((alphabet, id) => {
           return <AlphabetCard key={id} alphabet={alphabet.letter} handleClick={() => this.handleClick(alphabet.audio)}/>
          })}
        </div>
      </div>
    )
  }
}

export default Alphabet;
