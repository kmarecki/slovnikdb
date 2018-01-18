import React from 'react';
import ReactDOM from 'react-dom';

interface PageDetailProps {
    importName?: string;
    languageName?: string;
    pageName?: string;
}

export class PageDetail extends React.Component<PageDetailProps, any> {

    constructor(props: any) {
        super(props);
    }
    public render() {
        
        const model = {
            title: this.props.pageName as string,
            revisionId: Math.floor(Math.random() * 10000000) + 1,
            timestamp: new Date().toISOString(),
            text: this.props.importName as string,
            parsed: this.props.languageName as string
        };

        return this.props.importName && this.props.languageName && model.title
            ?
            <div className="panel panel-default">
                <div className="panel-heading">Page detail</div>
                <div className="panel-body">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control" id="title"
                                    value={model.title} readOnly>
                                </input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="revision">RevisionId:</label>
                                <input type="text" className="form-control" id="revision"
                                    value={model.revisionId} readOnly>
                                </input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="timestamp">Timestamp:</label>
                                <input type="text" className="form-control" id="timestamp"
                                    value={model.timestamp} readOnly>
                                </input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="text">Text:</label>
                                <textarea className="form-control" id="text"
                                    value={model.text} readOnly />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="parsed">Parsed:</label>
                                <textarea className="form-control disabled" id="parsed"
                                    value={model.parsed} readOnly />
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
