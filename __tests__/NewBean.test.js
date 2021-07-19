import { defaultValues } from '../src/elements/NewBean';

describe('returns expected data types', () => {
  test('defaultValues match schema', () => {
    const beanSchema = {
      name: expect.any(String),
      origin: expect.any(String),
      weight: expect.any(Number),
      roastDate: expect.any(Object),
      flavours: expect.any(String),
      notes: expect.any(String),
    };
    expect(defaultValues).toEqual(beanSchema);
  });
});
