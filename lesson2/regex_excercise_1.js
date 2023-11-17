// Biểu thức chính quy cho địa chỉ email
let emailRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Hàm kiểm tra địa chỉ email
let isValidEmail = function(email) {
    return emailRegex.test(email);
};

// Test with email
let testEmail = "kimtien15071997@email.com";
if (isValidEmail(testEmail)) {
    console.log(testEmail + " Is a valid email address");
} else {
    console.log(testEmail + " Is a not valid email address");
}
