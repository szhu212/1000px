import React from 'react';


class uploadAvatarForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.avatar;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        if (typeof this.state.avatarFile === 'undefined'){
            this.setState({missingImgMessage: 'Please upload an image'}) 
       
        } else {
            this.setState({missingImgMessage: null});
            const formData = new FormData();
            formData.append('user_id', this.props.currentUserId)
            formData.append('avatar', this.state.avatarFile)
            // debugger
            this.props.createAvatar(formData)
            
            this.props.closeModal()
        }
    }

    handleFile(e){
        // debugger
        const file =  e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({avatarFile: file, avatarUrl: fileReader.result});
        }
        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const preview = this.state.avatarUrl? <img src={this.state.avatarUrl} className="preview"/> : null;
        return(
            <div>
                <form className="upload-avatar" onSubmit={this.handleSubmit}>
                    <label className="custom-file-upload"> Choose Image
                        <input type="file" 
                        onChange={this.handleFile} required/>
                    </label>
                    {preview}
                        <input type="submit" value="Change Avatar" className="upload-img-button"/>
                </form>
            </div>
        )
    }

}

export default uploadAvatarForm;