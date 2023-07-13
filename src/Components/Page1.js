import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import "./form.css";

class Page1 extends React.Component {

  



  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mail:'',
      description: '',
      about:'',
      projects: '',
      year_of_exp:'',
      education:'',
      project1_title:'',
      project2_title:'',
      project3_title:'',
      project1_desciption:'',
      project2_desciption:'',
      company_name:'',
      about_the_role:'',
      link1:'',
      link2:'',
      git_link:'',
      linkedin:'',
      frontend:'',
      backend:''
    };
  }


  

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleMailChange = (event) => {
    this.setState({ mail: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleAboutChange = (event) => {
    this.setState({ about: event.target.value });
  };
  handleProjectsChange = (event) => {
    this.setState({ projects: event.target.value });
  };
  handleYOEChange = (event) => {
    this.setState({ year_of_exp: event.target.value });
  };
  handleEducationChange = (event) => {
    this.setState({ education: event.target.value });
  };
  handleProjecttitle1Change = (event) => {
    this.setState({ project1_title: event.target.value });
  };
  handleProjecttitle2Change = (event) => {
    this.setState({ project2_title: event.target.value });
  };
  handleProjecttitle3Change = (event) => {
    this.setState({ project3_title: event.target.value });
  };
  handleProject_Des1Change = (event) => {
    this.setState({ project1_desciption: event.target.value });
  };
  handleProject_Des2Change = (event) => {
    this.setState({ project2_desciption: event.target.value });
  };
  handleProject_Des3Change = (event) => {
    this.setState({ project3_desciption: event.target.value });
  };
  handleCompanynameChange = (event) => {
    this.setState({ company_name: event.target.value });
  };
  handleAboutCompanyChange = (event) => {
    this.setState({ about_the_role: event.target.value });
  };
  handleLink1Change = (event) => {
    this.setState({ link1: event.target.value });
  };
  handleLink2Change = (event) => {
    this.setState({ link2: event.target.value });
  };
  handleGitHubChange = (event) => {
    this.setState({ git_link: event.target.value });
  };
  handleLinkedInChange = (event) => {
    this.setState({ linkedin: event.target.value });
  };
  handleFrontendChange = (event) => {
    this.setState({ frontend: event.target.value });
  };
  handleBackendChange = (event) => {
    this.setState({ backend: event.target.value });
  };



  

  handleSubmit = (event) => {
    event.preventDefault();
    const { name,description,mail, about, projects,education,year_of_exp,project1_title,project2_title,project3_title,project1_desciption,project2_desciption,project3_desciption,company_name,about_the_role,link1,link2,git_link,linkedin,frontend,backend } = this.state;
    // Make a POST request to the backend endpoint
    axios
      .post('http://localhost:5000/port_details', { name,description,mail, about, projects,education,year_of_exp,project1_title,project2_title,project3_title,project1_desciption,project2_desciption,project3_desciption,company_name,about_the_role,link1,link2,git_link,linkedin,frontend,backend })
      .then((response) => {
        console.log(response.data);
        // Redirect to login page after successful registration
        if (response.status === 200) {
          window.alert('Portfolio updated successfully!');
          // Redirect to login page after successful registration
          this.setState({ shouldRedirect: true });
        } else {
          window.alert('Failed to update portfolio. Please try again.');
          console.log(response.status);
        }
      
        
        this.setState({ shouldRedirect: true });
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { name,description,mail, about, projects,education,year_of_exp,project1_title,project2_title,project3_title,project1_desciption,project2_desciption,project3_desciption,company_name,about_the_role,link1,link2,git_link,linkedin,frontend,backend , shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Navigate to="/page1" />;
    }

    return (
      <div className='back-box'>
        <h1>Update Your Portfolio</h1>
        <form onSubmit={this.handleSubmit} className='form'>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={this.handleNameChange}
              
            />
          </label>
          <br />
          
          <label>
            Registered MAIL ID:
            <input
              type="text"
              value={mail}
              onChange={this.handleMailChange}
            />
          </label>
          <br />

          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </label>
          <br />
          <label>
            About:
            <input
              type="text"
              value={about}
              onChange={this.handleAboutChange}
            />
          </label>
          <br />
          <label>
            Frontend:
            <input
              type="text"
              value={frontend}
              onChange={this.handleFrontendChange}
            />
          </label>
          <br />
          <label>
            Backend:
            <input
              type="text"
              value={backend}
              onChange={this.handleBackendChange}
            />
          </label>
          <br />
          <label>
            Projects:
            <input
              type="text"
              value={projects}
              onChange={this.handleProjectsChange}
            />
          </label>
          <br />

          <label>
            Year of Experience:
            <input
              type="text"
              value={year_of_exp}
              onChange={this.handleYOEChange}
            />
          </label>
          <br />

          <label>
            Education:
            <input
              type="text"
              value={education}
              onChange={this.handleEducationChange}
            />
          </label>
          <br />

          <label>
            Project1 title:
            <input
              type="text"
              value={project1_title}
              onChange={this.handleProjecttitle1Change}
            />
          </label>
          <br />
          <label>
            Project2 title:
            <input
              type="text"
              value={project2_title}
              onChange={this.handleProjecttitle2Change}
            />
          </label>
          <br />
          <label>
            Project3 title:
            <input
              type="text"
              value={project3_title}
              onChange={this.handleProjecttitle3Change}
            />
          </label>
          <br />
          <label>
            Project1 Description:
            <input
              type="text"
              value={project1_desciption}
              onChange={this.handleProject_Des1Change}
            />
          </label>
          <br />
          <label>
            Project2 Description:
            <input
              type="text"
              value={project2_desciption}
              onChange={this.handleProject_Des2Change}
            />
          </label>
          <br />
          <label>
            Project3 Description:
            <input
              type="text"
              value={project3_desciption}
              onChange={this.handleProject_Des3Change}
            />
          </label>
          <br />

          <label>
            Compnay Name:
            <input
              type="text"
              value={company_name}
              onChange={this.handleCompanynameChange}
            />
          </label>
          <br />
          <label>
            About the role:
            <input
              type="text"
              value={about_the_role}
              onChange={this.handleAboutCompanyChange}
            />
          </label>
          <br />

          <label>
            Project link1:
            <input
              type="text"
              value={link1}
              onChange={this.handleLink1Change}
            />
          </label>
          <br />
          
          <label>
            Git-Hub link:
            <input
              type="text"
              value={git_link}
              onChange={this.handleGitHubChange}
            />
          </label>
          <br />
          <label>
            LinkedIn link:
            <input
              type="text"
              value={linkedin}
              onChange={this.handleLinkedInChange}
            />
          </label>
          <br />




          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Page1;
