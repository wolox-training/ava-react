import React, { ReactNode, Component } from 'react';

interface FormProps {
  handleSubmit?: (event: React.FormEvent) => void;
  children: ReactNode;
  className?: string;
}

export default class Form extends Component<FormProps> {
  handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { handleSubmit } = this.props;

    if (handleSubmit) {
      handleSubmit(event);
    }
  };

  render() {
    const { className, children } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit} className={className}>
        {children}
      </form>
    );
  }
}
