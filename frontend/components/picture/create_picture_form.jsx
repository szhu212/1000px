import React from 'react';


class createPicture extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.picture;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        if (typeof this.state.pictureFile === 'undefined'){
            this.setState({missingImgMessage: 'Please upload an image'}) 
       
        } else {
            this.setState({missingImgMessage: null});
            const formData = new FormData();
            formData.append('picture[title]', this.state.title)
            formData.append('picture[description]', this.state.description)
            formData.append('picture[equipment_or_material]', this.state.equipment_or_material)
            formData.append('picture[author_id]', this.state.author_id)
            formData.append('picture[picture]', this.state.pictureFile)
            // debugger
            this.props.createPicture(formData)
                .then( () => this.props.history
                .push(`/discover`));
                // debugger
                this.props.closeModal()
        }
            
  
    }

    handleChange(field) {
       
        return (e) => this.setState({ [field]: e.target.value});
    }

    handleFile(e){
        const file =  e.currentTarget.files[0];
        debugger
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({pictureFile: file, photoUrl: fileReader.result});
        }
        debugger
        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    renderErrors() {
        // debugger
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={i}>
                {error}
              </li>
            ))}
          </ul>
        );
    };

    render() {
        const preview = this.state.photoUrl? <img src={this.state.photoUrl}/> : null;
        return (
            <div className="create-picture-container">
                <div className="err-box">
                    <span className="error">{this.renderErrors()}</span>
                    <span className="error">{this.state.missingImgMessage}</span>
                </div>
                <form className="create-picture-form" onSubmit={this.handleSubmit}>
                    <label>Title
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')} required/>
                    </label>
                    <label>Description
                        <textarea 
                        value={this.state.description} 
                        onChange={this.handleChange('description')}
                        placeholder="Tell us more about your illustration" required></textarea>
                    </label>
                    <label>Material or Equipments
                        <input type="text" 
                        value={this.state.equipment_or_material} 
                        onChange={this.handleChange('equipment_or_material')}
                        placeholder="What art supplies or equipments did you use?"
                        required/>
                    </label>
                    <label className="custom-file-upload"> Choose Image
                        <input type="file" 
                        onChange={this.handleFile}/>
                    </label>
                    {preview}
                    <input type="submit" value="Upload Image" className="upload-img-button"
                    required/>
                </form>
             </div>
        )
    }

}

export default createPicture;