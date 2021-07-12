function moodChecker(great) {
    if (great === "Happy") {
      return `${great} Good job,you are doing great!`;
    } else if (great === "Sad") {
      return `Every cloud has a silver lining`;
    } else if (typeof great === "number") {
      return ` Beep beep boop `;
    } else if(great === "emotions") {
      return ` I'm sorry,I'm still learning about feelings  :`;
    }
  }
  console.log(secondMatchesAmy("Sad"));