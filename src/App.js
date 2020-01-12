import React, { Component } from 'react';
import './App.css';
import marked from 'marked'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: ''
    }
    this.previewMarkdown = this.previewMarkdown.bind(this);
  }

  updateMarkdown = (event) => {
    this.setState({
      markdown: event.target.value
    })
  }

  previewMarkdown() {
    let markup = marked(this.state.markdown);
    return { __html: markup };
  }

  render() {
    return (
      <div className="container-fluid">
        <h2 className="heading">Markdown Previewer</h2>
        <div className="row">
          <div className="col-md-6 leftBox mb-5  ">
            <p className="head1">Editor</p>
            <textarea className="editor" value={this.state.markdown} onChange={this.updateMarkdown}></textarea>
          </div>
          <div className="col-md-6 rightBox mb-5 ">
            <p className="head1">Previewer</p>
            <div className="previewer " dangerouslySetInnerHTML={this.previewMarkdown()}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
