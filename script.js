// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Function to expand personality bubbles and show modal with details
function expandBubble(trait) {
    const descriptions = {
        teamPlayer: "I thrive in collaborative environments and believe that we can achieve more together.",
        hardWorker: "I'm committed to my goals and persist through challenges until the job is done.",
        dependable: "You can count on me to deliver on my promises and maintain high standards of integrity.",
        problemSolver: "I love tackling complex problems with creative and efficient solutions.",
        adaptable: "I quickly adjust to new challenges and am always eager to learn and improve.",
        leader: "I take initiative, motivate teams, and help projects reach their full potential."
    };

    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modalText");
    const modalHeader = document.getElementById("modalHeader");

    if (modal && modalText && modalHeader) {
        modalHeader.textContent = trait.replace(/([A-Z])/g, ' $1').trim(); // Formats trait names
        modalText.textContent = descriptions[trait];

        modal.style.display = "block";
        modal.classList.add("fade-in");

        document.querySelector(".close").onclick = function() {
            modal.classList.remove("fade-in");
            setTimeout(() => modal.style.display = "none", 300);
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove("fade-in");
                setTimeout(() => modal.style.display = "none", 300);
            }
        };
    }
}

// Toggle job description visibility
function toggleJobDescription(id) {
    var element = document.getElementById(id);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

