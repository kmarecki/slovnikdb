import React from 'react';
import ReactDOM from 'react-dom';

export class AppHeader extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="page-header">
        <h3><strong>SlovnikDB</strong></h3>
      </div>
    );
  }
};
