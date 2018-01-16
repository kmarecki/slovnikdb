import React, {MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import { LanguageItem } from 'components/imports/imports-list/languageItem';

interface LanguagesListProp {
    importName: string;
}

interface LanguageListState {
    langItems: { name: string, pageCount: number, selected: boolean }[]
}

export class LanguagesList extends React.Component<LanguagesListProp, LanguageListState> {

    constructor(props: any) {
        super(props);

        this.state = {
            langItems: [
                {
                    name: `${this.props.importName} lang 1`,
                    pageCount: Math.floor(Math.random() * 100000) + 1,
                    selected: false,
                },
                {
                    name: `${this.props.importName} lang 2`,
                    pageCount: Math.floor(Math.random() * 100000) + 1,
                    selected: false,
                },
                {
                    name: `${this.props.importName} lang 3`,
                    pageCount: Math.floor(Math.random() * 100000) + 1,
                    selected: false,
                },
            ]
        }
    }

    selectItem(name: string) {
       this.state.langItems.forEach(item => {
            item.selected = item.name == name;
       });
       this.setState(this.state);
    }

    public render() {

        return (
            <div className="row well well-sm">
                <ul className="list-group">
                    {this.state.langItems.map(item => {
                        let classes = classnames('list-group-item', { active: item.selected });
                        return (
                            <li className={classes} key={item.name} onClick = { e => this.selectItem(item.name) }>
                                <LanguageItem 
                                    name={item.name} 
                                    pageCount={item.pageCount} />
                            </li>);
                    })}
                </ul>
            </div>
        );
    }
};
