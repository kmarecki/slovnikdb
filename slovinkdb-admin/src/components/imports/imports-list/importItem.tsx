import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { LanguagesList } from 'components/imports/imports-list/languagesList';

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

    collapse(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        
        this.setState({
            expanded: false
        });
    }

    expand(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        this.setState({
            expanded: true
        });
    }

    public render() {

        return (
            <div>
            <div className="row">
                <div className="col-md-8">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-md-2 pull-right">
                    {
                        !this.state.expanded
                            ? <a className="btn" href="#"
                                onClick={e => this.expand(e)}>
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </a>
                            : <a className="btn" href="#"
                                onClick={e => this.collapse(e)} >
                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                            </a>
                    }
                </div>
            </div>
            { this.state.expanded 
                ? <LanguagesList importName={this.props.name}/>
                : null 
            }
            </div>
        );
    }
};
