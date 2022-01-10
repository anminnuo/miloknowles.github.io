import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HashLink as Link } from 'react-router-hash-link';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';


class MarkdownRenderer extends Component {
  constructor(props) {
    super(props)
    this.state = { body: 'Loading...' }
  }

  componentWillMount() {
    fetch(`/markdown/${this.props.id}.md`)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ body: text })
      })
  }

  render() {
    return (
      <Container className="mt-5 mb-5">
        <Row>
          <Col xs={12} md={10} lg={7} xl={6}>
            <ReactMarkdown children={this.state.body} remarkPlugins={[remarkGfm]}
                components={{
                  a({node, inline, className, children, ...props}) {
                    let is_footnote = (className == "footnote-ref");
                    let is_linkback = (className == "footnote-back");

                    // Check if this is a footnote or a link back to a footnote. If so, we need to
                    // replace the <a> element with a React-friendly 'Link' object. For some reason,
                    // anchoring doesn't work with the React hashrouter, but Link does.
                    // NOTE: Need to include props with the Link so that it's assigned an id, thus
                    // allowing back links to refer to it.
                    if (is_footnote || is_linkback) {
                      return (
                        <Link to={props.href} {...props}>{children}</Link>
                      )
                    } else {
                      // If not, return the object as-is.
                      return (
                        <a className={className} {...props}>
                          {children}
                        </a>
                      )
                    }
                  }
                }}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}


export default MarkdownRenderer;
