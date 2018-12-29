import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="//app.ontraport.com/js/formeditor/moonrayform/paymentplandisplay/production.css" type="text/css" />
          <link rel="stylesheet" href="https://optassets.ontraport.com/opt_assets/css/form.default.min.css" type="text/css" />
          <link rel="stylesheet" href="https://forms.ontraport.com/v2.4/include/formEditor/gencss.php?uid=p2c191623f3" type="text/css" />
          <script type="text/javascript" src="https://forms.ontraport.com/v2.4/include/formEditor/genjs-v3.php?html=false&uid=p2c191623f3"></script>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
