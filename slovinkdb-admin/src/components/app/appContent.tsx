import React from 'react';
import ReactDOM from 'react-dom';
import { WikiImports } from 'components/imports/imports';

export class AppContent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
       <WikiImports/>
      </div>
    );
  }
};
