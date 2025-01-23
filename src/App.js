import './Style/App.css';
import Tools from './Components/Tools'
import Papa from "papaparse";
import { useState } from 'react';

function App() {

  const [dataList, setDataList] = useState([]);
  const [columnList, setColumnList] = useState([]);

  const recieveDataList = (data) => {
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, {header:true});
      const parsedData = csv?.data;

      const rows = Object.keys(parsedData);
      const columns = Object.values(parsedData);

      const res = rows.reduce((acc, e, i) => {
          return [...acc,  columns[i]];
      }, []);
      console.log(res)
      setDataList(res);
      console.log(Object.keys(res[0]))
      setColumnList(Object.keys(res[0]))
      console.log(columnList)
    }

    reader.readAsText(data);
  } 



  return (
    <div className="App">
      <Tools parentSendDataList={recieveDataList}/>
    </div>
  );
}

export default App;
