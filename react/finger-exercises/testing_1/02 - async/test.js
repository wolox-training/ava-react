import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    const result = await getData(true);
    expect(result).toBe('data');
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    return getData(true).then(result => expect(result).toBe('data'));
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    try {
      const result = await getData(false);
      expect(result).not.toBe('data');
    }
    catch (err) {
      expect(err).toEqual(new Error('error'));
    }
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {
    return getData(false).catch(err => {
      expect(err).toEqual(new Error('error'));
    });
  });
});
