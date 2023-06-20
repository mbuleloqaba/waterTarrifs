function calculateWaterBill(litresUsed) {
    if (litresUsed <= 6000) {
      return 0;
    } else if (litresUsed > 6000 && litresUsed <= 10500) {
      let bill = (litresUsed - 6000) * 0.02238;
      return bill.toFixed(2);
    } else if (litresUsed > 10500 && litresUsed <= 35000) {
      let bill = (litresUsed - 10500) * 0.03797 + 294.56;
      return bill.toFixed(2);
    } else {
      let bill = (litresUsed - 35000) * 0.06976 + 1322.14;
      return bill.toFixed(2);
    }
  }
 //Used from The Full Stack Web & Software Engineering Hyperion Dev pdf resources "Beginner Control Structures — if, else, and else-if Statements"