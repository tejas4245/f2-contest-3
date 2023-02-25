const addRowBtn = document.querySelector('#add');
const table = document.querySelector('table');

const tableData = [
    {id: 0,
    student_name: '',
    student_roll: '',
    subject: '',
    marks:'',
    marked_by:'',
    save: ''}
]
function createSaveButton(){
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.classList.add('btn');
    return saveBtn;
}