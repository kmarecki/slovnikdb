import React from 'react';
import ReactDOM from 'react-dom';
import { ImportsList } from 'components/imports/imports-list/importsList';
import { PagesList } from 'components/imports/pages-list/pagesList';
import { PageDetail } from 'components/imports/page-detail/pageDetail';

interface WikiImportsState {
  selectedImport?: string;
  selectedLanguage?: string;
  selectedPage?: string;
}
export class WikiImports extends React.Component<any, WikiImportsState> {

  constructor(props: any) {
    super(props);

    this.state = {
      selectedImport: undefined,
      selectedLanguage: undefined,
      selectedPage: undefined
    };
  }

  selectImportLanguage(importName?: string, languageName?: string) {
    const state = {
      selectedImport: importName,
      selectedLanguage: languageName,
      selectPage: undefined
    };
    this.setState(state);
  }

  selectPage(pageName?: string) {
    const state = {
      selectedImport: this.state.selectedImport,
      selectedLanguage: this.state.selectedLanguage,
      selectedPage: pageName
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
              onImportLanguageSelected={(importName, languageName) => this.selectImportLanguage(importName, languageName)}
            />
          </div>
          <div className="col-md-2">
            <PagesList 
              importName={this.state.selectedImport}
              languageName={this.state.selectedLanguage}
              onPageSelected={(pageName) => this.selectPage(pageName)}
            />
          </div>
          <div className="col-md-7">
            <PageDetail
              importName={this.state.selectedImport}
              languageName={this.state.selectedLanguage}
              pageName={this.state.selectedPage}
            />
          </div>
        </div>
      </div>
    );
  }
};
