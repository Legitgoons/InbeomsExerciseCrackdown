import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';

const WorksoutPlanExercise = ({ onExerciseSelect, selectedExercise }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get("http://localhost:9999/api-exercise/exerciseAllList");
        const data = response.data;
        const groupedData = [];
        const parts = [...new Set(data.map(exercise => exercise.part))];

        parts.forEach(part => {
          groupedData.push({
            part: part,
            exercise: data.filter(exercise => exercise.part === part),
          });
        });

        setExercises(groupedData);
      } catch (error) {
        console.error('Failed to fetch exercises:', error);
      }
    };
    
    fetchExercises();
  }, []);

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
            {exercise.map(({ exerciseId, title }) => (
              <Button
                key={exerciseId}
                onClick={() => handleExerciseClick(title)}
                className="w-1/2 mb-4"
              >
                {title}
              </Button>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default WorksoutPlanExercise;
