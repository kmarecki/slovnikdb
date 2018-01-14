import React from 'react';
import ReactDOM from 'react-dom';
import { ImportsList } from 'components/imports/imports-list/importsList';
import { PagesList } from 'components/imports/pages-list/pagesList';
import { PageDetail } from 'components/imports/page-detail/pageDetail';

export class WikiImports extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h4>Wiktionary imports</h4>
        <div className="row">
          <div className="col-md-3">
            <ImportsList/>
          </div>
          <div className="col-md-2">
            <PagesList/>
          </div>
          <div className="col-md-7">
            <PageDetail/>
          </div>
        </div>
      </div>
    );
  }
};
