import React from 'react';

class ProfileStatus extends React.Component {


    state = {
        editMode: false
    }

    activateStatus = () =>{
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    DeactivateStatus = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
        }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.DeactivateStatus}
                               value={this.state.status}/>
                    </div>
                }
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateStatus } >{this.props.status || '====='}</span>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;