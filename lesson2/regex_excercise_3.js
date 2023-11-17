function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Test with data
console.log(formatNumberWithCommas(1000));      // Output: "1,000"
console.log(formatNumberWithCommas(10000.23));  // Output: "10,000.23"
console.log(formatNumberWithCommas(100000));    // Output: "100,000"