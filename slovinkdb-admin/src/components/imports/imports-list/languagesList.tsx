import React from 'react';
import ReactDOM from 'react-dom';
import { LanguageItem } from 'components/imports/imports-list/languageItem';

interface LanguagesListProp {
    importName: string;
}

interface LanguageListState {
    langItems: { name: string, pageCount: number }[]
}

export class LanguagesList extends React.Component<LanguagesListProp, LanguageListState> {

    constructor(props: any) {
        super(props);

        this.state = {
            langItems: [
                {
                    name: `${this.props.importName} lang 1`,
                    pageCount: Math.floor(Math.random() * 100000) + 1
                },
                {
                    name: `${this.props.importName} lang 2`,
                    pageCount: Math.floor(Math.random() * 100000) + 1
                },
                {
                    name: `${this.props.importName} lang 3`,
                    pageCount: Math.floor(Math.random() * 100000) + 1
                },
            ]
        }
    }

    public render() {

        return (
            <div className="row well well-sm">
                <ul className="list-group">
                    {this.state.langItems.map(item => {
                        return (
                            <li className="list-group-item" key={item.name}>
                                <LanguageItem name={item.name} pageCount={item.pageCount} />
                            </li>);
                    })}
                </ul>
            </div>
        );
    }
};
