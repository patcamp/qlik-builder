import './Style/App.css';
import Tools from './Components/Tools';
import Canvas from "./Components/Canvas";
import Papa from "papaparse";
import { useState } from 'react';

function App() {

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const [dataList, setDataList] = useState([]);
  const [columnList, setColumnList] = useState({});

  const recieveDataList = (data) => {
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, {header:true});
      const parsedData = csv?.data;

      const rows = Object.keys(parsedData);
      const columns = Object.values(parsedData);

      setDataList(data)
      const res = rows.reduce((acc, e, i) => {
          return [...acc,  columns[i]];
      }, []);
      // setDataList(res);

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

  if(dataList.length){
    console.log(typeof(Object.keys(data[0])[1]))
    console.log(dataList)
    
    return (
      <>
        <Tools dataColsToSelect={columnList} parentSendDataList={recieveDataList} parentSelect={changeSelected}/>
        <Canvas data={dataList} selectedColumn={columnList}/>
      </>
    );
  }

  return (
    <>
      <Tools dataColsToSelect={columnList} parentSendDataList={recieveDataList} parentSelect={changeSelected}/>
    </>
  );
}

export default App;
