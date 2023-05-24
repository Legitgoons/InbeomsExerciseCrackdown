import React, { useState, useEffect } from "react";
import WorksoutPlanExercise from "./WorksoutPlanExercise";
import WorksoutPlanExerciseTable from "./WorksoutPlanExerciseTable";
import WorksoutPlanVideo from "./WorksoutPlanVideo";
import { Button, Card, Input, Typography, } from "@material-tailwind/react";
import axios from "axios";

const WorksoutPlan = () => {
  const [selectedExercise, setSelectedExercise] = useState("운동 선택");
  const [exerciseWeight, setExerciseWeight] = useState(0);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseSet, setExerciseSet] = useState(0);
  const [fixedExercises, setFixedExercises] = useState([]); // 빈 배열로 초기화 -> 반복 가능
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [videoId, setVideoId] = useState("");

  const handleExerciseSelection = (exerciseName) => {
    setSelectedExercise(exerciseName);
  };

  const worksoutChoiceHandler = () => {
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
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      setFixedExercises([]);
      setIsEditing(false);
    }
  };

  const fetchVideo = async () => {
    if (selectedExercise === "운동 선택") { // 기본값이면 video 랜더링 x
      setVideoId(null);
      return;
    }

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 1,
        key: 'AIzaSyARG441jmA4xm90w2gIWYSGIXxg5d2aZd8', //youtube api 키
        q: selectedExercise,
      }
    });
    setVideoId(response.data.items[0].id.videoId);
  };

  useEffect(() => {
    fetchVideo();
  }, [selectedExercise]);

  return (
    <div className="w-screen flex justify-evenly">
      <div className="w-3/5 h-96 flex flex-col justify-between">
        <div className="flex justify-around">
          <div className="flex flex-col">
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
              label="중량"
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
            <Button color="gray" onClick={worksoutChoiceHandler}>
              운동 선택
            </Button>
          </div>
        </div>
        <div className="self-end w-3/4">
          <Card className="h-80 mt-10 flex flex-col justify-evenly">
            <WorksoutPlanVideo videoId={videoId} />
          </Card>
        </div>
      </div>
      <div className="flex w-96 flex-col gap-6">
        <WorksoutPlanExerciseTable fixedExercises={fixedExercises} />
        <div className="flex justify-evenly">
          {!isEditing ? (
            <Button onClick={handleEdit}>등록</Button>
          ) : (
            <div className="flex gap-2">
              <Button color="blue" onClick={handleComplete}>완료</Button>
              <Button color="green" onClick={handleEdit}>수정</Button>
              <Button color="red" onClick={handleDelete}>삭제</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorksoutPlan;