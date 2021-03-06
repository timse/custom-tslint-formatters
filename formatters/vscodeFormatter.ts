import * as ts from 'typescript';
import * as Lint from 'tslint/lib/lint';

export class Formatter extends Lint.Formatters.AbstractFormatter {
  private formatFailure(failure: Lint.RuleFailure): string {
    const fileName = failure.getFileName();
    const {line, character} = failure.getStartPosition().getLineAndCharacter();
    const message = failure.getFailure();
    const ruleName = failure.getRuleName();
    return `[tslint] ${fileName}:${line + 1}:${character + 1}: ${message} (${ruleName})`;
  }

  public format(failures: Lint.RuleFailure[]): string {
    return failures.map(this.formatFailure).join('\n') + '\n';
  }
}
