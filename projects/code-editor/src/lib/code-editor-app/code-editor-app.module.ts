import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeEditorAppComponent} from './code-editor-app.component';
import {FormsModule} from '@angular/forms';
import {CodeEditorModule} from "../code-editor.module";
import {ICodeEditorOptions, NGX_CODE_EDITOR} from "../interfaces/code-editor.interface";

@NgModule({
  declarations: [CodeEditorAppComponent],
  imports: [CommonModule, FormsModule, CodeEditorModule],
  exports: [CodeEditorAppComponent]
})
export class CodeEditorAppModule {
  static forRoot(opts?: ICodeEditorOptions): ModuleWithProviders<CodeEditorAppModule> {
    return {
      ngModule: CodeEditorAppModule,
      providers: [{provide: NGX_CODE_EDITOR, useValue: opts}]
    };
  }
}
