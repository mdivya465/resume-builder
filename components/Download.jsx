import React, { Component } from 'react';
import {  Button, Segment, Header, Icon, Form } from 'semantic-ui-react';
import jsPDF from 'jspdf';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {
        personal: {
          name: '',
          phone: '',
          email: '',
          address: '',
          education: [],
        skills: '',
        projects: '',
        workexperience: []
        },
      }
    };
}
handleChange = (e, { name, value }) => {
  const { personal } = this.state.resume;

  this.setState({
    resume: {
      ...this.state.resume,
      personal: {
        ...this.state.resume.personal,
        [name]: value
      }
    }
  });
};

 handleSubmit = () => {
    const { resume } = this.state;
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Resume', 20, 20);
   
    doc.setFontSize(8);
    doc.text('Name:', 20, 30);
    doc.text(resume.personal.name, 40, 30);
    doc.text('Phone:', 20, 40);
    doc.text(resume.personal.phone, 40, 40);
    doc.text('Email:', 20, 50);
    doc.text(resume.personal.email, 40, 50);
    doc.text('Address:', 20, 60);
    doc.text(resume.personal.address, 40, 60);
    doc.text('Education:', 20, 70);
    doc.text(resume.personal.education, 40, 70);
    doc.text('Skills:', 20, 80);
    doc.text(resume.personal.skills, 40, 80);
    doc.text('Projects:', 20, 90);
    doc.text(resume.personal.projects, 40, 90);
    doc.text('WorkExperience:', 20, 100);
    doc.text(resume.personal.workexperience, 40, 100);
    

    doc.save('resume.pdf');
 };

 render() {
  const { name, email, phone, education, address, skills, projects, workexperience } = this.state;

    return (
        <div className="container">
      <div>
        <Header as="h1" icon textAlign="center">
          <Icon name="briefcase" circular />
          <Header.Content>D Resume Builder</Header.Content>
        </Header>

        <Segment className="segment">
          <Form className="form-container">
          <Form.Input label="Name" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
                <Form.Input label="Email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                <Form.Input label="Phone" placeholder="Phone" name="phone" value={phone} onChange={this.handleChange} />
                <Form.Input label="Address" placeholder="Address" name="address" value={address} onChange={this.handleChange} />
                <label>Education</label>
                <Form.TextArea  placeholder="Education" name="education" value={education} onChange={this.handleChange} />
                <label>Skills</label>
                <Form.TextArea  placeholder="Skills" name="skills" value={skills} onChange={this.handleChange} />
                <label>Projects</label>
                <Form.TextArea  placeholder="Projects" name="projects" value={projects} onChange={this.handleChange} />
                <label>WorkExperience</label>
                <Form.TextArea  placeholder="WorkExperience" name="workexperience" value={workexperience} onChange={this.handleChange} />


            {/* Add other fields of the form here */}

            <Button primary onClick={this.handleSubmit}>
              Download Resume
            </Button>
          </Form>
        </Segment>
      </div>
      </div>
    );
 }
}

export default Download;
