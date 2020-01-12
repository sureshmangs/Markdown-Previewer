import React, { Component } from 'react';
import './App.css';
import marked from 'marked'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown:
        `# H1
## H2
### H3
#### H4
##### H5
###### H6
Emphasis, aka italics, with * asterisks * or _underscores_.

Strong emphasis, aka bold, with ** asterisks ** or __underscores__.

Combined emphasis with ** asterisks and _underscores_**.

    Strikethrough uses two tildes. ~~Scratch this.~~
      1. First ordered list item
    2. Another item
    ⋅⋅* Unordered sub - list. 
1. Actual numbers don't matter, just that it's a number
    ⋅⋅1. Ordered sub - list
    4. And another item.

    ⋅⋅⋅You can have properly indented paragraphs within list items.Notice the blank line above, and the leading spaces(at least one, but we'll use three here to also align the raw Markdown).

      ⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
    ⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
    ⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
      - Or minuses
        + Or pluses
    Colons can be used to align columns.

| Tables | Are | Cool |
| ------------- |: -------------:| -----:|
| col 3 is | right - aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

      There must be at least 3 dashes separating each header cell.
    The outer pipes(|) are optional, and you don't need to make the 
    raw Markdown line up prettily.You can also use inline Markdown.

      Markdown | Less | Pretty
    --- | --- | ---
* Still * | \`renders\` | ** nicely **
      1 | 2 | 3
    `
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
