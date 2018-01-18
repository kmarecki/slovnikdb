import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { PageItem } from 'components/imports/pages-list/pageItem';

interface PageListProps {
    importName?: string;
    languageName?: string;
    onPageSelected?: (pageName: string) => any;
}

interface PageListState {
    pages: { name: string, selected: boolean }[];
    pageCount: number;
}

export class PagesList extends React.Component<PageListProps, PageListState> {

    constructor(props: any) {
        super(props);



    }

    loadPages() {
        let pageCount = Math.floor(Math.random() * 100) + 1;
        let i = 0;
        const state = {
            pages: [...Array(pageCount).keys()].map(() => {
                return {
                    name: `${++i} word`,
                    selected: false
                }
            }),
            pageCount: pageCount
        };
        this.setState(state);
    }

    selectPage(name: string) {
        this.state.pages.forEach(item => {
            item.selected = item.name == name;
        });
        this.setState(this.state);

        if (this.props.onPageSelected) {
            this.props.onPageSelected(name);
        }
    }

    componentWillReceiveProps(nextProps: PageListProps) {
        if (nextProps.importName != this.props.importName ||
            nextProps.languageName != this.props.languageName) {
            this.loadPages();
        }
    }
    public render() {

        return this.props.importName && this.props.languageName && this.state
            ? <div className="panel panel-default">
                <div className="panel-heading">Pages</div>
                <div className="panel-body">
                    <p>
                        <span>({this.state.pageCount}) {this.props.languageName}</span>
                    </p>
                    <ul className="list-group">
                        {this.state.pages.map(page => {
                            let classes = classnames('list-group-item list-group-item-small',
                                { active: page.selected });
                            return <li
                                className={classes}
                                key={page.name}
                                onClick={e => this.selectPage(page.name)}>
                                <PageItem
                                    name={page.name}
                                    selected={page.selected}
                                />
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            : <div className="panel panel-default">
                <div className="panel-heading">Pages</div>
                <div className="panel-body"></div>
            </div>

    }
};
