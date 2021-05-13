import React from 'react';
import { connect } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';

const GlobalHeaderLeft = (props) => {
  const { theme, layout } = props;
  let className = styles.left;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.left}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      哈哈哈哈哈
      <Avatar menu />
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderLeft);
