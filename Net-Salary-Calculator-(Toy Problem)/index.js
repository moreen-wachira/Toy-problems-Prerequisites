function calculateNetSalary() {

    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter any additional benefits (if none, enter 0):"));
  
    const taxRate = 0.3; // 30% tax rate
    const nhifRate = 0.02; // 2% NHIF rate
    const nssfRate = 0.05; // 5% NSSF rate
  
    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax (Payee): ${tax}`);
    console.log(`NHIF Deductions: ${nhifDeduction}`);
    console.log(`NSSF Deductions: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  calculateNetSalary();