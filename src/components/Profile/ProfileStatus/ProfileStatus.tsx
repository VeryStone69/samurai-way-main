import React, {FC} from 'react';

type ProfileStatusType = {
    status: string
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
        editMode: false
    }

    activateEditMode(){
        this.setState({editMode: true})
    }
    deactivateEditMode(){
        this.setState({editMode:false})
    }
    render() {
        return (
            <div >
                {!this.state.editMode ?
                    <div>
                        <span
                            onClick={this.activateEditMode.bind(this)}
                        >{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input
                            onBlur={this.deactivateEditMode.bind(this)}
                            value={this.props.status}></input>
                    </div>}


            </div>
        )
    }
}

export default ProfileStatus