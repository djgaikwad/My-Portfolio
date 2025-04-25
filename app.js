var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings: ["Python Automation Engineer","Machine Learning Engineer","AI Engineer","Generative AI Enthusiast","Agentic AI Enthusiast"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})

const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // adjust this if needed
});

sections.forEach(section => {
    observer.observe(section);
});

(function () {
    // Create style tag for responsiveness
    const style = document.createElement('style');
    style.textContent = `
      footer.responsive-footer a:hover {
        color: white !important;
        text-decoration: underline !important;
      }
  
      @media (max-width: 600px) {
        footer.responsive-footer {
          font-size: 10px !important;
          padding: 8px !important;
          text-align: center !important;
          bottom: 0 !important;
        }
      }
  
      @media (min-width: 601px) {
        footer.responsive-footer {
          font-size: 12px !important;
        }
      }
    `;
    document.head.appendChild(style);
  
    // Create footer
    const footer = document.createElement('footer');
    footer.className = 'responsive-footer';
    // footer.style.position = 'fixed';
    // footer.style.bottom = '0';
    // footer.style.right = '5px';
    footer.style.width = '100%';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.marginLeft = '0px';
    footer.style.backgroundColor = '#222';
    footer.style.fontSize = '1px';
    footer.style.color = "rgba(255, 255, 255, 0.3)";
    footer.style.boxShadow = '0 -1px 5px rgba(0,0,0,0.1)';
    footer.innerHTML = `
      Made By 
      <a href="https://hridayesh-more-1605.netlify.app/" 
         target="_blank" 
         style="
           color: rgba(255, 255, 255, 0.3); 
           text-decoration: none; 
           transition: color 0.3s ease, text-decoration 0.3s ease;
        ">
        Hridayesh More
      </a> | 2025
    `;
    document.body.appendChild(footer);
  })();
  


const skillSections = document.querySelectorAll('.col');

const observerNew = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressLines = entry.target.querySelectorAll('.progress-line');
            progressLines.forEach(line => {
                const maxWidth = line.style.maxWidth;
                line.style.width = maxWidth;
            });

            // Optional: Stop observing after animation triggers
            observerNew.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3 // Adjust as needed
});

skillSections.forEach(section => {
    observerNew.observe(section);
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


new Swiper('.slider-card-wrapper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }


});

const boxes = document.querySelectorAll('.exp-box');

const observerExp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerExp.unobserve(entry.target); // Animate once
        }
    });
}, {
    threshold: 0.2
});

boxes.forEach(box => observerExp.observe(box));


const chatButton = document.getElementById("chat-button");
const chatBox = document.getElementById("chatbox");
const chatBody = document.getElementById("chat-body");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-question");

const predefinedAnswers = {
    "What do you work on as a AWS DevOps Intern ?": "I work on automating infrastructure with tools like Terraform and CloudFormation, managing deployments using CI/CD pipelines(GitHub Actions, Jenkins), and monitoring services using CloudWatch. I also assist in managing cloud resources on AWS like EC2, S3, IAM,VPC and Manymore.",
    "Can I see your projects?": "Absolutely! I've worked on projects like deploying a full-stack app using AWS EC2, setting up a CI/CD pipeline, and creating infrastructure with Terraform. You can check them out on my GitHub profile or LinkedIn portfolio",
    "How can I contact you?": "You can connect with me via LinkedIn, email me at hrushikeshbhopale419@gmail.com , or reach out through the contact form on my website.",
    "Do you do freelance work?": "Yes, I'm open to freelance projects, internships, or collaborations that align with cloud, DevOps, or automation & Full Stack Development. Let's connect and discuss how I can contribute!",
    // "What tools do you use in your DevOps workflow?": "I regularly work with AWS Services (EC2, S3, IAM, VPC), Docker, Git, GitHub Actions, CloudWatch, Terraform, and Linux. I'm also learning Kubernetes and improving my scripting with Bash & Python.",
    "What certifications do you have?": "I am certified in AWS Cloud Practitioner, Cloud Essentials, Well-Architected Proficient and currently preparing for AWS Solutions Architect Associate & AWS AI Practitioner. I also keep upskilling through platforms like AWS Skill Builder, Udemy, and hands-on labs.",
    "Are you open to job opportunities?": "Yes! I am actively looking for full-time opportunities, internships, or freelance roles in Cloud, DevOps, or Full Stack Development.",
    "Can you help with resume or LinkedIn optimization?": "Yes, apart from tech skills, I help peers with resume building, LinkedIn optimization, and career mentoring-especially for freshers and career-switchers entering the Cloud/DevOps space.",
    "Do you write blogs or create content?": "Yes, I create beginner-friendly content on AWS and DevOps. I also share my learnings and project walkthroughs on LinkedIn, and occasionally write tutorials on GitHub.",
    "What kind of projects have you worked on?": "EC2-based Web App Deployment 1)S3 static website hosting 2)Serverless Chat Application 3)Elastic Load Balancer With ASG 4)Dockerizing applications 5)Infrastructure-as-Code with Terraform 6)Monitoring with CloudWatch. 7)Data Visualization using AWS QuickSight."
};

