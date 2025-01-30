import { PieChart, Pie, Cell } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Canvas({data, selectedColumn}) {
  console.log(typeof(Object.keys(data[0])[1]))
  console.log(selectedColumn)

  // const findKey = () => {
  //   for(let k in selectedColumn) {
  //     if (selectedColumn[k]['isChecked']){
  //       console.log(1)
  //       console.log(Object.keys(k))
  //       return Object.keys(k);
  //     }
  //   }
  //   return null; 
  // }

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="Status"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="Organization Level 1"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
  );
}

export default Canvas;
