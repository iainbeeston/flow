/* @flow */
import React from "react";

class Example extends React.Component {
  props: {
    value: string,
  };

  render() {
    return (
      <div>
        {this.props.value}
      </div>
    )
  }
}

const ok_string = <Example value={"foo"} />;
const fail_not_found = <Example />;
const fail_incompatible_null = <Example value={null} />;
const fail_incompatible_undefined = <Example value={undefined} />;
