// function superbowlWin(record) {
//     const findWinningYear = record.find( record => record.result === 'W');
//     return findWinningYear ? findWinningYear.year : undefined;
// };



const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ]
  
  function superbowlWin(record) {
      const findWinningYear = record.find( record => record.result === 'W');
  
      if (findWinningYear) { 
          return (findWinningYear.year);
      } else {
          return (undefined);
      }
  }
  
  superbowlWin(record);