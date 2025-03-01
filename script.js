let button = document.getElementById('get-students-btn');
let tbody = document.querySelector('tbody');

function getStudents() {
   fetch('./fetch.json')
   .then(response => response.json())
   .then(data => {
      tbody.innerHTML = ''; 

      data.students.forEach(student => {
         let tr = document.createElement('tr');

         tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.skills.join(', ')}</td>
            <td>${student.email}</td>
            <td>${student.isEnrolled ? '✅' : '❌'}</td>
         `;

         tbody.appendChild(tr);
      });
   })
   .catch(error => console.error('Ошибка загрузки студентов:', error));
}

button.addEventListener('click', getStudents);
