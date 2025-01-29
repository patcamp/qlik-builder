import './Style/App.css';
import Tools from './Components/Tools';
import Canvas from "./Components/Canvas";
import Papa from "papaparse";
import { useEffect, useState } from 'react';

function App() {

  const [dataList, setDataList] = useState([]);
  const [columnList, setColumnList] = useState({});
  const [selectedData, setSelectedData] = useState([]);

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
      setDataList(res);

      setColumnList(() => {
        let ret= {};
        for (let key of Object.keys(res[0])){
          ret =  {...ret, [key]: {isChecked: false}};
        }
        return ret
      })

    }

    reader.readAsText(data);
  } 

  const changeSelected = (selected) => {

  }

  return (
    <>
      <Tools dataColsToSelect={columnList} parentSendDataList={recieveDataList} parentSelect={changeSelected}/>
      <Canvas data={dataList} selectedColumn={columnList}/>
    </>
  );
}

export default App;
