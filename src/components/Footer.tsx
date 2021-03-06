import React from 'react';
import { Layout } from 'antd';

export interface FooterProps {}

function Footer(props: FooterProps) {
  return (
    <Layout.Footer>
      © 2022 · esxmod
    </Layout.Footer>
  );
}

export default React.memo(Footer);
