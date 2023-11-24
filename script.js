  // Your existing JavaScript code
  function toggleChat() {
    const openChatBtn = document.getElementById('openChatBtn');
    const chatPopup = document.getElementById('chatPopup');
    const noteMessage = document.getElementById('noteMessage');

    if (chatPopup.style.display === 'block') {
        // Chat is currently open, so close it
        chatPopup.style.display = 'none';
        noteMessage.style.display = 'block';

        // Automatically close the note message after 10 seconds
        setTimeout(() => {
            noteMessage.style.display = 'none';
        }, 10000);
    } else {
        // Chat is currently closed, so open it
        chatPopup.style.display = 'block';
        noteMessage.style.display = 'none';
    }
}




   
var string ="Welcome to your new home, where your wisdom and experience are cherished."
;
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 70); /* change 70 for speed */
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitQuestion();
    }
}









 
// ... (rest of your existing JavaScript code)

    const responses = {  "oldAgeMedicine": "As we age, our bodies may metabolize medications differently. It's important to inform your healthcare provider about all the medications you're taking, including over-the-counter drugs and supplements, to avoid potential interactions or side effects.",
  "medicationSafety": "Medication safety is crucial. Always follow your doctor's prescribed dosage and instructions, and use a pill organizer if needed to prevent missed doses.",
  "sideEffects": "Some medications may have side effects that can be more pronounced in older individuals. If you experience any unusual symptoms, contact your healthcare provider immediately.",
  "polypharmacy": "Polypharmacy, or taking multiple medications, can be common in older adults. Regular medication reviews with your doctor can help simplify your regimen and reduce the risk of adverse effects.",
  "vitaminSupplements": "While supplements can be helpful, it's best to get your vitamins and minerals from a balanced diet. Discuss with your healthcare provider if you need supplements.",
  "painManagement": "Effective pain management is essential. Your doctor can help you find the right treatment options, which may include physical therapy, medications, or other interventions.",
  "dietAndNutrition": "A balanced diet is vital for your overall health. It can help manage chronic conditions and provide the necessary nutrients. Consider consulting with a nutritionist for personalized advice.",
  "exerciseAndMobility": "Staying active can improve your mobility and overall well-being. Your doctor can recommend appropriate exercises and activities tailored to your age and physical condition.",
  "memoryLoss": "Mild memory changes are common as we age, but if you experience significant memory loss or cognitive decline, it's crucial to discuss it with your doctor for proper evaluation and guidance.",
  "fallsPrevention": "Falls are a leading cause of injuries among older adults. Discuss with your doctor about strategies to prevent falls, including exercise and home safety modifications.",
  "sleepQuality": "Quality sleep is essential for your health. If you have trouble sleeping, talk to your doctor about potential solutions or sleep disorders that may be affecting your rest.",
  "gastrointestinalHealth": "As we age, digestive issues can arise. Maintain a fiber-rich diet and stay hydrated. If you have concerns, consult your doctor for evaluation and advice.",
  "visionCare": "Regular eye check-ups are crucial for maintaining good vision. Age-related eye conditions like cataracts and glaucoma can be managed with timely intervention.",
  "hearingLoss": "Hearing loss is common in older age. A hearing evaluation can help determine if hearing aids or other solutions are necessary to improve your quality of life.",
  "dentureCare": "Proper denture care is essential to prevent oral health issues. Follow your dentist's instructions for cleaning and maintenance.",
  "incontinenceIssues": "Incontinence is a common concern among older adults. Discuss with your doctor for guidance on management and treatment options.",
  "arthritisManagement": "Arthritis can impact mobility and comfort. Your doctor can recommend treatments, exercise, and pain management strategies to help you stay active.",
  "diabetesManagement": "If you have diabetes, proper management is critical. Regular monitoring, medication, and a healthy lifestyle can help control blood sugar levels.",
  "heartHealth": "Heart health is vital. Your doctor can provide guidance on diet, exercise, and medications to manage conditions like hypertension or heart disease.",
  "osteoporosisPrevention": "Osteoporosis can increase the risk of fractures. Your doctor may recommend bone density scans and treatments to maintain bone health.",
  "pneumoniaVaccination": "Pneumonia vaccination is recommended for older adults. Consult with your healthcare provider to ensure you're up to date with your immunizations.",
  "cancerScreening": "Cancer screenings, such as mammograms and colonoscopies, are essential for early detection. Discuss your screening schedule with your doctor.",
  "breathingProblems": "Breathing issues can be concerning. If you experience shortness of breath, persistent cough, or other respiratory problems, consult your doctor.",
  "depressionAndAnxiety": "Mental health is as important as physical health. If you're struggling with depression or anxiety, your doctor can recommend therapy or medication options.",
  "vaccinationRecommendations": "Vaccinations against influenza, shingles, and other diseases are often recommended for older adults. Stay updated with your vaccines to protect your health.",
  "sexualHealth": "Maintaining sexual health is important. If you have concerns or questions, don't hesitate to discuss them with your healthcare provider.",
  "endOfLifePlanning": "End-of-life planning can provide peace of mind. You can discuss advanced directives, living wills, and your preferences with your doctor.",
  "medicationOrganization": "Managing multiple medications can be challenging. Ask your doctor or pharmacist about medication organization tools and techniques.",
  "mobilityAids": "Mobility aids like canes, walkers, or wheelchairs can improve your independence. Consult with your doctor or physical therapist to find the right solutions.",
  "homeSafety": "Safety modifications in your home, such as handrails and non-slip surfaces, can prevent accidents. Your doctor can recommend these changes if needed.",
  "travelSafety": "If you plan to travel, consult your doctor for recommendations and necessary vaccinations or medications for your destination.",
  "hormoneReplacement": "Hormone replacement therapy may be considered for specific conditions. Discuss the potential benefits and risks with your doctor.",
  "surgeryConsiderations": "If surgery is recommended, ensure you understand the procedure, risks, and expected outcomes. Discuss any concerns with your surgeon.",
  "cognitiveExercise": "Mental exercises and staying socially active can support cognitive health. Your doctor can recommend activities to keep your mind sharp.",
  "alternativeMedicine": "If you're considering alternative or complementary therapies, talk to your doctor to ensure they are safe and suitable for your health condition.",
  "supportNetwork": "Building a support network of family, friends, and community resources can provide emotional and practical assistance in your later years.",
  "respiteCare": "If you're a caregiver, consider respite care to prevent burnout. Your doctor can help you explore options for temporary relief.",
  "glaucoma": "I understand your concern about glaucoma. Glaucoma is a condition where the pressure inside the eye can damage the optic nerve, leading to vision loss. Regular eye check-ups are crucial, and we can discuss treatment options if needed.",
    "diabetes": "Managing diabetes is important for your overall health. We'll work on a treatment plan that includes monitoring blood sugar, a healthy diet, and possibly medications. Regular check-ups are essential.",
    "hypertension": "High blood pressure can increase the risk of heart disease. We'll monitor your blood pressure and discuss lifestyle changes and medications to keep it in check.",
    "arthritis": "Arthritis can affect your mobility and comfort. We'll explore pain management options, exercise, and lifestyle changes to improve your quality of life.",
    "osteoporosis": "Osteoporosis can make your bones more fragile. We can discuss bone health, calcium and vitamin D supplements, and exercises to prevent fractures.",
    "heartDisease": "Heart health is a top priority. We'll address your heart condition with medications, lifestyle changes, and regular check-ups to reduce the risk of complications.",
    "pneumonia": "Pneumonia can be serious, especially in older individuals. Stay up to date with vaccinations, and we can discuss ways to boost your immune system and lung health.",
    "cancer": "Cancer screenings are vital. We'll ensure you receive regular screenings for early detection, and discuss treatment options if necessary.",
    "depression": "Mental health is just as important as physical health. Let's explore counseling, therapy, or medication to help you cope with depression and anxiety.",
    "memoryLoss": "Mild memory changes can occur with age, but significant memory loss should be evaluated. We can perform cognitive assessments and discuss interventions to maintain cognitive function.",
    "painManagement": "Managing pain is a priority. We'll work on a pain management plan that may include medications, physical therapy, and other approaches to improve your comfort.",
    "visionCare": "Regular eye check-ups are essential. We can address age-related eye conditions, such as cataracts and macular degeneration, to maintain good vision.",
    "glaucoma": "I understand your concern about glaucoma. Glaucoma is a condition where the pressure inside the eye can damage the optic nerve, leading to vision loss. Regular eye check-ups are crucial, and we can discuss treatment options if needed.",
    "diabetes": "Managing diabetes is important for your overall health. We'll work on a treatment plan that includes monitoring blood sugar, a healthy diet, and possibly medications. Regular check-ups are essential.",
    "hypertension": "High blood pressure can increase the risk of heart disease. We'll monitor your blood pressure and discuss lifestyle changes and medications to keep it in check.",
    "arthritis": "Arthritis can affect your mobility and comfort. We'll explore pain management options, exercise, and lifestyle changes to improve your quality of life.",
    "osteoporosis": "Osteoporosis can make your bones more fragile. We can discuss bone health, calcium and vitamin D supplements, and exercises to prevent fractures.",
    "heartDisease": "Heart health is a top priority. We'll address your heart condition with medications, lifestyle changes, and regular check-ups to reduce the risk of complications.",
    "pneumonia": "Pneumonia can be serious, especially in older individuals. Stay up to date with vaccinations, and we can discuss ways to boost your immune system and lung health.",
    "cancer": "Cancer screenings are vital. We'll ensure you receive regular screenings for early detection, and discuss treatment options if necessary.",
    "depression": "Mental health is just as important as physical health. Let's explore counseling, therapy, or medication to help you cope with depression and anxiety.",
    "memoryLoss": "Mild memory changes can occur with age, but significant memory loss should be evaluated. We can perform cognitive assessments and discuss interventions to maintain cognitive function.",
    "painManagement": "Managing pain is a priority. We'll work on a pain management plan that may include medications, physical therapy, and other approaches to improve your comfort.",
    "visionCare": "Regular eye check-ups are essential. We can address age-related eye conditions, such as cataracts and macular degeneration, to maintain good vision.",
    "chronicObstructivePulmonaryDisease": "Chronic obstructive pulmonary disease (COPD) can affect your breathing. We'll discuss medications, breathing exercises, and lifestyle changes to manage the condition and improve your lung function.",
    "stroke": "If you're at risk of stroke, it's essential to control factors like blood pressure and cholesterol. We'll also discuss the warning signs of a stroke and what to do in case of an emergency.",
    "kidneyDisease": "Kidney disease can impact your overall health. We'll monitor kidney function and discuss dietary changes and medications to support kidney health.",
    "influenza": "Getting an annual flu shot is recommended for older adults. It can help protect you from severe flu symptoms and complications.",
    "rheumatoidArthritis": "Rheumatoid arthritis can be painful. We'll discuss medications, physical therapy, and joint protection strategies to manage the condition.",
    "parkinsonsDisease": "Parkinson's disease can affect movement and coordination. We'll explore medications and therapies to improve your quality of life.",
    "hypothyroidism": "Hypothyroidism can cause fatigue and other symptoms. We'll perform thyroid function tests and discuss hormone replacement therapy if necessary.",
    "oralHealth": "Oral health is vital. Regular dental check-ups and proper dental hygiene are essential to prevent dental problems and maintain overall well-being.",
    "macularDegeneration": "Macular degeneration is an age-related eye condition. We'll discuss treatment options to slow its progression and preserve your central vision.",
"hi":"hello hero",
"hello":"hi hero"
    };



    
    function generateBotResponse(userInput) {
    // Convert the user input to lowercase for case-insensitivity
    const lowerCaseInput = userInput.toLowerCase();

    // Check if the user input contains any grammar mistakes
    const hasGrammarMistake = /[^a-zA-Z0-9,.?!()\s]/.test(userInput);

    // If there is a grammar mistake, return the default response
    if (hasGrammarMistake) {
        return "I'm sorry there is a mistake in the question.";
    }

    // Initialize an array to store responses for multiple keywords
    const botResponses = [];

    // Search for keywords in the user input and collect responses
    for (const keyword in responses) {
        if (lowerCaseInput.includes(keyword)) {
            botResponses.push(responses[keyword]);
        }
    }

    // If no specific keyword found, provide a generic response
    if (botResponses.length === 0) {
        botResponses.push("I'm sorry, I don't have information on that topic. Please try another question.");
    }

    return botResponses.join("\n\n"); // Join the responses with newlines to display them separately
}

