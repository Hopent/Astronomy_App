import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import UserDataManager from '../components/UserDataManager';
import { serverConfig } from '../config';
import TopNav_2 from "../components/TopNav_2";
import BottomNav from "../components/BottomNav";

const Quiz1 = () => {
  const navigation = useNavigation();
  const questions = [
    {
      question: 'Which planet is known as the Red Planet?',
      answers: ['Mars', 'Venus', 'Mercury'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: ['Mars', 'Venus', 'Mercury'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter',
    },{
      question: 'Which planet is known as the Red Planet?',
      answers: ['Mars', 'Venus', 'Mercury'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter',
    },{
      question: 'Which planet is known as the Red Planet?',
      answers: ['Mars', 'Venus', 'Mercury'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: ['Mars', 'Venus', 'Mercury'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter',
    },
  ];



const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ positive: 0, negative: 0 });
  const [timer, setTimer] = useState(10);
  const [answerClicked, setAnswerClicked] = useState(false);
  const [answeredCurrentQuestion, setAnsweredCurrentQuestion] = useState(false);
  const [login,setLogin] = useState();
  const [name,setName] = useState();

  useEffect(() => {
    const readUserData = async () => {
      const userData = await UserDataManager.getUserData();
      if (userData) {
        setLogin(userData.login);
        setName(userData.name);
      } else {
        console.log('Unable to read user data from cache');
      }
    };

    readUserData();
  }, []);

  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      if (!answerClicked) {
        handleAnswerClick('');
      }
    }

    return () => clearInterval(intervalId);
  }, [timer, answerClicked]);


  const publicRank = async (newRank) => {
      try {
        const response = await fetch(`${serverConfig.apiUrl}:${serverConfig.port}/quiz`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRank),
        });
    } catch (error) {
      console.error('POST error', error);
    }
  }
  const handleAnswerClick = (selectedAnswer) => {
    if (!answeredCurrentQuestion) { 
      setAnsweredCurrentQuestion(true);
      setAnswerClicked(true);

      const currentQuestion = questions[currentQuestionIndex];
      let updatedScore = { ...score };

      if (selectedAnswer === currentQuestion.correctAnswer) {
        updatedScore = { ...score, positive: score.positive + 1 };
      } else {
        updatedScore = { ...score, negative: score.negative + 1 };
      }

      setScore(updatedScore);

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setTimer(10);
          setAnswerClicked(false);
          setAnsweredCurrentQuestion(false);
        } else {
          alert('Koniec quizu!');

          const newRank = {
            name: name,
            points: score.positive
          };
          publicRank(newRank);
          navigation.goBack();
        }
      }, 2000);
   }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
    <View style={styles.quiz1}>
        <View style={styles.boxes}>
          <View style={styles.liczbaOdpowiedzi}>
            <Text style={styles.positive}>{score.positive}</Text>
            <Text style={styles.time}>{timer}</Text>
            <Text style={styles.negative}>{score.negative}</Text>
          </View>  
          <Text style={styles.question_count}>Pytanie {currentQuestionIndex + 1}/10</Text>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          <View style={styles.odpowiedzi}>
            {currentQuestion.answers.map((answer, index) => (
                <TouchableOpacity
                key={index}
                style={[
                  styles[`odpowiedz2`],
                  answerClicked &&
                    answer === currentQuestion.correctAnswer && {
                      backgroundColor: 'green',
                    },
                  answerClicked &&
                    answer !== currentQuestion.correctAnswer && {
                      backgroundColor: 'red',
                    },
                ]}
                onPress={() => handleAnswerClick(answer)}
              >
                <Text>{answer}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>   
        <TouchableOpacity style={styles.next_button} onPress={() => handleAnswerClick('')}>
            <Text style={styles.next_question_text}>Następne pytaniee</Text>
        </TouchableOpacity>
    </View>
    <TopNav_2 />
    <BottomNav />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
  },
  timer: {
    fontSize: 20,
  },
  answersContainer: {
    width: '100%',
    alignItems: 'center',
  },
  answerButton: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  answerText: {
    fontSize: 18,
  },
  score: {
    fontSize: 16,
  },
  question_count: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.secondary,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 10
  },
  question: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "left",
    marginTop: 9
  },
  boxes: {
    position: "relative",
    top: "15%",
    left: "15%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: "70%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 25,
    paddingTop: 25,
    paddingRight: 25,
    paddingBottom: 25
  },
  next_question_text: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.text,
    textAlign: "center",
  },
  next_button: {
    position: "relative",
    width: "50%",
    height: "5%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 2,
    marginLeft: "25%",
    marginRight: "25%",
    justifyContent: 'center',
    top: 150
  },
  odpowiedz2: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDimgray_100,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    width: 244,
    height: 52,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    marginTop: 24
  },
  odpowiedzi: {
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingRight: Padding.p_12xs
  },
  liczbaOdpowiedzi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Wyśrodkowanie elementów w pionie
    marginTop: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.nav,
    color: Color.secondary,
    textAlign: 'center', // Wyśrodkowanie tekstu w poziomie
  },
  positive: {
    fontSize: 16,
    fontWeight: '700',
    color: 'green', // Dopasuj kolor do swoich potrzeb
    textAlign: 'left',
    flex: 1, // Elastyczny element, aby umieścić "positive" na lewo
  },
  negative: {
    fontSize: 16,
    fontWeight: '700',
    color: 'red', // Dopasuj kolor do swoich potrzeb
    textAlign: 'right',
    flex: 1, // Elastyczny element, aby umieścić "negative" na prawo
  },
  quiz1: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_500,
    flex: 1,
    width: "100%",
    height: 780,
    overflow: "hidden"
  }
});

export default Quiz1;
