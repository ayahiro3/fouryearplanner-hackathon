function checkclasses() {
    if (APCSPcheck.checked) {
      for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].name === "Introduction to Computer Programming") {
          courseList[i].completed = true;
          break; // Stop searching after marking one course as completed
        }
      }
    }
  }
  
  nextButton.addEventListener("click", checkclasses)
  console.log(courseList[0].completed)
  
  