# react-normalize

[![npm](https://img.shields.io/npm/v/react-normalize.svg)](https://www.npmjs.com/package/react-normalize)
[![npm](https://img.shields.io/npm/dm/react-normalize.svg)](https://www.npmjs.com/package/react-normalize)
[![Build Status](https://travis-ci.org/wangzuo/react-normalize.svg?branch=master)](https://travis-ci.org/wangzuo/react-normalize)
[![codecov](https://codecov.io/gh/wangzuo/react-normalize/branch/master/graph/badge.svg)](https://codecov.io/gh/wangzuo/react-normalize)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/wangzuo/react-normalize.svg)](https://greenkeeper.io/)

normalize.css as react component

[https://swiftcarrot.dev/react-normalize](https://swiftcarrot.dev/react-normalize)

### Installation

```sh
yarn add react-normalize
npm install react-normalize --save
```

### Usage

```javascript
import React, { Fragment } from 'react';
import Normalize from 'react-normalize';

const App = ({ children }) => (
  <Fragment>
    <Normalize />
    {children}
  </Fragment>
);
```

### License

MIT
