import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { LanguagesList } from 'components/imports/imports-list/languagesList';

export interface ImportItemProps {
    name: string;
    expanded: boolean;

    onCollapsed?: Function;
    onExpanded?: Function;
}

export class ImportItem extends React.Component<ImportItemProps, any> {

    constructor(props: any) {
        super(props);
    }

    collapse(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        if (this.props.onCollapsed) {
            this.props.onCollapsed();
        }
    }

    expand(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        if (this.props.onExpanded) {
            this.props.onExpanded();
        }
       
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
                        !this.props.expanded
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
            { this.props.expanded 
                ? <LanguagesList importName={this.props.name}/>
                : null 
            }
            </div>
        );
    }
};
