import React from 'react';
import ReactDOM from 'react-dom';

interface PageDetailProps {
    importName?: string;
    languageName?: string;
    pageName?: string;
}

interface PageDetailState {
    title: string;
    revisionId: number;
    timestamp: string;
    text: string;
    parsed: string;
}
export class PageDetail extends React.Component<PageDetailProps, PageDetailState> {

    constructor(props: any) {
        super(props);
    }

   componentWillReceiveProps(nextProps:PageDetailProps) {
        const state = {
            title: nextProps.pageName as string,
            revisionId: Math.floor(Math.random() * 10000000) + 1,
            timestamp: new Date().toISOString(),
            text: nextProps.importName as string,
            parsed: nextProps.languageName as string
        };
        
        this.setState(state);
    }
    public render() {
        const state = {
            title: this.props.pageName as string,
            revisionId: Math.floor(Math.random() * 10000000) + 1,
            timestamp: new Date().toISOString(),
            text: this.props.importName as string,
            parsed: this.props.languageName as string
        };

        return this.props.importName && this.props.languageName && this.state.title
            ?
            <div className="panel panel-default">
                <div className="panel-heading">Page detail</div>
                <div className="panel-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control" id="title"
                                    value={state.title} readOnly>
                                </input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="revision">RevisionId:</label>
                                <input type="text" className="form-control" id="revision"
                                    value={state.revisionId} readOnly>
                                </input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="timestamp">Timestamp:</label>
                                <input type="text" className="form-control" id="timestamp"
                                    value={state.timestamp} readOnly>
                                </input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="text">Text:</label>
                                <textarea className="form-control" id="text"
                                    value={state.text} readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="parsed">Parsed:</label>
                                <textarea className="form-control disabled" id="parsed"
                                    value={this.state.parsed} readOnly />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            : <div className="panel panel-default">
                <div className="panel-heading">Page detail</div>
                <div className="panel-body"></div>
            </div>;
    }
};
