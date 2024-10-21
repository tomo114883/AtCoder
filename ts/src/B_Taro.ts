type FamilyStructure = {
  familyId: number;
  gender: 'M' | 'F';
};

const taro = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const [n] = lines[0].split(/ /).map(Number);
  const familyStructure: FamilyStructure[] = lines.slice(1).map((line) => {
    const [familyId, gender] = line.split(/ /);
    return {
      familyId: parseInt(familyId),
      gender: gender as 'M' | 'F',
    };
  });

  // Create an array to determine whether each families have the eldest son.
  let isEldestSon: boolean[] = Array(n + 1).fill(false);
  let existence: string[] = [];

  // Determine whether the eldest son have already been born.
  const determineExistence = familyStructure.map((family) => {
    if (family.gender === 'M') {
      if (!isEldestSon[family.familyId]) {
        existence.push('Yes');
        isEldestSon[family.familyId] = true;
      } else {
        existence.push('No');
      }
    } else {
      existence.push('No');
    }
  });
  // Output ans as existence of the eldest sons in each family.
  console.log(existence.join('\n'));
};
taro(require('fs').readFileSync('/dev/stdin', 'utf8'));
