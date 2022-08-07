import React from "react";


class ProfileStatus extends React.Component {
    state = {
        edidMode: false,
        status: this.props.status
    }
    activeEditMode = ()=>{
        this.setState(
            {edidMode: true}
        )
    }
    deactiveEditMode = ()=>{
        this.setState(
            {edidMode: false}
        )
    this.props.updateStatus(this.state.status);
    }    
    onStatusChange = (e)=>{
        this.setState({ 
            status: e.currentTarget.value
         })
    this.props.updateStatus(this.state.status);
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {!this.state.edidMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status || 'None status'}</span>
                </div>
            }
            {this.state.edidMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status} />
                </div>
            }
        </div>

    }

}
export default ProfileStatus