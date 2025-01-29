import { Component } from 'react';

export default class Upload extends Component {

    constructor(props){
        super(props)
        this.state = {
            // Initially, no file is selected
            selectedFile: null
        };
    }

    // On file select (from the pop up)
    handleFileChange = (event) => {
        // Update the state
        this.setState({
            selectedFile: event.target.files[0]
        });
    };
    handleFileUpload = () => {
        this.props.sendDataList(this.state.selectedFile);
    }
    
    render(){
        return (
            <div>
                <div>
                    <input type="file" onChange={this.handleFileChange} accept='.csv' />
                    <button onClick={this.handleFileUpload}>Upload!</button>
                </div>
            </div>
        );
    }
}
