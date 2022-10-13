
const calcArea = document.querySelector("textarea");

const addNums = text => {
    let { value } = calcArea;
    
    // This make sure that 0 and dot should not be added
    const ruleA = value.length === 0 && text === ".";

    // if ruleA is not true;
    if(!ruleA) {
      calcArea.value += text;
    }
}