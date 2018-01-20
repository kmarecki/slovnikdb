import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

interface ListPagerProps {
    page: number;
    pageCount: number;

    onPreviousClicked?: Function;
    onNextClicked?: Function;
}
export class ListPager extends React.Component<ListPagerProps, any> {

    constructor(props: any) {
        super(props);
    }

    nextClick(e: MouseEvent<HTMLElement>) {
        e.preventDefault();

        if (this.props.onNextClicked && this.props.page < this.props.pageCount) {
            this.props.onNextClicked();
        }
    }

    previousClick(e: MouseEvent<HTMLElement>) {
        e.preventDefault();

        if (this.props.onPreviousClicked && this.props.page > 1 ) {
            this.props.onPreviousClicked();
        }
    }

    public render() {
        const previousClasses = classnames('previous', { disabled: this.props.page == 1 });
        const nextClasses = classnames('next', { disabled: this.props.page == this.props.pageCount });
        return (
            <ul className="pager">
                <li className={previousClasses} >
                    <a onClick={e => this.previousClick(e)}>Previous
                    </a>
                </li>
                <li>
                    <span >{this.props.page}/{this.props.pageCount}</span>
                </li>
                <li className={nextClasses}>
                    <a onClick={e => this.nextClick(e)}>Next
                    </a>
                </li>
            </ul>

        );
    }
};