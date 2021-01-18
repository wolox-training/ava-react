import React, { ReactNode, Component } from 'react';

interface FormProps {
  handleSubmit?: (event: React.FormEvent) => void;
  children: ReactNode;
  className?: string;
}

export default class Form extends Component<FormProps> {
  submit = (event: React.FormEvent) => {
    event.preventDefault();
    const { handleSubmit } = this.props;

    handleSubmit && handleSubmit(event);
  }

  render() {
    const { className, children } = this.props;

    return (
      <form onSubmit={this.submit} className={className}>
        {children}
      </form>
    )
  }
}
