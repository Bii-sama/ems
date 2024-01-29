const getIds = (response, params, isBonus) => {
    return response
      .filter(item => {
        const bonusCheck = isBonus ? !item.isRepeating : true;
        return (
          item.date.getMonth() === params.month &&
          item.date.getFullYear() === params.year &&
          bonusCheck
        );
      })
      .map(item => item.id);
  };
  
  module.exports = getIds;
  

