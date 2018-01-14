import React from 'react';
import ReactDOM from 'react-dom';

export class PagesList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Pages</div>
                <div className="panel-body">List of imported pages</div>
            </div>
        );
    }
};
