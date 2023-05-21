
let selectedLang, selectedRounds, selectedSpeed;

const selectLang = (lang) => {
  selectedLang = lang;
  console.log(selectedLang);
}

const selectRounds = (rounds) => {
  selectedRounds = rounds;

}

const selectSpeed = (speed) => {
  selectedSpeed = speed;
}

export {selectLang, selectedLang, selectRounds, selectedRounds, selectSpeed, selectedSpeed};
