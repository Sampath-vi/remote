import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from './components/counter';
import Health from './components/health';
import AddPost from './components/addNewPost';
import { Tabs } from 'antd';
import "antd/dist/antd.css";

const { TabPane } = Tabs;

const App = (props) => {
  const [activeKey, setActiveKey] = React.useState(localStorage.getItem('activeKey') || '1');

  const onChange = (key: any) => {
    setActiveKey(key);
    localStorage.setItem('activeKey', key);
  }

  return (
    <div className="container">
      <Tabs defaultActiveKey={activeKey} onChange={onChange}>
        <TabPane tab="Container" key="1">
          <Counter additionalCount={props.additionalCount} />
        </TabPane>
        <TabPane tab="Health" key="2">
          <Health />
        </TabPane>
        <TabPane tab="Post" key="3">
          <AddPost post={props.post} />
        </TabPane>
      </Tabs>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
