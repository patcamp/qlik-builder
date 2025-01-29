import { PieChart, Pie, Tooltip } from "recharts";

function Canvas({data, selectedColumn}) {
  console.log(data)
  console.log(selectedColumn)

  const findKey = () => {
    for(let k in selectedColumn) {
      if (selectedColumn[k]['isChecked']){
        console.log(1)
        console.log(Object.keys(k))
        return Object.keys(k);
      }
    }
    return null; 
  } 

  return (
        <div>
          <PieChart width={700} height={700}>
            <Tooltip />
            <Pie
                data={data}
                dataKey="Status"
                outerRadius={250}
                innerRadius={150}
                fill="green"
            />
          </PieChart>
        </div>
    );
}

export default Canvas;
