import React from 'react';
import ReactDOM from 'react-dom';
import { ImportItem } from 'components/imports/imports-list/importItem';


interface ImportsListState {
    imports: { name: string, expanded: boolean }[];
}

export class ImportsList extends React.Component<any, ImportsListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            imports: [
                {
                    name: 'plwiktionary',
                    expanded: false
                },
                {
                    name: 'cswiktionary',
                    expanded: false
                },
                {
                    name: 'dewiktionary',
                    expanded: false
                }]
        };
    }

    collapse(name: string) {
        this.state.imports.forEach(item => {
            if (item.name == name) {
                item.expanded = false;
            }
        });
        this.setState(this.state);
    }

    expand(name: string) {
        this.state.imports.forEach(item => {
            item.expanded = item.name == name;
        });
        this.setState(this.state);
    }

    public render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Wiki imports</div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.imports.map(item => {
                            return <li className="list-group-item" key={item.name}>
                                <ImportItem
                                    name={item.name}
                                    expanded={item.expanded}
                                    onCollapsed={() => this.collapse(item.name)}
                                    onExpanded={() => this.expand(item.name)} />
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};
