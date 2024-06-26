const inputField = document.querySelector('.inputField');
// input container
const main = document.querySelector('.main');
// output container
const output_container = document.querySelector('.output_container');
const printbtn=document.getElementById("print1");
// to track hide element
let hideElement = true;

// function to hide the element on button click
function hide() {
    // when input page is visible
    if (hideElement) {
        // hide input container
        main.style.display = "none";
        hideElement = false;

        // display preview container
        output_container.style.display = "block";
        printbtn.style.display="block";
        // inner html for preview container
        output_container.innerHTML = `
        <div class="output">
            <div class="heading">
                <h1>${inputField["name"].value}</h1>
                <h4>${inputField["title"].value}</h4>
            </div>
            <div class="info">
                <div class="left">
                    <div class="box">
                        <h2>Objective</h2>
                        <p>${inputField["objective"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Skills</h2>
                        <p>${inputField["skills"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Academic Details</h2>
                        <p>${inputField["academic_details"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Contact</h2>
                        <p>${inputField["contact"].value}</p>
                    </div>
                </div>
                <div class="right">
                    <div class="box">
                        <h2>Work Experience</h2>
                        <p>${inputField["work_experience"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Achievements</h2>
                        <p>${inputField["achievements"].value}</p>
                    </div>
                    <div class="box">
                        <h2>Projects</h2>
                        <p>${inputField["projects"].value}</p>
                    </div>
                </div>
            </div>
        </div>
      
        `
    } else {
        // show input container
        main.style.display = "block";
        hideElement = true;

        // hide preview container
        output_container.style.display = "none";
        output_container.innerHTML = "";
    }
}

// Function to print the resume
function printResume() {
    const printContent = document.querySelector('.output_container').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;

    // Reattach the onclick event to the button after restoring the original content
    document.querySelector('button').onclick = hide;

    
}
