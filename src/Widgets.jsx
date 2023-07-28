import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Batman in the house!", "Top news - I am the shadows!")}
      {newsArticle("Heisenberg in the house!", "Top news - Say my name!")}
      {newsArticle(
        "Homelander in the house!",
        "Top news - I'm stronger, i'm smarter, i'm better!"
      )}
      {newsArticle("Tony Stark in the house!", "Top news - I'm ironman!")}
      {newsArticle(
        "Damon Salvatore in the house!",
        "Top news - Hello brother!"
      )}
      {newsArticle("Joker in the house!", "Top news - Why so serious?")}
    </div>
  );
}

export default Widgets;
