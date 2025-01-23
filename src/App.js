import './Style/App.css';
import Tools from './Components/Tools'
import Papa from "papaparse";
import { useState } from 'react';

function App() {

  const [dataList, setDataList] = useState([]);
  const [columnList, setColumnList] = useState([]);

  const recieveDataList = (data) => {
    console.log(data)
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      console.log(target)
      const csv = Papa.parse(target.result, {header:true});
      const parsedData = csv?.data;
      console.log(parsedData)
      const rows = Object.keys(parsedData);
      console.log(rows)
      const columns = Object.values(parsedData);
      const res = rows.reduce((acc, e, i) => {
          return [...acc,  columns[i]];
      }, []);

      setDataList(res);
    }

    reader.readAsText(data);
  } 



  return (
    <div className="App">
      <Tools sendDataList={recieveDataList}/>
    </div>
  );
}

export default App;
