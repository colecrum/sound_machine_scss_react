//Variables------------------------------------

//sound bank 1
const bank1 = [
{
  id: "Clap",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/38[kb]909-Clap-1.wav.mp3",
  keyCode: 81,
  keyString: "Q" },

{
  id: "Crash",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/46[kb]909-Crash-HDA.wav.mp3",
  keyCode: 87,
  keyString: "W" },

{
  id: "Closed HH",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/3[kb]909-HiHatClosed-D0.wav.mp3",
  keyCode: 69,
  keyString: "E" },

{
  id: "Open HH",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/21[kb]909-HiHatOpen-D0.wav.mp3",
  keyCode: 65,
  keyString: "A" },

{
  id: "Hi Tom",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/20[kb]909-HiTom-0D0.wav.mp3",
  keyCode: 83,
  keyString: "S" },

{
  id: "Kick",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/24[kb]909-Kick-T0A0A7.wav.mp3",
  keyCode: 68,
  keyString: "D" },

{
  id: "Lo Tom",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/30[kb]909-LoTom-0D0.wav.mp3",
  keyCode: 90,
  keyString: "Z" },

{
  id: "Mid Tom",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/18[kb]909-MidTom-0D0.wav.mp3",
  keyCode: 88,
  keyString: "X" },

{
  id: "Snare",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/13[kb]909-Snare-T0T0SA.wav.mp3",
  keyCode: 67,
  keyString: "C" }];



//sound bank 2
const bank2 = [
{
  id: "Guitar-1",
  url: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/41[kb]mellow-guitar-chord-1.wav.mp3",
  keyCode: 81,
  keyString: "Q" },

{
  id: "Guitar-2",
  url: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/166[kb]mellow-guitar-chord-2.wav.mp3",
  keyCode: 87,
  keyString: "W" },

{
  id: "Guitar-3",
  url: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/23[kb]mellow-guitar-chord-3.wav.mp3",
  keyCode: 69,
  keyString: "E" },

{
  id: "Bass-1",
  url: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/BASS/Upright%20Bass%20Notes/175[kb]urbs18.aif.mp3",
  keyCode: 65,
  keyString: "A" },

{
  id: "Bass-2",
  url: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/BASS/Upright%20Bass%20Notes/106[kb]urbs19.aif.mp3",
  keyCode: 83,
  keyString: "S" },

{
  id: "Bass-3",
  url: "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/BASS/Upright%20Bass%20Notes/30[kb]urbs20.aif.mp3",
  keyCode: 68,
  keyString: "D" },

{
  id: "Kick Drum",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/14[kb]909-Kick-T0A0D3.wav.mp3",
  keyCode: 90,
  keyString: "Z" },

{
  id: "Closed-HH",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/11[kb]909-HiHatClosed-D6.wav.mp3",
  keyCode: 88,
  keyString: "X" },

{
  id: "Snare Drum",
  url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/909%20Extended/13[kb]909-Snare-T0T0SA.wav.mp3",
  keyCode: 67,
  keyString: "C" }];



const activePad = {
  backgroundColor: "blue",
  color: "white" };


const inactivePad = {
  backgroundColor: "black",
  color: "magenta" };


//Components ----------------------------------------

//DrumPad component
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactivePad };

    //Bindings
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  //Lifecycle Hooks
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  //Functions
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {//passed via PadGrid
      this.playSound();
      console.log(e.keyCode + " " + this.props.keyCode);
    }
  }
  activatePad() {
    if (this.state.padStyle.backgroundColor === "blue") {
      this.setState({
        padStyle: inactivePad });

    } else {
      this.setState({
        padStyle: activePad });

    }
  }
  playSound(e) {
    const sound = document.getElementById(this.props.keyString);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        id: this.props.clipId,
        onClick: this.playSound,
        className: "drum-pad",
        style: this.state.padStyle }, /*#__PURE__*/

      React.createElement("audio", { className: "clip", id: this.props.keyString, src: this.props.clipSource }),
      this.props.keyString));


  }}


//PadGrid component
class PadGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padGrid = this.props.currentPadGrid.map((item, i, arr) => {
      return /*#__PURE__*/(
        React.createElement(DrumPad, {
          clipId: arr[i].id,
          clipSource: arr[i].url,
          keyCode: arr[i].keyCode,
          keyString: arr[i].keyString,
          updateDisplay: this.props.updateDisplay }));


    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "padGrid" },
      padGrid));


  }}



//App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPadGrid: bank1,
      display: "" };

    //bindings
    this.displayClipName = this.displayClipName.bind(this);
    this.selectBank = this.selectBank.bind(this);
  }
  //functions
  displayClipName(name) {
    this.setState({
      display: name });

  }
  selectBank() {
    if (this.state.currentPadGrid === bank1) {
      this.setState({
        currentPadGrid: bank2,
        display: "Guitar Kit" });

    } else {
      this.setState({
        currentPadGrid: bank1,
        display: "Drum Kit" });

    }
  }
  render() {
    const bankSlider =
    this.state.currentPadGrid === bank1 ?
    {
      float: 'left' } :

    {
      float: 'right' };

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "drum-machine", className: "inner-container" }, /*#__PURE__*/
      React.createElement(PadGrid, {
        currentPadGrid: this.state.currentPadGrid,
        updateDisplay: this.displayClipName }), /*#__PURE__*/


      React.createElement("div", { className: "controls-container" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("p", { id: "display-cont" }, this.state.display)), /*#__PURE__*/

      React.createElement("div", { className: "control" }, /*#__PURE__*/
      React.createElement("p", null, "Bank"), /*#__PURE__*/
      React.createElement("div", { className: "select", onClick: this.selectBank }, /*#__PURE__*/
      React.createElement("div", { className: "inner", style: bankSlider }))))), /*#__PURE__*/






      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("hr", null), /*#__PURE__*/
      React.createElement("div", { id: "contact-section" }, "\xA0 \xA0 \xA0 ", /*#__PURE__*/
      React.createElement("section", { id: "contact", class: "container" }, /*#__PURE__*/
      React.createElement("h2", { id: "contact-title" }, "Designed & Coded by Cole Crum"), /*#__PURE__*/
      React.createElement("div", { class: "contact-links" }, /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "git-cont" }, /*#__PURE__*/
      React.createElement("a", { id: "profile-link", href: "https://github.com/colecrum?tab=repositories", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { id: "git-logo", class: "contact-img", src: "https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png", title: "GitHub" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "pen-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "https://codepen.io/colecrum", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png", title: "CodePen" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "mail-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "mailto:colemcrum@gmail.com", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://lh3.googleusercontent.com/VS3B_qhOFTYsdyNfnlr98zg3HNjB_Gcs9bxVnaQO9MysAoBOXMHATClhRviImKKJV8RV-0s7hl8KeVQcij5Iagb1exHzt40x679l8Q=w0", title: "Email" }))), /*#__PURE__*/
      React.createElement("div", { class: "link-cont", id: "phone-cont" }, /*#__PURE__*/
      React.createElement("a", { href: "tel:512-517-8503", target: "_blank", class: "btn contact-details" }, /*#__PURE__*/React.createElement("img", { class: "contact-img", src: "https://cdn4.iconfinder.com/data/icons/phones-colored/48/JD-32-512.png", title: "Phone" })))), "\xA0 \xA0 \xA0 "), "\xA0 \xA0 ")));







  }}





//DOM render
ReactDOM.render( /*#__PURE__*/
React.createElement(App, null), document.getElementById("root"));