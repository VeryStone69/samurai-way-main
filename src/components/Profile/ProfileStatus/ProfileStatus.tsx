import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    callback: (status:string)=>void
}

// export const ProfileStatus:FC<ProfileStatusType> = (props) => {
//
//     return (
//      <div>
//         <div>
//             <span>{props.status}</span>
//         </div>
//          <div>
//              <input value={props.status}></input>
//          </div>
//      </div>
//     );
// };

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        inputStatus: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.callback(this.state.inputStatus)
    }
    onChangeHandler=(e:ChangeEvent<HTMLInputElement> )=>{
        this.setState({inputStatus:e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span
                            onClick={this.activateEditMode}
                        >{this.props.status || "No status"}</span>
                    </div>
                    :
                    <div>
                        <input
                            onChange={this.onChangeHandler}
                            onBlur={this.deactivateEditMode}
                            value={this.state.inputStatus}></input>
                    </div>}


            </div>
        )
    }
}

export default ProfileStatus