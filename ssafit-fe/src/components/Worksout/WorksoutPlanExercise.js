import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const WorksoutPlanExercise = () => {
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
  return (
    <Tabs value="html" className="w-1/2">
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
          <TabPanel key={part} value={part} className="flex flex-col">
            {exercise.map(({ id, name }) => (
              <button key={id}>{name}</button>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default WorksoutPlanExercise;
