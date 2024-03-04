// Dữ liệu sinh viên mẫu
const studentList1 = [
    { name: 'John Doe', totalParticipations: 10, completionRate: 80, averageScore: 75 },
    { name: 'Jane Doe', totalParticipations: 8, completionRate: 90, averageScore: 85 },
    { name: 'Bob Smith', totalParticipations: 12, completionRate: 70, averageScore: 65 }
];

let studentList=[]


function addStudent() {
    // Lấy thông tin từ người dùng
    const lname = prompt("Nhập họ sinh viên:");
    const name = prompt("Nhập tên sinh viên:");
    const totalParticipations = prompt("Nhập số lần tham gia của sinh viên:");
    const completionRate = prompt("Nhập tỉ lệ hoàn thành:");
    const averageScore = prompt("Nhập điểm trung bình:");

    // Tạo đối tượng câu hỏi
    const newStudent = {
        lname: lname,
        name: name,
        totalParticipations: totalParticipations,
        completionRate: completionRate,
        averageScore: averageScore
    };

    // Thêm câu hỏi vào mảng
    studentList.push(newStudent);

    // Hiển thị câu hỏi trong danh sách
    updateStudentTable();
}

function editStudent() {
    // Lấy chỉ mục của câu hỏi cần chỉnh sửa từ người dùng
    const indexToEdit = prompt("Nhập chỉ mục của sinh viên cần chỉnh sửa:")-1;

    // Kiểm tra xem chỉ mục có hợp lệ không
    if (indexToEdit >= 0 && indexToEdit < studentList.length) {
        // Lấy thông tin mới từ người dùng
        const lname = prompt("Nhập họ sinh viên:");
        const name = prompt("Nhập tên sinh viên:");
        const totalParticipations = prompt("Nhập số lần tham gia của sinh viên:");
        const completionRate = prompt("Nhập tỉ lệ hoàn thành:");
        const averageScore = prompt("Nhập điểm trung bình:");

        // Cập nhật thông tin câu hỏi
        studentList[indexToEdit].lname = lname;
        studentList[indexToEdit].name = name;
        studentList[indexToEdit].totalParticipations = totalParticipations;
        studentList[indexToEdit].completionRate = completionRate;
        studentList[indexToEdit].averageScore = averageScore;

        // Hiển thị danh sách câu hỏi sau khi chỉnh sửa
        updateStudentTable();
    } else {
        alert("Chỉ mục không hợp lệ.");
    }
}

function deleteStudent() {
    // Lấy chỉ mục của câu hỏi cần chỉnh sửa từ người dùng
    const indexToDelete = prompt("Nhập chỉ mục của sinh viên cần xoá:")-1;

    // Kiểm tra xem chỉ mục có hợp lệ không
    if (indexToDelete >= 0 && indexToDelete < studentList.length) {
        // Lấy thông tin mới từ người dùng
        
        studentList.splice(indexToDelete,1);

        // Hiển thị danh sách câu hỏi sau khi chỉnh sửa
        updateStudentTable();
    } else {
        alert("Chỉ mục không hợp lệ.");
    }
}

// Hàm cập nhật bảng danh sách sinh viên
function updateStudentTable() {
    const studentTableBody = document.querySelector('#studentTable tbody');
    studentTableBody.innerHTML = '';

    studentList.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.lname}</td>
            <td>${student.name}</td>
            <td>${student.totalParticipations}</td>
            <td>${student.completionRate}%</td>
            <td>${student.averageScore}</td>
        `;
        studentTableBody.appendChild(row);
    });
}

function findStudentTable() {
    const studentTableBody = document.querySelector('#studentTable1 tbody');
    studentTableBody.innerHTML = '';
    var cnt=0
    studentList.forEach(student => {
        var findName = document.getElementById('findName').value;
        if(student.name===findName){
            cnt=1
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.lname}</td>
                <td>${student.name}</td>
                <td>${student.totalParticipations}</td>
                <td>${student.completionRate}%</td>
                <td>${student.averageScore}</td>
            `;
            studentTableBody.appendChild(row);
        }
    if(cnt===0) alert("Không tìm thấy!")
    });
}

// Gọi hàm cập nhật khi trang được tải

