const questions = [
    {
        question: "Q1/12: Đồng nghiệp của bạn cãi nhau với sếp thì bạn sẽ cảm thấy thế nào?",
        image: "images/1.png",
        answers: {
            T: {
                text: "Khuyên bạn nên nghỉ việc rồi ra về.",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Vào cãi nhau cùng với sếp luôn thui.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q2/12: Sau một ngày làm việc dài với hàng tá drama, bạn quyết định đi xem xiếc. Bạn muốn đi với ai?",
        image: "images/2.png",
        answers: {
            E: {
                text: "Đi với bạn bè",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "Đi một mình thui",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q3/12: Trước khi đi xem xiếc, bạn chuẩn bị như thế nào?",
        image: "images/3.png",
        answers: {
            J: {
                text: "Kiểm tra kỹ vé, sắp xếp lịch trình và đến sớm để đảm bảo có chỗ ngồi tốt.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Vé đâu rồi nhỉ? Có lẽ mua thêm ít bắp rang và xúc xích trên đường đi, tới nơi rồi tính tiếp hihi.",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q4/12: Bạn được phát một bản đồ nhỏ hướng dẫn lối đi trong rạp xiếc. Bạn sẽ làm gì?",
        image: "images/4.png",
        answers: {
            J: {
                text: "Làm theo bản đồ từ A đến Z để không bỏ sót chỗ nào.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Quẳng bản đồ sang một bên và tự khám phá theo cách của mình.",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q5/12: Bạn thấy quầy đồ ăn và bán “Bánh mì trí nhớ” và “Kẹo quay ngược thời gian”. Bạn sẽ chọn cái nào?",
        image: "images/5.png",
        answers: {
            F: {
                text: "Bánh mì trí nhớ",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "Kẹo quay ngược thời gian",
                scores: { F: 0, T: +1 },
            },
        },
    },
    {
        question: "Q6/12: Bạn đang xếp hàng mua đồ ăn và thấy người phục vụ vô tình làm đổ cả túi đồ ăn lên quầy. Phản ứng của bạn sẽ như thế nào?",
        image: "images/6.png",
        answers: {
            J: {
                text: "Hi vọng là họ dọn nhanh để tôi lấy đồ ăn.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Đồ ăn miễn phí đây rùi!",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q7/12: Bạn đang thưởng thức một món ăn nhẹ trong khi xem màn trình diễn xiếc. Đột nhiên, một con khỉ từ tiết mục xiếc vượt qua hàng rào an toàn, tiến đến gần bạn và bắt đầu ăn vụng đồ ăn của bạn. Bạn sẽ phản ứng như thế nào?",
        image: "images/7.png",
        answers: {
            E: {
                text: "Chia sẻ đồ ăn của mình với con khỉ và chụp vài bức ảnh để lưu lại kỷ niệm.",
                scores: { E: +1, I: 0 }
            },
            I: {
                text: "Cố gắng lấy lại đồ ăn của mình, hy vọng nhân viên đến giúp.",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q8/12: Giữa buổi biểu diễn, bỗng nhiên một trong những nghệ sĩ diễn xiếc bước xuống khán đài và kéo bạn lên sân khấu để tham gia vào một trò đùa. Bạn sẽ phản ứng như thế nào?",
        image: "images/8.png",
        answers: {
            E: {
                text: "Nhảy lên sân khấu ngay lập tức.",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "Từ chối bằng mọi cách.",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q9/12: Bạn đang xem một màn trình diễn xiếc với một thủ thuật ảo thuật mới lạ. Thủ thuật kết thúc bằng việc một con voi “biến mất”. Bạn sẽ nghĩ gì về thủ thuật này?",
        image: "images/9.png",
        answers: {
            S: {
                text: "Họ giấu con voi ở đâu thế?",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Kinh khủng vậy! Họ làm như thế nào nhỉ?",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q10/12: Bạn tình cờ thấy một màn biểu diễn cực kỳ cảm động về tình bạn giữa người huấn luyện và chú sư tử trong rạp xiếc. Cảm giác của bạn là gì?",
        image: "images/10.png",
        answers: {
            T: {
                text: "Phân tích kỹ thuật huấn luyện chú sư tử",
                scores: { F: 0, T: +1 },
            },
            F: {
                text: "Cảm thấy xúc động, muốn làm bạn với chú sư tử",
                scores: { F: +1, T: 0 },
            },
        },

    },
    {
        question: "Q11/12: Buổi trình diễn kết thúc bạn có suy nghĩ như thế nào?",
        image: "images/11.png",
        answers: {
            S: {
                text: "Cảm động đến phát khóc vì nó quá hay.",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Im lặng và ra khỏi lều xiếc.",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q12/12: Bạn chợt tỉnh dâỵ với tiếng nhạc Vinahouse dưới nhà của mình?",
        image: "images/12.png",
        answers: {
            S: {
                text: "Cảm thấy bực tức vì tiếng nhạc quá to.",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Thật là một giấc mơ thú vị!!",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Bạn sẽ làm gì tiếp theo?",
        image: "images/13.png",
        answers: {
            K: {
                text: "Đi event Prom: Crescendo của MOV thui!!!",
            },
            U: {
                text: "Rủ bạn đi event Prom: Crescendo của MOV thuii!!!",
            },
        },
    },
];

const resultOptions = {
    "INTJ": {
        image: "DDSK.png",
    },
    "INTP": {
        image: "GDST.png"
    },
    "ENTJ": {
        image: "GDRX.png"
    },
    "ENTP": {
        image: "ATG.png"
    },
    "INFJ": {
        image: "HLT.png"
    },
    "INFP": {
        image: "DVM.png"
    },
    "ENFJ": {
        image: "NDCT.png"
    },
    "ENFP": {
        image: "DVNL.png"
    },
    "ISTJ": {
        image: "QLHT.png"
    },
    "ISFJ": {
        image: "NCST.png"
    },
    "ESTJ": {
        image: "BV.png"
    },
    "ESFJ": {
        image: "YTRX.png"
    },
    "ISTP": {
        image: "NTT.png"
    },
    "ISFP": {
        image: "NSDTD.png"
    },
    "ESTP": {
        image: "LVVN.png"
    },
    "ESFP": {
        image: "CH.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


