import React, { useMemo } from "react";
interface finalResultProps {
  marks: number;
  subject: string;
}

const FinalResult = ({ marks, subject }: finalResultProps) => {
  console.log("FinalResult Rendered");
  // memoized value only rendered if marks props update
  const percentObtained = useMemo(() => {
    console.log("result calculated");
    return (marks * 100) / 200;
  }, [marks]);
  // const percentObtained = () => {
  //   console.log("result calculated");
  //   return (marks * 100) / 200;
  // };
  return (
    <>
      <h2>Subject is: {subject}</h2>
      <h2>Final Result is {marks} </h2>
      <h2>Percentage Now is {percentObtained} </h2>
    </>
  );
};

export default React.memo(FinalResult);
