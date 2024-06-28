import React, { useState } from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

const friends = {
  Mithilesh: { "Part of mechx team in past as a volunteer or team member?": true, "Currently doing intern?": true, "Trying for software placement?": false, "Hometown is in Ap?": false, "Cg is greater than 9?": true },
  Nikhil: { "Part of mechx team in past as a volunteer or team member?": true, "Currently doing intern?": true, "Trying for software placement?": false, "Hometown is in Ap?": false, "Cg is greater than 9?": false },
  Arun: { "Part of mechx team in past as a volunteer or team member?": false, "Currently doing intern?": true, "Trying for software placement?": true, "Hometown is in Ap?": false, "Cg is greater than 9?": true },
  Amarnadh: { "Part of mechx team in past as a volunteer or team member?": false, "Currently doing intern?": true, "Trying for software placement?": true, "Hometown is in Ap?": true, "Cg is greater than 9?": false },
  Narsimha: { "Part of mechx team in past as a volunteer or team member?": false, "Currently doing intern?": false, "Trying for software placement?": true, "Hometown is in Ap?": false, "Cg is greater than 9?": false },
  Shiva: { "Part of mechx team in past as a volunteer or team member?": true, "Currently doing intern?": true, "Trying for software placement?": true, "Hometown is in Ap?": false, "Cg is greater than 9?": false },
  Sidhu: { "Part of mechx team in past as a volunteer or team member?": false, "Currently doing intern?": false, "Trying for software placement?": false, "Hometown is in Ap?": false, "Cg is greater than 9?": false },
  Aakash: { "Part of mechx team in past as a volunteer or team member?": false, "Currently doing intern?": true, "Trying for software placement?": true, "Hometown is in Ap?": false, "Cg is greater than 9?": false },
  Vinayak: { "Part of mechx team in past as a volunteer or team member?": true, "Currently doing intern?": true, "Trying for software placement?": false, "Hometown is in Ap?": true, "Cg is greater than 9?": false },
  Arhan: { "Part of mechx team in past as a volunteer or team member?": false, "Currently doing intern?": false, "Trying for software placement?": false, "Hometown is in Ap?": true, "Cg is greater than 9?": false }
};

const questions = [
  "Part of mechx team in past as a volunteer or team member?",
  "Currently doing intern?",
  "Trying for software placement?",
  "Hometown is in Ap?",
  "Cg is greater than 9?"
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [possibleFriends, setPossibleFriends] = useState(friends);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");

  const handleAnswer = (answer) => {
    const question = questions[currentQuestionIndex];
    const filteredFriends = Object.fromEntries(
      Object.entries(possibleFriends).filter(([name, traits]) => traits[question] === answer)
    );
    setPossibleFriends(filteredFriends);

    if (Object.keys(filteredFriends).length === 1) {
      setGameOver(true);
      setResult(Object.keys(filteredFriends)[0]);
    } else if (currentQuestionIndex === questions.length - 1 || Object.keys(filteredFriends).length === 0) {
      setGameOver(true);
      setResult("No match found");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: 'center' }}>
      {gameOver ? (
        <Box>
          <Typography variant="h4" gutterBottom>
            The person you're thinking of is: {result}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
            Play Again
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h5" gutterBottom>
            {questions[currentQuestionIndex]}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="success" onClick={() => handleAnswer(true)}>
                Yes
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="error" onClick={() => handleAnswer(false)}>
                No
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Game;
