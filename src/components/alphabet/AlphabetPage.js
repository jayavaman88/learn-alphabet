import React from 'react';
import AlphabetCard from './AlphabetCard';

import styles from './styles.css';

var alphabetList = [
  { letter: 'ក',
    audio: '../../assets/KAW.mp3'
  },
  { letter: 'ខ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'គ',
    audio: '../../assets/KO.mp3'
  },
  { letter: 'ឃ',
     audio: '../../assets/KHO.mp3'
  },
  { letter: 'ង',
    audio: '../../assets/NGO.mp3'
  },
  { letter: 'ច',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ឆ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ជ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ឈ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ញ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ដ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ឋ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ឌ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ឍ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ណ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ត',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ថ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ទ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ធ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ន',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ប',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ផ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ព',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ភ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ម',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'យ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'រ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ល',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'វ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ស',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ហ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'ឡ',
    audio: '../../assets/KA.mp3'
  },
  { letter: 'អ',
    audio: '../../assets/KA.mp3'
  },
]

var player;

class Alphabet extends React.Component{

  constructor(props){
    // Pass props back to parent
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.loadedAudio = this.loadedAudio.bind(this);

    let loaded = 0;
    let soundFiles = alphabetList.map(function(alphabet) {
      return alphabet['audio'];
    });

    console.log('soundFiles', soundFiles);
    for (var i in soundFiles) {
      this.preloadAudio(soundFiles[i]);
    }

    this.state = {
      alphabetList: alphabetList,
      soundFiles: soundFiles,
      loaded: loaded,
      currentPlayedId: -1
    }
  }

  componentDidMount() {
    console.log('mounted');
    player = document.getElementById('player');
  }

  preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', this.loadedAudio, false);
    audio.src = url;
  }

  loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    // this.state.loaded++;
    console.log('state', this.state)
    let newLoaded = this.state.loaded + 1;

    this.setState({ loaded: newLoaded });

    console.log('loadedAudio', this.state.loaded);

    if (this.state.loaded == this.state.soundFiles.length){
      console.log('all has loaded');
      // all have loaded
    	// init();
    }
  }

  handleClick(path) {
    // const sound = new Audio(path);
    // sound.play();
    this.play(path)
  }

  play(path) {
    player.src = path;
    console.log('what am i playing', path);
    player.play();
  }

  playAll() {
    this.setState({ currentPlayedId: 0 });
    let soundFiles = this.state.soundFiles;
    // once the player ends, play the next one
    player.onended = () => {
      // this.state.currentPlayedId++;
      this.setState({ currentPlayedId: this.state.currentPlayedId + 1 || 0});
      if (this.state.currentPlayedId >= soundFiles.length) {
        // end
        return;
      }
      console.log('soundFiles[i]', soundFiles[this.state.currentPlayedId])
      this.play(soundFiles[this.state.currentPlayedId]);
    };
    // play the first file
    this.play(soundFiles[0]);
  }

  stop() {
    player.pause();
    player.onended = null;
    this.setState({ currentPlayedId: -1 });
  }

  randomize() {
    let randomAlphabet = this.state.alphabetList.slice();
    this.shuffle(randomAlphabet);

    let soundFiles = randomAlphabet.map(function(alphabet) {
      return alphabet['audio'];
    });

    this.setState({ 'alphabetList': randomAlphabet, soundFiles: soundFiles })
    console.log("alphabet", this.state.alphabetList)
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items The array containing the items.
   */
  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  isHighlighted(id, currentId) {
    console.log('highlight', currentId);

    if (id === currentId) {
      console.log('highlight');
      return 'highlight';
    }

    return '';
  }

  render(){
    const alphabets = this.state.alphabetList;

    // return JSX
    return(
      <div>
        <h3>The Khmer Consonants</h3>
        <audio id="player"></audio>
        <button onClick={() => this.playAll()}>Play all</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.randomize()}>Randomize</button>
        <div className="alphabets-container">
          {alphabets.map((alphabet, id) => {
            return <AlphabetCard key={id} alphabet={alphabet.letter} className={this.isHighlighted(id, this.state.currentPlayedId)} handleClick={() => this.handleClick(alphabet.audio)}/>
          })}
        </div>
      </div>
    )
  }
}

export default Alphabet;
