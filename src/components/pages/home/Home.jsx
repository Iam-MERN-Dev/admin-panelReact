import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css"
import { userData } from "../../../dummyData";
import WidgetSmall from "../../widgetSamall/WidgetSmall";
import WidgetLarge from "../../wdgetLg/WidgetLarge";

function Home() {
  return (
      <div className="home">
          <FeaturedInfo />
          <Chart data={userData} title="User Anlytics" grid dataKey="Active User" />
          <div className="homeWidgets">
            <WidgetSmall />
            <WidgetLarge />
          </div>
      </div>
  );
}

export default Home;
