// flow-typed signature: 7590911c6c85fba7ad610188382ec41b
// flow-typed version: <<STUB>>/@storybook/addon-knobs_vx/flow_v0.97.0
// @flow

declare module '@storybook/addon-knobs' {
  declare type Context = { kind: string, story: string };
  declare type Renderable = React$Element<*>;
  declare type RenderFunction = () => Renderable | Array<Renderable>;
  declare type GroupId = string;

  declare type MultiOptionsKnobDisplay =
    | 'check'
    | 'inline-check'
    | 'multi-select'
  declare type SingleOptionsKnobDisplay =
    | 'radio'
    | 'inline-radio'
    | 'select'

  declare function optionsKnob<T>(string, (Array<T> | {[string]: T}), string, {|+display: MultiOptionsKnobDisplay|}): Array<T>;
  declare function optionsKnob<T>(string, (Array<T> | {[string]: T}), string, {|+display: SingleOptionsKnobDisplay|}): T;

  declare function array<T>(string, (Array<T> | {[string]: T}), ?string, ?GroupId): Array<T>;
  declare function radios<T>(string, (Array<T> | {[string]: T}), ?string): T;

  declare function boolean(string, boolean, ?GroupId): boolean;
  declare function button(string, ((?{}) => void), ?GroupId): void;
  declare function color(string, string, ?GroupId): string;
  declare function date(string, Date, ?GroupId): number;
  declare function number(string, number, ?{ range?: boolean, min?: number, max?: number, step?: number }, ?GroupId): number;
  declare function object(string, any, ?GroupId): any;
  declare function select<T>(string, Array<T> | { [T]: string }, T, ?GroupId): T;
  declare function selectV2<T>(string, Array<T> | { [string]: T }, T, ?GroupId): T;
  declare function text(string, string, ?GroupId): string;
  declare function withKnobs(
    story: RenderFunction,
    context: Context
  ): Renderable | null;
}
