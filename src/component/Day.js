import dummy from "../db/data.json";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Word from "./Word";

export default function Day() {
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));
  return (
    <>
      <h2 className="day_title">Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
