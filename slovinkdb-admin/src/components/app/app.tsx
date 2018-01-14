import React from 'react';
import ReactDOM from 'react-dom';
import { AppHeader } from 'components/app/appHeader';
import { AppContent } from 'components/app/Appcontent';
import { AppFooter } from 'components/app/appFooter';

export class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="container-fluid">
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </div>
    );
  }
};
