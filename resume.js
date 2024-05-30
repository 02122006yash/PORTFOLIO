const container=document.querySelector(`.container2`);
const resumes=document.getElementById(`resume`);

resumes.addEventListener(`click`,()=>{
     resumes.style.backgroundColor=`red`;
     const resumecontent=`
     <div>
     <p>YASH CHATURVEDI</p>
     <p>Web Developer</p>
     <p>IGLAS ALIGARH UTTARPRADESH| +91 8077737879 | brahmanyash02@gmail.com</p>
     <p>CAREER SUMMARY:</p>
     <p>Solution-oriented and problem solver with 5 years of experience building and maintaining software and software architecture. Highly skilled in communication, collaboration, and technical documentation.</p>
     <p>&nbsp;</p>
     <p>Front-end and back-end web development Code structure and architecture Web performance optimization Programming languages</p>
     <p>EDUCATION:</p>
     <div>
     <p>BACHELOR OF COMPUTER APPLICATION</p>
     <p>2023 - 2025| ALIGARH COLLEGE OF ENGINEERING</p>
     </div>
     <p>SKILLS:</p>
     <div>
     <p>Front-end and back-end web development Code structure and architecture Web performance optimization Programming languages</p>
     </div>
     </div>`;

     container.innerHTML=resumecontent;
});