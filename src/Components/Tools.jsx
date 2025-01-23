import '../Style/App.css';
import Upload from './Upload'

export default function Tools({parentSendDataList}) {

    const middleManDataList = (data) => {
        parentSendDataList(data);
    }

    return (
            <div>
                <Upload sendDataList={middleManDataList}/>
            </div>
        );
}
