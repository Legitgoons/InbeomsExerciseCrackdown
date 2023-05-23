import React, { useState } from "react";
import WorksoutPlanExercise from "./WorksoutPlanExercise";
import WortkoutPlanDate from "./WortkoutPlanDate";
import {
  Button,
  Card,
  Input,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { ko } from "date-fns/esm/locale";

const WorkoutPlan = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedExercise, setSelectedExercise] = useState("운동 선택");
  const [exerciseWeight, setExerciseWeight] = useState(0);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseSet, setExerciseSet] = useState(0);
  const [fixedExercises, setFixedExercises] = useState([]); // 빈 배열로 초기화 -> 반복 가능

  const handleExerciseSelection = (exerciseName) => {
    setSelectedExercise(exerciseName);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const workoutChoiceHandler = () => {
    const newFixedExercise = {
      name: selectedExercise,
      weight: exerciseWeight,
      reps: exerciseReps,
      set: exerciseSet,
    };

    setFixedExercises((prevExercises) => [...prevExercises, newFixedExercise]);
  };

  const formatDate = (date) => {
    return format(date, "yyyy.MM.dd (eee)", { locale: ko });
  };

  return (
    <div className="w-screen h-96 flex flex-col justify-between">
      <div className="flex justify-around">
        <div className="flex flex-col">
          <WortkoutPlanDate
            onDateSelect={handleDateSelection}
            selectedDate={selectedDate}
          />
        </div>
        <WorksoutPlanExercise
          onExerciseSelect={handleExerciseSelection}
          selectedExercise={selectedExercise}
        />
        <div className="flex w-72 flex-col gap-6">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            선택된 운동 : {selectedExercise}
          </Typography>
          <Input
            color="blue"
            label="무게"
            value={exerciseWeight}
            onChange={(e) => setExerciseWeight(e.target.value)}
          />
          <Input
            color="blue"
            label="횟수"
            value={exerciseReps}
            onChange={(e) => setExerciseReps(e.target.value)}
          />
          <Input
            color="blue"
            label="세트 수"
            value={exerciseSet}
            onChange={(e) => setExerciseSet(e.target.value)}
          />
          <Button color="gray" onClick={workoutChoiceHandler}>
            운동 선택
          </Button>
        </div>
        <div className="flex w-72 flex-col gap-6">
          <Typography
            variant="h5"
            color="blue-gray"
            className="self-center mb-2"
          >
            선택된 날짜 : {formatDate(selectedDate)}
          </Typography>
          <div className="flex flex-col justify-start">
            <List className="space-y-2">
            <Typography>운동 목록 :{" "}</Typography>
              {fixedExercises.map(() => (
                <ListItem
                  variant="h5"
                  color="blue-gray"
                  className="mb-2"
                ></ListItem>
              ))}
              <Typography>총 중량 : {exerciseWeight * exerciseReps * exerciseSet}</Typography>
            </List>
          </div>
          <div className="flex justify-evenly">
            <Button>등록</Button>
          </div>
        </div>
      </div>
      <div className="self-center w-1/2">
        <Card className="h-80 mt-16 flex flex-col justify-evenly"></Card>
      </div>
    </div>
  );
};

export default WorkoutPlan;
