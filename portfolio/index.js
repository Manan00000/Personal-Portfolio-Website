console.log("Script Running");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburg').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('nosidebar');
    if(document.querySelector('.sidebar').classList.contains('nosidebar'))
    {
    document.querySelector('.cross').style.display='none';
    setTimeout(()=>{
    document.querySelector('.ham').style.display='inline';
    },250)
    }
    else{
    document.querySelector('.ham').style.display='none';
    setTimeout(()=>{
    document.querySelector('.cross').style.display='inline';
    },350)
    }
})

const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");
resumeBtn.onclick = () => resumeModal.style.display = "flex";
closeResume.onclick = () => resumeModal.style.display = "none";

document.querySelector('.hidden').style.display='none';
document.querySelector('.h1').style.display='none';
document.querySelector('.h2').style.display='none';
document.querySelector('.h3').style.display='none';
const buttons = document.querySelectorAll('.sub-btn-primary');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    if (target.style.display === 'none' || target.style.display === '') {
      target.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      target.style.display = 'none';
      button.textContent = 'Read More';
    }
  });
});