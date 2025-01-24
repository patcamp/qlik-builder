import '../Style/App.css';
import Upload from './Upload'

export default function Tools({parentSendDataList, dataColsToSelect}) {

    const middleManDataList = (data) => {
        parentSendDataList(data);
    }

    if (dataColsToSelect.length){
        return (
            <div className="checkList">\
                <div className="list-container">
                    {dataColsToSelect.map((item) => (
                        <label>
                            <input value={item} type="checkbox" /> 
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
