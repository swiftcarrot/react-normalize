import React from 'react';
import { Global } from '@emotion/core';

const styles = preval`
  const { normalize } = require('polished');
  module.exports = normalize();
`;

const Normalize = () => <Global styles={styles} />;

export default Normalize;
