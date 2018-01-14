import React from 'react';
import ReactDOM from 'react-dom';

export interface ImportItemProps {
    name: string;
}

export interface ImportItemState {
    expanded: boolean;
}

export class ImportItem extends React.Component<ImportItemProps, ImportItemState> {

    constructor(props: any) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    public render() {
       
        const button = (this.state.expanded) ?
        <a className="btn" href="#">
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
    </a> :
          <a className="btn" href="#">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </a>;

        return (
            <div className="row">
                <p>{this.props.name}</p>
                {/* {{button}} */}
            </div>
        );
    }
};
