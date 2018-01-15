import React from 'react';
import ReactDOM from 'react-dom';

interface LanguageItemProp {
    name: string;
    pageCount: number;
}
export class LanguageItem extends React.Component<LanguageItemProp, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {

        const pageCount = `(${this.props.pageCount})`;

        return (
            <div className="row">
                <div className="col-md-8">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-md-4">
                    <p>{pageCount}</p>
                </div>
            </div>
        );
    }
};
