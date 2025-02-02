import { FC } from 'react';
import { Code } from '@storybook/components'; // eslint-disable-line import/no-extraneous-dependencies
import classes from './index.module.scss';
import { ElementContent } from '../../types';

type FunctionArgumentProps = {
  children?: ElementContent;
  name?: string;
  type: string;
  description?: string;
  default?: string;
  required?: boolean;
};

const FunctionArgument: FC<FunctionArgumentProps> = ({
  children,
  name,
  type,
  description,
  default: defaultValue,
  required,
}) => (
  <li className={classes.argument}>
    {name && <code className={classes['argument-name']}>{name}</code>}
    <code className={classes['argument-type']}>{type}</code>
    {required && <span className={classes.required}>*</span>}
    {description && <> - {description}</>}
    {defaultValue && (
      <>
        {' '}
        Defaults to: <Code>{defaultValue}</Code>
      </>
    )}
    {children && <ul>{children}</ul>}
  </li>
);

export default FunctionArgument;
