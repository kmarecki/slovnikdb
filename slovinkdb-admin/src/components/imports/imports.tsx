import React from 'react';
import ReactDOM from 'react-dom';
import { ImportsList } from 'components/imports/imports-list/importsList';
import { PagesList } from 'components/imports/pages-list/pagesList';
import { PageDetail } from 'components/imports/page-detail/pageDetail';

interface WikiImportsState {
  selectedImport?: string;
  selectedLanguage?: string;
}
export class WikiImports extends React.Component<any, WikiImportsState> {

  constructor(props: any) {
    super(props);

    this.state = {
      selectedImport: undefined,
      selectedLanguage: undefined
    };
  }

  selectImportLanguage(importName?: string, languageName?: string) {
    const state = {
      selectedImport: importName,
      selectedLanguage: languageName
    };
    this.setState(state);
  }

  public render() {
    return (
      <div>
        <h4>Wiktionary imports</h4>
        <div className="row">
          <div className="col-md-3">
            <ImportsList 
              onImportLanguageSelected={(importName, languageName) => this.selectImportLanguage(importName, languageName)}/>
          </div>
          <div className="col-md-2">
            <PagesList 
              importName={this.state.selectedImport}
              languageName={this.state.selectedLanguage}
            />
          </div>
          <div className="col-md-7">
            <PageDetail/>
          </div>
        </div>
      </div>
    );
  }
};
