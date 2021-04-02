let pAeqLikelyToSurviveArr = [];

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  // Create factory function
  const pAequorFactory = (num, arr) => {
      return {
          specimenNum: num,
          dna: arr,
          mutate() {
            let randomBaseDNA = Math.floor(Math.random() * 15)
            let randomBase = returnRandBase()
            while(arr.randomBaseDNA === randomBase) {
              randomBase = returnRandBase()
            }
            this.dna[randomBaseDNA] = randomBase
            return this.dna
          },
          compareDNA(pAeqObj) {
            let count = 0;
            for(let i = 0; i < 15; i++) {
              for(let j = 0; j < 15; j++) {
                if (i === j && this.dna[i] === pAeqObj.dna[j]) {
                  count++;
                }
              }
            }
            console.log(`specimen #${this.specimenNum} and specimen #${pAeqObj.specimenNum} have ${Math.floor((count/15)*100)}% DNA in common.`)
          },
          willLikelySurvive() {
            let count = 0;
            for(const base of this.dna) {
              if(base === 'C' || base === 'G') {
                count++;
              }
            }
            if(Math.floor((count/15)*100) >= 60) {
              return true
            }
            return false;
        }
    }
};

for(let i = 1; i <= 30; i++) {
  let strand = mockUpStrand();
  let newpAeq = pAequorFactory(i,strand) 
  while(newpAeq.willLikelySurvive() === false) {
    newpAeq.dna = mockUpStrand()
  }
  pAeqLikelyToSurviveArr.push(newpAeq)
 
}
