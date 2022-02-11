import { Visibility } from "@material-ui/icons";
import "./widgetSmall.css"

function WidgetSmall() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetListItem">
                <img src="img" alt="img" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Kapil Kumar</span>
                    <span className="widgetSmUserTitle">React Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgwtSmIcon" />Display
                </button>
            </li>
            <li className="widgetListItem">
                <img src="img" alt="img" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Kapil Kumar</span>
                    <span className="widgetSmUserTitle">React Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgwtSmIcon" />Display
                </button>
            </li>
            <li className="widgetListItem">
                <img src="img" alt="img" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Kapil Kumar</span>
                    <span className="widgetSmUserTitle">React Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgwtSmIcon" />Display
                </button>
            </li>
            <li className="widgetListItem">
                <img src="img" alt="img" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Kapil Kumar</span>
                    <span className="widgetSmUserTitle">React Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgwtSmIcon"/>Display
                </button>
            </li>
            <li className="widgetListItem">
                <img src="img" alt="img" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Kapil Kumar</span>
                    <span className="widgetSmUserTitle">React Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgwtSmIcon"/>Display
                </button>
            </li>
        </ul>
    </div>
  );
}

export default WidgetSmall;
