// -------------------- Get Started Button --------------------
function showForm() {
    var formSection = document.getElementById("formSection");

    if (formSection) {
        formSection.style.display = "block";
        formSection.scrollIntoView({ behavior: "smooth" });
    }
}

// -------------------- Form Submission --------------------
var userForm = document.getElementById("userForm");

if (userForm) {
    userForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var goal = document.getElementById("goal").value;

        if (name === "" || goal === "") {
            alert("Please fill all required details 😊");
            return;
        }

        document.getElementById("welcomeText").innerText =
            "Hello " + name + "! 🌸 Here is your personalized wellness plan";

        var dietPlan = document.getElementById("dietPlan");
        var fitnessPlan = document.getElementById("fitnessPlan");

        dietPlan.innerHTML = "";
        fitnessPlan.innerHTML = "";

        if (goal === "loss") {
            dietPlan.innerHTML =
                "<li>Breakfast: Fruits & oats</li>" +
                "<li>Lunch: Vegetable salad</li>" +
                "<li>Snacks: Nuts</li>" +
                "<li>Dinner: Light soup</li>";

            fitnessPlan.innerHTML =
                "<li>Walking – 30 minutes</li>" +
                "<li>Yoga</li>" +
                "<li>Light cardio</li>";
        }
        else if (goal === "gain") {
            dietPlan.innerHTML =
                "<li>Breakfast: Milk & banana</li>" +
                "<li>Lunch: Rice, dal & vegetables</li>" +
                "<li>Snacks: Peanut butter sandwich</li>" +
                "<li>Dinner: Chapati & curry</li>";

            fitnessPlan.innerHTML =
                "<li>Strength exercises</li>" +
                "<li>Yoga</li>" +
                "<li>Stretching</li>";
        }
        else {
            dietPlan.innerHTML =
                "<li>Breakfast: Eggs or fruits</li>" +
                "<li>Lunch: Balanced meal</li>" +
                "<li>Snacks: Fruits</li>" +
                "<li>Dinner: Light home food</li>";

            fitnessPlan.innerHTML =
                "<li>Walking</li>" +
                "<li>Yoga</li>" +
                "<li>Stretching</li>";
        }

        document.getElementById("water").innerText =
            "💧 Drink at least 2–3 liters of water daily.";

        var resultSection = document.getElementById("resultSection");
        resultSection.style.display = "block";
        resultSection.scrollIntoView({ behavior: "smooth" });
    });
}

// -------------------- Reminders --------------------
function waterReminder() {
    alert("💧 Time to drink water!");
}

function exerciseReminder() {
    alert("🏃 Time for exercise!");
}

function mealReminder() {
    alert("🍽️ Time for a healthy meal!");
}
