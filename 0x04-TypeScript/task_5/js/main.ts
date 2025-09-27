// Interfaces with brand properties
interface MajorCredits {
  credits: number;
  _brand: "major"; // unique identifier
}

interface MinorCredits {
  credits: number;
  _brand: "minor"; // unique identifier
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major",
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor",
  };
}

// Example usage
const math: MajorCredits = { credits: 5, _brand: "major" };
const physics: MajorCredits = { credits: 3, _brand: "major" };
console.log(sumMajorCredits(math, physics)); // { credits: 8, _brand: 'major' }

const history: MinorCredits = { credits: 2, _brand: "minor" };
const art: MinorCredits = { credits: 4, _brand: "minor" };
console.log(sumMinorCredits(history, art)); // { credits: 6, _brand: 'minor' }
