function superbowlWin(record){

    let found = record.find(({result}) => result ==="W");
    return found? found[`year`]:undefined
  }
