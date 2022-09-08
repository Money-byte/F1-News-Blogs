import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">We Race as One!</span>
        <span className="headerTitleLg">Formula 1</span>
      </div>
      <img
        className="headerImg"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a2/2015_Malaysian_GP_opening_lap.jpg"
        alt="Image of Malaysian GP"
      />
    </div>
  );
}
