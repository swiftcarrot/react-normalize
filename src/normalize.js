import React from 'react';
import { normalize } from 'polished';
import { Global } from '@emotion/core';

const styles = normalize();
const Normalize = () => <Global styles={styles} />;

export default Normalize;
