function calculateGrade() {
    try {
      const marksInput = prompt("Enter student marks (0-100):");
  
      const marks = parseFloat(marksInput);
  
      if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade;
  
        if (marks > 79) {
          grade = 'A';
        } else if (marks >= 60) {
          grade = 'B';
        } else if (marks >= 50) {
          grade = 'C';
        } else if (marks >= 40) {
          grade = 'D';
        } else {
          grade = 'E';
        }
        alert(`Grade: ${grade}`);
      } else {
        alert("Invalid input. Marks should be between 0 and 100.");
      }
    } catch (error) {
      alert("An error occurred. Please enter a numeric value for marks.");
    }
  }
  
  calculateGrade();