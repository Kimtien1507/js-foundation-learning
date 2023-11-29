const data = [
  {
    studentName: "Tan",
    score: 7,
    priority: 2
  },
  {
    studentName: "Son",
    score: 5,
    priority: 1
  },
  {
    studentName: "Truong",
    score: 8,
    priority: 2
  },
  {
    studentName: "Luong",
    score: 7,
    priority: 2
  },
  {
    studentName: "Ha",
    score: 6,
    priority: 3
  },
  {
    studentName: "Dung",
    score: 9,
    priority: 2
  },
  {
    studentName: "Minh",
    score: 7,
    priority: 1
  },
  {
    studentName: "Dieu",
    score: 8,
    priority: 3
  }
];

// Sắp xếp mảng theo điểm số giảm dần và độ ưu tiên tăng dần
data.sort((a, b) => {
  if (b.score !== a.score) {
    return b.score - a.score;
  } else {
    return a.priority - b.priority;
  }
});

// In ra thông tin người có điểm số cao nhất và cao thứ 2
console.log(`First prize: ${data[0].studentName} - Score: ${data[0].score}, Second prize: ${data[1].studentName} - Score: ${data[1].score}`);
