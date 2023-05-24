import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["운동 목록", "중량", "횟수", "세트 수"];

const WorksoutPlanExerciseTable = ({fixedExercises}) => {
  return (
    <div>
      <Card className="h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fixedExercises.map(({ name, weight, reps, set}, index) => {
              const isLast = index === fixedExercises.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {weight}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {reps}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {set}
                    </Typography>
                  </td>
                  {/* <td className={classes}>
                    <Typography
                      as="a"
                      variant="small"
                      color="red"
                      className="font-medium"
                      onClick={handleDelete}
                    >
                      삭제
                    </Typography>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default WorksoutPlanExerciseTable;