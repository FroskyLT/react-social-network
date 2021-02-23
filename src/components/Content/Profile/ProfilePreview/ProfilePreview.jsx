import React from 'react';
import p from './ProfilePreview.module.css';
import profileBG from '../../../../assets/images/profileBG.png';

class ProfilePreview extends React.Component {
    state = {
        editMode: false,
        status: "double click me"
    };

    _editModeHandler() {
        const currentMode = this.state.editMode;
        this.setState({ editMode: !currentMode });
    }

    _statusChangeHandler(event) {
        this.setState({ status: event.target.value });
    }

    render() {
        return (
            <div className={p.profileInfo}>
                <div className={p.wallpaper}>
                    <img src={"https://blood.am/images/blood-center/78.png" || profileBG} alt="" />
                    <div className={p.about}>
                        <img src={this.props.profileData.photos.large || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="" />
                        <div>
                            <div className={p.name}>{this.props.profileData.fullName ?? "David G."}</div>
                            {this.state.editMode && <div><input type="text" value={this.state.status} autoFocus onBlur={this._editModeHandler.bind(this)} onChange={this._statusChangeHandler.bind(this)} /></div>}
                            {!this.state.editMode && <div onDoubleClick={this._editModeHandler.bind(this)}>{this.state.status}</div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePreview;