import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";

const WorksoutPlanExercise = ({ onExerciseSelect, selectedExercise }) => {
  const exercises = [
    {
      part: "등",
      exercise: [
        {
          id: 1,
          name: "풀업",
        },
        {
          id: 2,
          name: "랫풀",
        },
        {
          id: 3,
          name: "데드리프트",
        },
      ],
    },
    {
      part: "가슴",
      exercise: [
        {
          id: 4,
          name: "벤치",
        },
      ],
    },
    {
      part: "어깨",
      exercise: [
        {
          id: 5,
          name: "OHP",
        },
      ],
    },
    {
      part: "하체",
      exercise: [
        {
          id: 6,
          name: "스퀏",
        },
      ],
    },
    {
      part: "팔",
      exercise: [
        {
          id: 7,
          name: "이지바컬",
        },
      ],
    },
  ];

  const handleExerciseClick = (exerciseName) => {
    onExerciseSelect(exerciseName);
  };

  return (
    <Tabs value="html" className="w-2/5">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-blue-500/10 shadow-none text-blue-500",
        }}
      >
        {exercises.map(({ part }) => (
          <Tab key={part} value={part}>
            {part}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {exercises.map(({ part, exercise }) => (
          <TabPanel
            key={part}
            value={part}
            className="flex flex-col items-center"
          >
            {exercise.map(({ id, name }) => (
              <Button
                key={id}
                onClick={() => handleExerciseClick(name)}
                className="w-1/3 mb-4"
              >
                {name}
              </Button>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default WorksoutPlanExercise;