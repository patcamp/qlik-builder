import '../Style/App.css';
import Upload from './Upload'

export default function Tools({parentSendDataList, dataColsToSelect}) {

    const middleManDataList = (data) => {
        parentSendDataList(data);
    }

    const onChecked = (event) => {
        
        dataColsToSelect[event.target.value]['isChecked'] = !dataColsToSelect[event.target.value]['isChecked']
    };

    if (Object.keys(dataColsToSelect).length){
        return (
            <div className="checkList">\
                <div className="list-container">
                    {Object.keys(dataColsToSelect).map((item) => (
                        <label>
                            <input value={item} type="checkbox" onChange={onChecked}/> 
                            {item}
                        </label>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <Upload sendDataList={middleManDataList}/>
        </div>
    );
}
