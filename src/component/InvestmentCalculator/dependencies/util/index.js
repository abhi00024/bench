export const inputText = [
    { text: "Initial Investment", type:"number"},
    { text: "Annual Investment", type:"number"},
    { text: "Expected Return", type:"number"},
    { text: "Duration", type:"number"},
  ];

  export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1, 
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue, 
        annualInvestment: annualInvestment 
      });
    }
  
    return annualData;
  }
  
  export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });