function countVowels(inputString) {
    // Sử dụng hàm match 
    let vowels = inputString.match(/[aeiouAEIOU]/g);

    // Đếm số lượng nguyên âm
    if (!vowels) {
        return 0;
      }
    
      // Trả về số lượng nguyên âm tìm được
      return vowels.length;
    }

// Input với dữ liệu "United States"
let inputString = "United States";
let result = countVowels(inputString);
// Output = 5 
console.log("Output:", result); 