// =====================================
// MOBILE MENU
// =====================================

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


document
    .querySelectorAll("#navigation a")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            navigation.classList.remove("open");

        });

    });



// =====================================
// TOAST
// =====================================

const toast =
    document.getElementById("toast");


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function() {

        toast.classList.remove("show");

    }, 3500);

}



// =====================================
// DEMO STATUS
// =====================================

const demoStatus =
    document.getElementById("demoStatus");

const demoMessage =
    document.getElementById("demoMessage");

const activityList =
    document.getElementById("activityList");



function addActivity(
    message,
    type = "green"
) {

    const item =
        document.createElement("div");

    item.className =
        "activity-item";


    item.innerHTML = `

        <span class="activity-dot ${type}">
            ●
        </span>

        <div>

            <strong>
                ${message}
            </strong>

            <small>
                NavRakshak Demo
            </small>

        </div>

        <time>
            Now
        </time>

    `;


    activityList.prepend(item);

}



// =====================================
// SOS FUNCTION
// =====================================

function activateSOS() {

    demoStatus.textContent =
        "SOS Alert Activated";

    demoMessage.textContent =
        "Emergency workflow started. Trusted contacts would be notified.";

    addActivity(
        "Emergency SOS activated",
        "orange"
    );

    showToast(
        "🚨 Demo SOS activated — no real alert was sent."
    );


    setTimeout(function() {

        demoStatus.textContent =
            "You're Safe";

        demoMessage.textContent =
            "Demo reset. Navrekha is connected and ready.";

    }, 5000);

}



// HERO SOS

const heroSOS =
    document.getElementById("heroSOS");


heroSOS.addEventListener(
    "click",
    activateSOS
);



// APP MOCKUP SOS

const mockSOS =
    document.getElementById("mockSOS");


mockSOS.addEventListener(
    "click",
    activateSOS
);



// DEMO DASHBOARD SOS

const demoSOS =
    document.getElementById("demoSOS");


demoSOS.addEventListener(
    "click",
    activateSOS
);



// =====================================
// NAVREKHA BAND SOS
// =====================================

const bandSOS =
    document.getElementById("bandSOS");


bandSOS.addEventListener(
    "click",
    function() {

        activateSOS();

        showToast(
            "⌚ Navrekha SOS triggered — demo only."
        );

    }
);



// =====================================
// LOCATION BUTTON
// =====================================

const locationButton =
    document.getElementById("locationButton");


locationButton.addEventListener(
    "click",
    function() {

        demoStatus.textContent =
            "Location Ready";

        demoMessage.textContent =
            "Demo location is prepared for sharing with trusted contacts.";

        addActivity(
            "Location sharing initiated",
            "green"
        );

        showToast(
            "📍 Demo location sharing activated."
        );

    }
);



// =====================================
// CALL BUTTON
// =====================================

const callButton =
    document.getElementById("callButton");


callButton.addEventListener(
    "click",
    function() {

        demoStatus.textContent =
            "Emergency Contact";

        demoMessage.textContent =
            "Demo call interface activated. No real call was placed.";

        addActivity(
            "Emergency contact selected",
            "green"
        );

        showToast(
            "📞 Demo call activated — no real call was made."
        );

    }
);



// =====================================
// ALERT BUTTON
// =====================================

const alertButton =
    document.getElementById("alertButton");


alertButton.addEventListener(
    "click",
    function() {

        demoStatus.textContent =
            "Safety Notification";

        demoMessage.textContent =
            "Test notification received successfully.";

        addActivity(
            "Safety notification received",
            "orange"
        );

        showToast(
            "🔔 Demo safety notification received."
        );

    }
);



// =====================================
// NAVBAR SCROLL
// =====================================

window.addEventListener(
    "scroll",
    function() {

        const navbar =
            document.querySelector(".navbar");


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,5,5,.97)";

        } else {

            navbar.style.background =
                "rgba(5,5,5,.9)";

        }

    }
);