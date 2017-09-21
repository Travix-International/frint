/* eslint-disable import/no-extraneous-dependencies, func-names */
/* global describe, it */
import { expect } from 'chai';

import Types from '../src/Types';
import createModel from '../src/createModel';
import isModel from '../src/isModel';

describe('frint-data › isModel', function () {
  it('returns true when object is a valid Model instance', function () {
    const Person = createModel({
      schema: {
        name: Types.string,
      },
    });

    const model = new Person({ name: 'Frint' });
    expect(isModel(model)).to.eql(true);
  });

  it('returns false when object is NOT a model', function () {
    expect(isModel(123)).to.eql(false);
    expect(isModel('hi')).to.eql(false);
    expect(isModel(() => {})).to.eql(false);
  });
});
