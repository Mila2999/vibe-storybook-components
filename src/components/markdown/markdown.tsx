import { FC } from 'react';
import cx from 'classnames';
import CoreMarkdown from '../../helpers/components/Link/Link';
import styles from './markdown.module.scss';
import { MarkdownSize } from './MarkdownConstants';
import { withStaticProps } from '../../types';

type MarkdownProps = {
  className?: string;
  children: string;
  href: string;
  size?: MarkdownSize;
  withoutSpacing?: boolean;
};

const Markdown: FC<MarkdownProps> & { sizes?: typeof MarkdownSize } = ({
  children,
  href,
  size = Markdown.sizes?.MEDIUM,
  withoutSpacing = false,
  className,
}) => (
  <CoreMarkdown
    text={children}
    href={href}
    className={cx(styles.compsMarkdown, className, {
      [styles.small]: size === Markdown.sizes?.SMALL,
      [styles.medium]: size === Markdown.sizes?.MEDIUM,
      [styles.withSpacing]: !withoutSpacing,
    })}
  />
);

export default withStaticProps(Markdown, { sizes: MarkdownSize });
