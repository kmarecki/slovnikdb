import React from 'react';
import ReactDOM from 'react-dom';

export class AppFooter extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="page-footer text-center">
                <p> @ 2018 Krzysztof Marecki</p>
            </div>
        );
    }
};
