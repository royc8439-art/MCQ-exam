document.addEventListener("DOMContentLoaded", () => {
    // --- Login Form Logic (for index.html) ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("studentName").value;
            const id = document.getElementById("studentId").value;
            const teacher = document.getElementById("teacherName").value;
            const password = document.getElementById("examPassword").value;

            if (password === "12345") {
                sessionStorage.setItem("studentName", name);
                window.location.href = "exam.html";
            } else {
                alert("Invalid exam password!");
            }
        });
    }

    // --- Exam Form Logic (for exam.html) ---
    const examForm = document.getElementById("examForm");
    if (examForm) {
        examForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let score = 0;

            // Question 1 check
            if (document.querySelector('input[name="q1"]:checked')?.value === "Paris") {
                score++;
            }

            // Question 2 check
            if (document.querySelector('input[name="q2"]:checked')?.value === "JavaScript") {
                score++;
            }

            // Redirect to result page with the score
            window.location.href = `result.html?score=${score}`;
        });
    }

});