function superbowlWin(record) {
    const result = record.find(record => record.result === "W");
    if(!result){
      return undefined
    }
    return result.year
  }