import React, { useState } from "react";
import WorksoutPlanExercise from "./WorksoutPlanExercise";
import WorksoutPlanVideo from "./WorksoutPlanVideo";
// import WortkoutPlanDate from "./WortkoutPlanDate";
import {
  Button,
  Card,
  Input,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
// import { format } from "date-fns";
// import { ko } from "date-fns/esm/locale";

const WorkoutPlan = () => {
  const [selectedExercise, setSelectedExercise] = useState("운동 선택");
  const [exerciseWeight, setExerciseWeight] = useState(0);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseSet, setExerciseSet] = useState(0);
  const [fixedExercises, setFixedExercises] = useState([]); // 빈 배열로 초기화 -> 반복 가능
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleDateSelection = (date) => {
  //   setSelectedDate(date);
  // };
  // const formatDate = (date) => {
  //   return format(date, "yyyy.MM.dd (eee)", { locale: ko });
  // };

  const handleExerciseSelection = (exerciseName) => {
    setSelectedExercise(exerciseName);
  };

  const workoutChoiceHandler = () => {
    if (selectedExercise === "운동 선택") {
      alert("운동을 선택해주세요");
      return;
    } else if (exerciseReps === 0) {
      alert("수행 횟수를 선택해주세요");
      return;
    } else if (exerciseSet === 0) {
      alert("세트 수를 선택해주세요");
      return; // 선택되었어야만 진행
    }
    const newFixedExercise = {
      name: selectedExercise,
      weight: exerciseWeight,
      reps: exerciseReps,
      set: exerciseSet,
    };

    // 운동이 목록에 이미 있는지 check
    const exerciseIndex = fixedExercises.findIndex(
      (exercise) => exercise.name === selectedExercise
    );

    if (exerciseIndex !== -1) {
      // 이미 있으면 정보 갱신
      const updatedExercises = [...fixedExercises];
      updatedExercises[exerciseIndex] = newFixedExercise;
      setFixedExercises(updatedExercises);
    } else {
      // 없으면 새로 추가
      setFixedExercises((prevExercises) => [
        ...prevExercises,
        newFixedExercise,
      ]);
    }

    // 필드 초기화
    setSelectedExercise("운동 선택");
    setExerciseWeight(0);
    setExerciseReps(0);
    setExerciseSet(0);
  };

  const handleEdit = () => {
    if (fixedExercises.length === 0) {
      alert("운동을 선택해주세요");
      return;
    }
    setIsEditing(!isEditing);
  };

  const handleComplete = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    setFixedExercises([]);
    setIsEditing(false);
  };

  return (
    <div className="w-screen flex justify-between">
      <div className="w-3/4 h-96 flex flex-col justify-between">
        <div className="flex justify-around">
          <div className="flex flex-col">
            {/* <WortkoutPlanDate 
            onDateSelect={handleDateSelection}
            selectedDate={selectedDate}
          /> 달력은 좀 더 고민해보는걸로,,*/}
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
        </div>
        <div className="self-end w-2/3">
          <Card className="h-80 mt-10 flex flex-col justify-evenly">
            <WorksoutPlanVideo />
          </Card>
        </div>
      </div>
      <div className="flex w-80 flex-col gap-6">
        {/* <Typography variant="h5" color="blue-gray" className="self-center">
            오늘 : {formatDate(selectedDate)}
          </Typography> */}
        <div className="flex flex-col justify-start">
          <List>
            <Typography>운동 목록</Typography>
            {fixedExercises.map((exercise, index) => (
              <ListItem key={index} variant="h5" color="blue-gray">
                {exercise.name} - {exercise.weight}kg, {exercise.reps}회, {exercise.set}세트
              </ListItem>
            ))}
          </List>
        </div>
        <div className="flex justify-evenly">
          {!isEditing ? (
            <Button onClick={handleEdit}>등록</Button>
          ) : (
            <div className="flex gap-2">
              <Button color="blue" onClick={handleComplete}>
                완료
              </Button>
              <Button color="green" onClick={handleEdit}>
                수정
              </Button>
              <Button color="red" onClick={handleDelete}>
                삭제
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
