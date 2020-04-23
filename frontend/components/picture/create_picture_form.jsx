import React from 'react';

class createPicture extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.picture;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('picture[title]', this.state.title)
        formData.append('picture[description]', this.state.description)
        formData.append('picture[equipment_or_material]', this.state.equipment_or_material)
        formData.append('picture[author_id]', this.state.author_id)
        formData.append('picture[picture]', this.state.pictureFile)
        this.props.createPicture(formData)
        // const pic = Object.assign({}, this.state);
        // this.props.createPicture(pic);
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value});
    }

    handleFile(e){
        debugger
        this.setState({pictureFile: e.currentTarget.files[0]})
    }

    render() {

        return (
            <div className="create-picture-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                    </label>
                    <label>Tell us more about your illustration:
                        <textarea value={this.state.description} onChange={this.handleChange('description')}></textarea>
                    </label>
                    <label>What material or equipments did you use to create your illustration?:
                        <input value={this.state.equipment_or_material} onChange={this.handleChange('equipment_or_material')}/>
                    </label>
                    <input type="file" 
                    onChange={this.handleFile}/>
                    <input type="submit" value="Submit"/>
                </form>
             </div>
        )
    }

}

export default createPicture;