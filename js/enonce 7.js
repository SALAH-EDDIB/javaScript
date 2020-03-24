function rangeOfNumbers(startNum, endNum) {
    console.log(startNum)
    startNum++
    if (startNum <= endNum) {
        rangeOfNumbers(startNum, endNum)
    }
}