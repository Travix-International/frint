/* eslint-disable import/no-extraneous-dependencies, func-names */
/* global describe, it */
import { expect } from 'chai';

import h from './h';

describe('frint-compat › h', function () {
  it('is a function', function () {
    expect(h).to.be.a('function');
  });
});
