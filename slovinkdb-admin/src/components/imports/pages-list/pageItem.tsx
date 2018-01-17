import React from 'react';
import ReactDOM from 'react-dom';

interface PageItemProps {
    name: string;
    selected: boolean;
}
export class PageItem extends React.Component<PageItemProps, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <span>{this.props.name}</span>
                </div>
            </div>
        );
    }
};
