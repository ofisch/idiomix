
let selectedLang, selectedRounds, selectedSpeed, selectedType;

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

const selectType = (type) => {
  selectedType = type;
}

export {selectLang, selectedLang, selectRounds, selectedRounds, selectSpeed, selectedSpeed, selectType, selectedType};