function appendToChat(userInput, botResponse) {
    const chatArea = document.getElementById('chatArea');

    // Create user and bot message containers
    const userMessageContainer = document.createElement('div');
    const botMessageContainer = document.createElement('div');

    // Create user and bot labels
    const userLabel = document.createElement('span');
    userLabel.textContent = 'You: ';
    userLabel.style.color = 'red';
    userLabel.style.fontSize = 'small';
    userLabel.style.fontStyle="bold";
    userLabel.style.textAlign="right";

    const botLabel = document.createElement('span');
    botLabel.textContent = 'Bot: ';
    botLabel.style.color = 'green';
    botLabel.style.fontSize = 'small';
    botLabel.style.margin= "13px";

    // Create user and bot messages
    const userMessage = document.createElement('p');
    const botMessage = document.createElement('p');

    // Set the text and styles for user and bot messages
    userMessage.textContent = userInput;
    userLabel.style.float="right";
    userLabel.style.fontWeight="bold";

    userMessage.style.float= 'right';
    userMessage.style.fontSize="15px";
    userMessage.style.fontFamily="sans-serif";
    userMessage.style.background="linear-gradient(to bottom, #f9f9f9, #d3d3d3)";
    userMessage.style.padding="8px";
    userMessage.style.borderRadius="5px";
    userMessage.style.borderRadius="fixed";

    botMessage.textContent = botResponse;
    botMessage.style.textAlign = 'left';
    botMessage.style.fontSize="15px";
    botMessage.style.padding="15px";
    botMessage.style.background="linear-gradient(to bottom, #0074D9, #3498DB)";
    botMessage.style.borderRadius="20px";
    userMessage.style.fontFamily="sans-serif";
    botLabel.style.fontWeight="bold";
    botLabel.style.marginTop="20px";
    // Create a new image element for the bot profile image
    const botProfileImg = document.createElement('img');
    botProfileImg.src = 'https://www.pngitem.com/pimgs/m/198-1985222_avatar-doctor-png-transparent-png.png';
    botProfileImg.style.borderRadius = '1px';
    botProfileImg.alt = 'Bot Profile';
    botProfileImg.width = 40;
    botProfileImg.height = 40;
    botProfileImg.style.marginTop="20px";


    // Append user label and message to user message container
    userMessageContainer.appendChild(userLabel);
    userMessageContainer.appendChild(userMessage);

    // Append bot label, profile image, and message to bot message container
    botMessageContainer.appendChild(botLabel);
    botMessageContainer.appendChild(botProfileImg);
    botMessageContainer.appendChild(botMessage);

    // Set classes for animations
    userMessageContainer.classList.add('fadeIn');
    botMessageContainer.classList.add('fadeIn');

    // Add the current answer above the past answer
    chatArea.appendChild(userMessageContainer);
    chatArea.appendChild(botMessageContainer);

    // Scroll to the bottom of the chat area to show the latest messages
    chatArea.scrollTop = chatArea.scrollHeight;

    
}


function submitQuestion() {
    const userInput = document.getElementById('userInput').value;
    const botResponse = generateBotResponse(userInput);

    appendToChat(userInput, botResponse);

    // Clear the input field after submission
    document.getElementById('userInput').value = '';
}
    