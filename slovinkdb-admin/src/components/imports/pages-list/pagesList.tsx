import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { PageItem } from 'components/imports/pages-list/pageItem';
import { ListPager } from 'components/imports/pages-list/listPager';

interface PageListProps {
    importName?: string;
    languageName?: string;
    onPageSelected?: (pageName?: string) => any;
}

interface PageListState {
    pages: { name: string, selected: boolean }[];
    pageCount: number;
    currentPage: number;
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
            pageCount: pageCount,
            currentPage: 1
        };
        this.setState(state);
    }

    selectPage(name: string) {
        this.state.pages.forEach(item => {
            item.selected = item.name == name;
        });

        if (this.props.onPageSelected) {
            this.props.onPageSelected(name);
        }
    }

    clearSelected() {
        this.state.pages.forEach(item => {
            item.selected = false;
        });
        if (this.props.onPageSelected) {
            this.props.onPageSelected(undefined);
        }
    }

    componentWillReceiveProps(nextProps: PageListProps) {
        if (nextProps.importName != this.props.importName ||
            nextProps.languageName != this.props.languageName) {
            this.loadPages();
        }
    }

    nextPage() {
        this.setState({ currentPage: this.state.currentPage + 1 });
        this.clearSelected();
    }

    previousPage() {
        this.setState({ currentPage: this.state.currentPage - 1 });
        this.clearSelected();
    }
    public render() {

        if (this.props.importName && this.props.languageName && this.state) {
            const pageSize = 20;
            const currentPageItems =
                this.state.pages.slice((this.state.currentPage - 1) * pageSize, this.state.currentPage * pageSize);

            return <div className="panel panel-default">
                <div className="panel-heading">Pages</div>
                <div className="panel-body">
                    <p>
                        <span>({this.state.pageCount}) {this.props.languageName}</span>
                    </p>
                    <ListPager
                        page={this.state.currentPage}
                        pageCount={Math.ceil(this.state.pageCount / pageSize)}
                        onNextClicked={() => this.nextPage()}
                        onPreviousClicked={() => this.previousPage()} />
                    <ul className="list-group">
                        {currentPageItems.map(page => {
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
        }
        return <div className="panel panel-default">
            <div className="panel-heading">Pages</div>
            <div className="panel-body"></div>
        </div>

    }
};
