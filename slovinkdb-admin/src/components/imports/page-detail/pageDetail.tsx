import React from 'react';
import ReactDOM from 'react-dom';

export class PageDetail extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">Page detail</div>
              <div className="panel-body">Detail of imported page</div>
            </div>
        );
    }
};
