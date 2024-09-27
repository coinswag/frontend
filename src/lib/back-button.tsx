import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div className=" flex flex-row w-screen">
      <div className=" ml-4 justify-start w-full">
        <Link to={"/"}>
          <img src="/Images/back-button.svg" alt="back button" />
        </Link>
      </div>
    </div>
  );
}
