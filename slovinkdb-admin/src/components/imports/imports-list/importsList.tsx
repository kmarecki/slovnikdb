import React from 'react';
import ReactDOM from 'react-dom';
import { ImportItem } from 'components/imports/imports-list/importItem';


interface ImportsListState {
    names: string[];
}

export class ImportsList extends React.Component<any, ImportsListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            names: [ 'plwiktionary', 'cswiktionary']
        };
    }

    public render() {
       
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Wiki imports</div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.names.map(name => {
                            return <li className="list-group-item" key={name}><ImportItem name={name}/></li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};