const greetingKeywords = ["hi", "hello", "hey", "hii", "hola", "yo", "heyy"];

chatButton.addEventListener("click", () => {
    chatBox.style.display = (chatBox.style.display === "block") ? "none" : "block";
});

document.querySelectorAll(".chat-question").forEach(q => {
    q.addEventListener("click", () => {
        const question = q.textContent;
        addMessage("user", question);
        setTimeout(() => {
            addMessage("bot", predefinedAnswers[question]);
        }, 500);
    });
});

sendBtn.addEventListener("click", handleUserQuestion);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserQuestion();
});

function handleUserQuestion() {
    const question = userInput.value.trim();
    if (!question) return;
    addMessage("user", question);
    userInput.value = "";

    const lower = question.toLowerCase();

    if (greetingKeywords.some(greet => lower === greet)) {
        setTimeout(() => {
            addMessage("bot", "Hi there! Here's how I can help:");
            showPredefinedQuestions();
        }, 500);
        return;
    }

    setTimeout(() => {
        if (predefinedAnswers[question]) {
            addMessage("bot", predefinedAnswers[question]);
        } else {
            addMessage("bot", "Thanks for your question! For anything else, feel free to contact me at hrushikeshbhopale419@gmail.com or connect on LinkedIn.");
        }
    }, 600);
}

function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "chat-question" : "chat-answer";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// function showPredefinedQuestions() {
//     Object.keys(predefinedAnswers).forEach(qText => {
//         const qDiv = document.createElement("div");
//         qDiv.className = "chat-question";
//         qDiv.textContent = qText;
//         qDiv.addEventListener("click", () => {
//             addMessage("user", qText);
//             setTimeout(() => {
//                 addMessage("bot", predefinedAnswers[qText]);
//             }, 500);
//         });
//         chatBody.appendChild(qDiv);
//     });
//     chatBody.scrollTop = chatBody.scrollHeight;
// }

function showPredefinedQuestions() {
    // Clear previously shown questions to avoid duplication
    const existingQuestions = chatBody.querySelectorAll(".chat-question");
    existingQuestions.forEach(q => q.remove());

    // Loop through all predefined questions
    Object.keys(predefinedAnswers).forEach(qText => {
        const qDiv = document.createElement("div");
        qDiv.className = "chat-question";
        qDiv.textContent = qText;
        qDiv.addEventListener("click", () => {
            addMessage("user", qText);
            setTimeout(() => {
                addMessage("bot", predefinedAnswers[qText]);
            }, 500);
        });
        chatBody.appendChild(qDiv);
    });

    chatBody.scrollTop = chatBody.scrollHeight;
}


document.addEventListener("click", function (event) {
    const isClickInside = chatBox.contains(event.target) || chatButton.contains(event.target);
    if (!isClickInside) {
        chatBox.style.display = "none";
    }
});